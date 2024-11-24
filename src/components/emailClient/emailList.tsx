import Avatar from "~/components/ui/avatar";
import { SearchBar } from "~/components/ui/SearchBar";
import emailData from "~/lib/emailData";
import type { Email } from "~/lib/emailData";
import emailNameParse from "~/utils/emailNameParse";
import formatDate from "~/utils/dateFormat";
import { cva } from "class-variance-authority";

// Define styles using cva
const emailListItemStyles = cva(
  "EmailListItem flex cursor-pointer gap-2 border-b border-G2 p-4",
  {
    variants: {
      selected: {
        true: "bg-S2/80",
        false: "bg-N1 hover:bg-S2/40",
      },
    },
  },
);

interface EmailListProps {
  selectEmail: (email: Email) => void;
  selectedEmailID?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  emailFilter: string;
}

export default function EmailList({
  selectEmail,
  searchQuery,
  setSearchQuery,
  selectedEmailID,
  emailFilter,
}: EmailListProps) {
  const filteredEmails = emailData.filter(
    (email) =>
      email.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.body.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="EmailList flex h-full w-[500px] flex-col border-r-4 bg-white">
      <div className="SearchBarContainer bg-G5">
        <div className="p-4">
          <SearchBar
            className="SearchBar w-full"
            type="text"
            placeholder="Search, (CMD + R)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="EmailListHeader flex items-center justify-between border-b border-G2 bg-G1 px-6 py-2">
        <p className="EmailFilter text-xs capitalize text-G3">{`Viewing: ${emailFilter}`}</p>
        <p className="EmailCount text-xs capitalize text-G3">{`${filteredEmails.length} Emails`}</p>
        <p className="EmailCountSnoozed text-xs capitalize text-G3">{`${filteredEmails.filter((email) => email.snoozed).length} Snoozed`}</p>
      </div>

      <ul className="Emails flex-1 overflow-y-auto">
        {filteredEmails.map((email, i) => (
          <li
            key={i}
            className={emailListItemStyles({
              selected: selectedEmailID === email.messageId,
            })}
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
                    <p className="text-xs text-G4">{email.subject}</p>
                  </div>
                </div>
                <p className="text-sm text-G3">{formatDate(email.date)}</p>
              </div>
              <p className="mt-2 line-clamp-2 text-xs text-G3">{email.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
