import EmailSidebar from "~/components/emailClient/emailSidebar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ProjectsLayout flex h-full w-full overflow-hidden">
      <EmailSidebar />
      {children}
    </div>
  );
}
