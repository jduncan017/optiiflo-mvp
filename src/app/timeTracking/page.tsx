import EmailSidebar from "~/components/emailClient/emailSidebar";
import TopBar from "~/components/ui/topBar";
import { Clock } from "lucide-react";

export default function MyWeekPage() {
  const topBarTitles = [
    {
      name: "Time Tracker",
      icon: <Clock />,
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
    {
      name: "Dashboard",
      icon: null,
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
    {
      name: "Reports",
      icon: null,
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
    {
      name: "Projects",
      icon: null,
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
  ];
  return (
    <div className="EmailClient flex h-full w-full bg-G1">
      <EmailSidebar />
      <div className="flex h-full w-full flex-col items-center justify-center bg-G1 text-2xl">
        <TopBar titles={topBarTitles} />
        <div className="flex h-full w-full items-center justify-center">
          <h2 className="">Time Tracking</h2>
        </div>
      </div>
    </div>
  );
}
