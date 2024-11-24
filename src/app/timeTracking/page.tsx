import EmailSidebar from "~/components/emailClient/emailSidebar";
import TopBar from "~/components/ui/topBar";
import { Clock } from "lucide-react";

export default function MyWeekPage() {
  const topBarTitles = [
    {
      name: "Time Tracker",
      icon: <Clock />,
      url: "",
    },
    {
      name: "Dashboard",
      icon: null,
      url: "",
    },
    {
      name: "Reports",
      icon: null,
      url: "",
    },
    {
      name: "Projects",
      icon: null,
      url: "",
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
