"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import TopBar from "~/components/ui/topBar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import MonthView from "~/components/calendar/MonthView";


export default function CalendarPage() {

  const [startDate, setStartDate] = useState(new Date())
  const [selectedTab, setSelectedTab] = useState("Month");
  const date = new Date(startDate)
  const year = date.getFullYear()
  const month = date.getMonth()

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
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
    <div className="CalendarPage flex h-full w-full bg-G1">
      <div className="PageContent flex h-full w-full flex-col items-center justify-center bg-G1 text-2xl">
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
          <div className="DateContainer flex gap-4 items-center">
          <div className="ButtonContainer flex gap-2">
          <Button size="smIcon" className="bg-N1 text-P2 hover:bg-P2 hover:text-N1 shadow-optii h-fit">
            <ChevronLeft className="h-4 w-4"/>
          </Button>
          <Button size="smIcon" className="bg-N1 text-P2 hover:bg-P2 hover:text-N1 shadow-optii h-fit">
            <ChevronRight className="h-4 w-4"/>
          </Button>
          </div>
          <h2>
            {monthNames[month]} {year}
          </h2>
          </div>
        </TopBar>
        <div className="CalendarContent flex flex-col h-full w-full items-center justify-center p-5">
          <MonthView year={year} month={month}/>
        </div>
      </div>
    </div>
  );
}
