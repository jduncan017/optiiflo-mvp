import "~/styles/globals.css";
import SidebarComponent from "~/components/appSidebar";
import { NavigationBar } from "~/components/navigationBar";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { CurrentPageProvider } from "~/contexts/currentPageContext";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Optiiflo MVP",
  description:
    "An innovative CPA firm management application designed to streamline workflows and enhance project management.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "Optiiflo",
    "CPA",
    "workflow",
    "organization",
    "project management",
    "accounting",
    "finance",
    "tax",
  ],
  authors: [{ name: "Joshua Duncan" }, { name: "DigitalNova Studio" }],
  openGraph: {
    title: "Optiiflo MVP",
    description:
      "An innovative CPA firm management application designed to streamline workflows and enhance project management.",
    // url: "https://www.optiiflo.com",
    type: "website",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Optiiflo MVP",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex h-screen w-full overflow-hidden">
        <CurrentPageProvider>
          <div className="SidebarLayoutContainer flex h-full w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <SidebarComponent />
            </Suspense>
            <div className="MainContentContainer flex h-screen w-full flex-col">
              <Suspense fallback={<div>Loading...</div>}>
                <NavigationBar />
              </Suspense>
              <div className="MainContentWindow flex-1 overflow-y-scroll">
                {children}
              </div>
            </div>
          </div>
        </CurrentPageProvider>
      </body>
    </html>
  );
}
