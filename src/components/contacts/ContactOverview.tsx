import type { Organization, Individual } from "~/types/types";
import TopBar from "../ui/topBar";
import { Button } from "../ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import CardWrapper from "~/components/CardWrapper";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

interface ContactOverviewProps {
  contact: Organization | Individual;
  onBack: () => void;
}

export default function ContactOverview({
  contact,
  onBack,
}: ContactOverviewProps) {
  const name =
    "name" in contact
      ? contact.name
      : contact.firstName + " " + contact.lastName;

  const topBarTitles = [
    { name: "Overview", onClick: () => console.log("Overview") },
    { name: "Projects", onClick: () => console.log("Projects") },
    { name: "Details", onClick: () => console.log("Details") },
    { name: "Communications", onClick: () => console.log("Communications") },
    { name: "Documents", onClick: () => console.log("Documents") },
  ];

  const addButton = {
    label: "Add Project",
    onClick: () => console.log("Add Project"),
    icon: <Plus className="h-4 w-4" />,
  };

  return (
    <div className="ContactOverviewContent flex h-full w-full flex-col bg-G1">
      <TopBar titles={topBarTitles} addButton={addButton}>
        <Button variant="secondary" size="sm" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
          Back
        </Button>
      </TopBar>
      <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
          <CardWrapper>
            <div className="CardHeader flex w-full items-center justify-between">
              <h2 className="text-2xl font-bold tracking-wide">Client Information</h2>
              <div className="RightSide flex items-center gap-2">
                <h2 className="text-sm font-kumbh text-P2">!!! </h2>
                <h2 className="text-sm font-kumbh"> HIGH IMPORTANCE</h2>
              </div>
              
            </div>
            
            <div className="FirstLine flex justify-between w-full">
              <h3 className="ClientInfo text-sm font-kumbh">Created Date</h3>
              <h3 className="text-sm font-kumbh">1/15/2025</h3>
            </div>

            <div className="SecondLine flex justify-between w-full">
              <h3 className="TeamMembers text-sm font-kumbh">Team</h3>
              <h3 className="TeamImages"></h3>
            </div>

            <div className="ThirdLine flex justify-between w-full">
              <h3 className="ContactPerson text-sm font-kumbh">Contact</h3>
              <div className="ViewAll hover:text-S4 text-P2">
              <Link href={`/myWeek/${null}`}>
                <button className="flex cursor-pointer items-center gap-1 p-0">
                  <p className="text-sm">Alice Johnson</p>
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            </div>
          </CardWrapper>
          <CardWrapper>
            <div className="CardHeader flex w-full items-center justify-between">
            <h2 className="text-2xl font-bold tracking-wide">Upcoming Due Dates</h2>
            <div className="ViewAll hover:text-S4 text-P2">
              <Link href={`/myWeek/${null}`}>
                <button className="flex cursor-pointer items-center gap-1 p-0">
                  <p className="text-sm">View All</p>
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            </div>
          </CardWrapper>
          <CardWrapper>
          <div className="CardHeader flex w-full items-center justify-between">
            <h2 className="text-2xl font-bold tracking-wide">Active Projects</h2>
            <div className="ViewAll hover:text-S4 text-P2">
              <Link href={`/myWeek/${null}`}>
                <button className="flex cursor-pointer items-center gap-1 p-0">
                  <p className="text-sm">View All</p>
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            </div>
          </CardWrapper>
          <CardWrapper>
          <div className="CardHeader flex w-full items-center justify-between">
            <h2 className="text-2xl font-bold tracking-wide">Attachments</h2>
            <div className="ViewAll hover:text-S4 text-P2">
              <Link href={`/myWeek/${null}`}>
                <button className="flex cursor-pointer items-center gap-1 p-0">
                  <p className="text-sm">View All</p>
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            </div>
          </CardWrapper>
          </div>
      </div>
  );
}
