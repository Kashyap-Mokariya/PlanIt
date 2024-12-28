import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import DashboardWrapper from "./(root)/dashboardWrapper";

export const metadata: Metadata = {
  title: "PlanIt",
  description: "Project Management App",
  icons: [{ rel: "icon", url: "/main.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <DashboardWrapper>
          {children}
        </DashboardWrapper>
      </body>
    </html>
  );
}
