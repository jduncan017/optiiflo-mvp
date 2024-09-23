import Avatar from "~/components/ui/avatar";
import { Input } from "~/components/ui/input";
import emailData from "~/lib/emailData";
import type { Email } from "~/lib/emailData";
import emailNameParse from "~/utils/emailNameParse";
import formatDate from "~/utils/dateFormat";

interface EmailListProps {
  selectEmail: (email: Email) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function EmailList({
  selectEmail,
  searchQuery,
  setSearchQuery,
}: EmailListProps) {
  const filteredEmails = emailData.filter(
    (email) =>
      email.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.body.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="EmailList flex h-full w-[375px] flex-col border-r-4 bg-white">
      <div className="SearchBarContainer bg-neutral-800">
        <div className="p-4">
          <Input
            className="SearchBar w-full"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <ul className="Emails flex-1 overflow-y-auto">
        {filteredEmails.map((email, i) => (
          <li
            key={i}
            className="EmailListItem flex cursor-pointer gap-2 border-b border-neutral-400 bg-neutral-100 p-4 hover:bg-optiiBlue"
            onClick={() => selectEmail(email)}
          >
            <Avatar className="h-9 w-9" fullName={email.from} />
            <div className="EmailContentsContainer flex flex-col">
              <div className="EmailHeader flex justify-between space-x-3">
                <div className="EmailHeaderLeft flex items-center space-x-3">
                  <div className="EmailHeaderContent flex flex-col">
                    <p className="text-sm font-semibold">
                      {emailNameParse(email.from).name}
                    </p>
                    <p className="text-xs text-gray-500">{email.subject}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  {formatDate(email.date)}
                </p>
              </div>
              <p className="mt-2 line-clamp-2 text-xs text-gray-500">
                {email.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
