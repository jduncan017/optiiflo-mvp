export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ProjectsLayout flex h-full w-full overflow-hidden">
      {children}
    </div>
  );
}
