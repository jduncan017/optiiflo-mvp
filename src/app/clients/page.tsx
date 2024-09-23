import EmailSidebar from "~/components/emailClient/emailSidebar";

export default function ClientsPage() {
  return (
    <div className="EmailClient flex h-full w-full bg-gray-100">
      <EmailSidebar />
      <div className="flex h-full w-full items-center justify-center bg-gray-200 text-2xl tracking-widest">
        Clients
      </div>
    </div>
  );
}
