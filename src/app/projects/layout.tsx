import InnerSidebar from "~/components/emailClient/InnerSidebar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ProjectsLayout flex h-full w-full overflow-hidden">
      {/* <InnerSidebar /> */}
      {children}
    </div>
  );
}
