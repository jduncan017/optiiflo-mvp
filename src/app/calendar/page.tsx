import EmailSidebar from "~/components/emailClient/emailSidebar";
import TopBar from "~/components/ui/topBar";

export default function CalendarPage() {
  const topBarTitles = [
    {
      name: "Month",
      icon: "",
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
    {
      name: "Week",
      icon: "",
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
    {
      name: "Day",
      icon: "",
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
    {
      name: "Agenda",
      icon: "",
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
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
