import "~/styles/globals.css";
import SidebarComponent from "~/components/appSidebar";
import { NavigationBar } from "~/components/navigationBar";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { CurrentPageProvider } from "~/contexts/currentPageContext";

export const metadata: Metadata = {
  title: "Optiiflo MVP",
  description:
    "Minimum viable product example for Optiiflo - a CPA firm management application.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex h-screen w-full">
        <CurrentPageProvider>
          <div className="SidebarLayoutContainer flex h-full w-full">
            <SidebarComponent />
            <div className="MaintContentContainer flex h-screen w-full flex-col">
              <NavigationBar />
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
