"use client";
import CardWrapper from "~/components/CardWrapper";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import type { IndividualData } from "~/lib/individualsData";
import type { OrganizationData } from "~/lib/organizationsData";
type ClientInfoProps = {
  contact: IndividualData | OrganizationData;
};

export default function ClientInfo({ contact }: ClientInfoProps) {
  const name =
    "name" in contact
      ? contact.name
      : contact.firstName + " " + contact.lastName;
  return (
    <CardWrapper className="ClientInfoCard flex flex-col gap-2">
      <div className="CardHeader flex w-full items-center justify-between border-b border-G2 pb-1">
        <h2 className="text-2xl font-bold tracking-wide">{name}</h2>
        <div className="RightSide flex items-center gap-2">
          <h2 className="font-kumbh text-sm text-P2">!!! </h2>
          <h2 className="font-kumbh text-sm"> HIGH IMPORTANCE</h2>
        </div>
      </div>

      <div className="FirstLine flex w-full justify-between">
        <h3 className="ClientInfo font-kumbh text-sm font-medium">
          Created Date
        </h3>
        <h3 className="font-kumbh text-sm">{contact.createdAt[0]}</h3>
      </div>

      <div className="SecondLine flex w-full justify-between">
        <h3 className="TeamMembers font-kumbh text-sm font-medium">Team</h3>
        <p className="TeamImages">
          {contact.pointOfContact.firstName} {contact.pointOfContact.lastName}
        </p>
      </div>

      <div className="ThirdLine flex w-full justify-between">
        <h3 className="ContactPerson font-kumbh text-sm font-medium">
          Contact
        </h3>
        <div className="ViewAll text-P2 hover:text-S4">
          <Link href={`/myWeek/${null}`}>
            <button className="flex cursor-pointer items-center gap-1 p-0">
              <p className="text-sm">Alice Johnson</p>
              <SquareArrowOutUpRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
}
