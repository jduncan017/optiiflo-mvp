import React from "react";
import type { Email } from "~/lib/emailData";
import emailNameParse from "~/utils/emailNameParse";
import Avatar from "~/components/ui/avatar";
import formatDate from "~/utils/dateFormat";
type EmailContentProps = {
  email: Email;
};

export default function EmailContent({ email }: EmailContentProps) {
  const { from, to, body, date, attachments } = email;

  const hasAttachments = attachments.length > 0;

  const formattedDate = formatDate(date);

  const { name: senderName, email: senderEmail } = emailNameParse(from);

  // Function to format the body, preserving newlines
  const formatBody = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="ContentWindow border-G2 m-6 h-fit flex-1 rounded-lg bg-white p-6">
      <div className="HeaderSection mb-6">
        <div className="EmailHeader flex items-start justify-between gap-2">
          <div className="From/To flex gap-2 leading-none">
            <Avatar className="h-10 w-10" fullName={from} />
            <div className="EmailFrom flex flex-col items-start">
              <div className="SenderNameContainer flex gap-2">
                <p className="SenderName text-lg font-semibold leading-none">
                  {senderName && `${senderName}`}
                </p>
                <p className="To text-G3 text-sm">{`to ${to}`}</p>
              </div>
              <p className="SenderEmail text-G3 text-sm">{senderEmail}</p>
            </div>
          </div>
          <p className="Date text-G3 text-sm">{formattedDate}</p>
        </div>

        {hasAttachments && (
          <p>
            <strong>Attachments:</strong> {attachments.length}
          </p>
        )}
      </div>
      <div className="email-body">{formatBody(body)}</div>
    </div>
  );
}
