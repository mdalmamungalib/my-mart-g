"use client"
import localFont from "next/font/local";
import "../../../styles/main.scss";
import Sidebar from "components/backoffice/Sidebar/Sidebar";
import Navbar from "components/backoffice/Navbar/Navbar";
import { useState } from "react";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  const [showSidebar, setShowSideBar] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar}/>

      {/* Content Area */}
      <div className="w-full ml-0 lg:ml-60">
        {/* Navbar */}
        <div>
          <Navbar showSidebar={showSidebar} setShowSideBar={setShowSideBar}/>
        </div>
        {/* Main Content */}
        <main
          className="p-8 bg-slate-200 dark:bg-[#19192B] dark:text-teal-50 
        text-slate-800 min-h-screen pt-20"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
