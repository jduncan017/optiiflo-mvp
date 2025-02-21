import "~/styles/globals.css";
import SidebarComponent from "~/components/appSidebar";
import { NavigationBar } from "~/components/navigationBar";
import { type Metadata } from "next";
import { CurrentPageProvider } from "~/contexts/currentPageContext";
import { Suspense } from "react";
import { ModalProvider } from "~/contexts/ModalContext";

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

import { inter, kumbhSans } from "~/lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${kumbhSans.variable}`}>
      <body className="flex h-screen w-full overflow-hidden font-kumbh">
        <ModalProvider>
          <CurrentPageProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <SidebarComponent />
              <div className="MainContentContainer flex h-full w-full flex-col">
                {/* <NavigationBar /> */}
                <div className="MainContentWindow h-full max-h-[calc(100vh-68px)]">
                  {children}
                </div>
              </div>
            </Suspense>
          </CurrentPageProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
