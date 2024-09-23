import { EmailClientComponent } from "~/components/emailClient/emailClient";

export default function HomePage() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <EmailClientComponent />
    </main>
  );
}
