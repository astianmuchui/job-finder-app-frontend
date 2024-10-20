import type { Metadata } from "next";
// import localFont from "next/font/local";
import Link from "next/link";
export const metadata: Metadata = {
  title: "GigHaven Admin",
  description: "Generated by create next app",
};

import { UserPen, PaperclipIcon, UserCog2Icon, HomeIcon, LogOut, UserIcon } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-white"
      >

        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-purple-500 rounded-lg sm:hidden hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-purple-400 dark:hover:bg-purple-700 dark:focus:ring-purple-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-purple-950 dark:bg-purple-800">
            <h1 className="text-purple-500 font-bold tracking-wider mb-6 ml-2 text-xl">GigHaven Admin</h1>
            <ul className="space-y-2 font-medium">
              <li className="border-b border-b-purple-900/50 mb-3">
                <Link href="/admin/" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                  <HomeIcon className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full" size={60} strokeWidth={2}></HomeIcon>
                  Dashboard
                </Link>
              </li>
              <li className="border-b border-b-purple-900/50 mb-3 ">
              <Link href="/admin/users" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                  <UserIcon className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full" size={60} strokeWidth={2}></UserIcon>
                  Manage Users
                </Link>
              </li>
              <li className="border-b border-b-purple-900/50 mb-3 ">

              <Link href="/admin/jobs" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                  <PaperclipIcon className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full" size={60} strokeWidth={2}></PaperclipIcon>
                  Manage Jobs
                </Link>
              </li>
              <li className="border-b border-b-purple-900/50 mb-3">
              <Link href="/admin/applications" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                  <UserPen className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full" size={60} strokeWidth={2}></UserPen>
                  Manage Applications
              </Link>
              </li>
              <li className="border-b border-b-purple-900/50 mb-3">
              <Link href="/admin/recruiters" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                  <UserCog2Icon className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full" size={60} strokeWidth={2}></UserCog2Icon>
                  Manage Recruiters
                </Link>
              </li>

              <li className="border-b border-b-purple-900/50 mb-3">
              <Link href="/admin/logout" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                  <LogOut className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full" size={60} strokeWidth={2}></LogOut>
                  Sign Out
                </Link>
              </li>


            </ul>
          </div>
        </aside>

        <div className="p-1 sm:ml-64 h-lvh">
          {children}
        </div>

      </body>
    </html>
  );
}
