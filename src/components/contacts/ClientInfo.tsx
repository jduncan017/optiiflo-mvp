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
      );
}