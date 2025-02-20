"use client";
import CardWrapper from "~/components/CardWrapper";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function ClientInfo() {
  return (
    <CardWrapper>
      <div className="CardHeader flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold tracking-wide">Client Information</h2>
        <div className="RightSide flex items-center gap-2">
          <h2 className="font-kumbh text-sm text-P2">!!! </h2>
          <h2 className="font-kumbh text-sm"> HIGH IMPORTANCE</h2>
        </div>
      </div>

      <div className="FirstLine flex w-full justify-between">
        <h3 className="ClientInfo font-kumbh text-sm">Created Date</h3>
        <h3 className="font-kumbh text-sm">1/15/2025</h3>
      </div>

      <div className="SecondLine flex w-full justify-between">
        <h3 className="TeamMembers font-kumbh text-sm">Team</h3>
        <h3 className="TeamImages"></h3>
      </div>

      <div className="ThirdLine flex w-full justify-between">
        <h3 className="ContactPerson font-kumbh text-sm">Contact</h3>
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
