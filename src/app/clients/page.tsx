import EmailSidebar from "~/components/emailClient/emailSidebar";
import TopBar from "~/components/ui/topBar";

export default function ClientsPage() {
  const topBarTitles = [
    {
      name: "All Clients",
      icon: "",
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
    {
      name: "Active",
      icon: "",
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
    {
      name: "Inactive",
      icon: "",
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    },
    {
      name: "Archived",
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
          <h2 className="">Clients</h2>
        </div>
      </div>
    </div>
  );
}
