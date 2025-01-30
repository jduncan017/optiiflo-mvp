import { Ellipsis, SquareArrowOutUpRight } from "lucide-react";
import ListItemWrapper from "~/components/wrappers/listItemWrapper";
import type { Individual, Organization } from "~/types/types";
import Avatar from "~/components/ui/avatar";

export default function ContactItem({
  contact,
}: {
  contact: Organization | Individual;
}) {
  const contactName =
    "name" in contact
      ? contact.name
      : `${contact.firstName} ${contact.lastName}`;

  return (
    <ListItemWrapper>
      <div className="ContactItem flex w-full items-center justify-between gap-2">
        <div className="ContactInfoContainer flex w-fit items-center gap-2 hover:text-P2 hover:underline">
          <Avatar className="h-9 w-9" fullName={contactName} />
          <p className="ContactName cursor-pointer font-bold">{contactName}</p>
          <div className="ContactButtonContainer hover:text-P2">
            <SquareArrowOutUpRight className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div className="ContactButtons flex items-center gap-4 text-G4">
          <div className="ContactButtonContainer hover:text-P2">
            <Ellipsis className="h-7 w-7 cursor-pointer" />
          </div>
        </div>
      </div>
    </ListItemWrapper>
  );
}
