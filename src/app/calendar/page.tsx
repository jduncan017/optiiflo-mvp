"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import TopBar from "~/components/ui/topBar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import MonthView from "~/components/calendar/MonthView";

export default function CalendarPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTab, setSelectedTab] = useState("Month");
  const date = new Date(startDate);
  const year = date.getFullYear();
  const month = date.getMonth();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const topBarTitles = [
    {
      name: "Month",
      icon: "",
      onClick: () => setSelectedTab("Month"),
    },
    {
      name: "Week",
      icon: "",
      onClick: () => setSelectedTab("Week"),
    },
    {
      name: "Day",
      icon: "",
      onClick: () => setSelectedTab("Day"),
    },
    {
      name: "Agenda",
      icon: "",
      onClick: () => setSelectedTab("Agenda"),
    },
  ];

  return (
    <div className="CalendarPage w-ful flex h-full">
      <div className="PageContent flex h-full w-full flex-col items-center justify-center bg-G5 text-2xl">
        <TopBar
          titles={topBarTitles}
          addButton={{
            label: "Add Event",
            onClick: () => {
              console.log("Add Event");
            },
            icon: <Plus className="h-4 w-4" />,
          }}
        >
          <div className="DateContainer flex items-center gap-4">
            <div className="ButtonContainer flex gap-2">
              <Button
                size="smIcon"
                className="h-fit bg-N1 text-P2 shadow-optii hover:bg-P2 hover:text-N1"
                onClick={() => {
                  setStartDate(new Date(startDate.setMonth(month - 1)));
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                size="smIcon"
                className="h-fit bg-N1 text-P2 shadow-optii hover:bg-P2 hover:text-N1"
                onClick={() => {
                  setStartDate(new Date(startDate.setMonth(month + 1)));
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <h2>
              {monthNames[month]} {year}
            </h2>
          </div>
        </TopBar>
        <div className="CalendarContent flex h-full w-full flex-col items-center justify-center pt-5">
          {selectedTab === "Month" && <MonthView year={year} month={month} />}
        </div>
      </div>
    </div>
  );
}
