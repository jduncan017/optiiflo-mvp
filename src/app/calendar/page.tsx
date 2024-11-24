import EmailSidebar from "~/components/emailClient/emailSidebar";
import TopBar from "~/components/ui/topBar";

export default function CalendarPage() {
  const topBarTitles = [
    {
      name: "Month",
      icon: "",
      url: "",
    },
    {
      name: "Week",
      icon: "",
      url: "",
    },
    {
      name: "Day",
      icon: "",
      url: "",
    },
    {
      name: "Agenda",
      icon: "",
      url: "",
    },
  ];
  return (
    <div className="EmailClient flex h-full w-full bg-G1">
      <EmailSidebar />
      <div className="flex h-full w-full flex-col items-center justify-center bg-G1 text-2xl">
        <TopBar titles={topBarTitles} />
        <div className="flex h-full w-full items-center justify-center">
          <h2 className="">Calendar</h2>
        </div>
      </div>
    </div>
  );
}
