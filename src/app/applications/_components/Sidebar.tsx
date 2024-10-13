import Link from "next/link";
import {CalendarClock, CalendarX, HomeIcon, LogOut, NotebookPen, PaperclipIcon, Search, UserCog2Icon, UserIcon, UserPen, UsersRound} from "lucide-react";

export default function Sidebar() {
    return (
        <div className={"fixed left-0"}>

            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar"
                    aria-controls="sidebar-multi-level-sidebar" type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-purple-500 rounded-lg sm:hidden hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-purple-400 dark:hover:bg-purple-700 dark:focus:ring-purple-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>


            <aside id="sidebar-multi-level-sidebar"
                   className="fixed top-0 left-0 z-40 w-[16%] h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div
                    className="h-full px-3 py-4 overflow-y-auto bg-purple-800/70 backdrop:filter backdrop-blur-md dark:bg-purple-800">
                    <h1 className="text-white font-bold tracking-wider mb-6 ml-2 text-sm lg:text-xl">Welcome Joan</h1>
                    <ul className="space-y-2 font-medium">
                        <li className="border-b border-b-purple-900/50 mb-3">
                            <Link href="/applications/"
                                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                                <NotebookPen
                                    className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full"
                                    size={60} strokeWidth={2}></NotebookPen>
                                My Applications
                            </Link>
                        </li>
                        <li className="border-b border-b-purple-900/50 mb-3 ">
                            <Link href="/applications/referals"
                                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                                <UsersRound
                                    className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full"
                                    size={60} strokeWidth={2}></UsersRound>
                                Referals
                            </Link>
                        </li>
                        <li className="border-b border-b-purple-900/50 mb-3 ">

                            <Link href="/applications/due"
                                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                                <CalendarClock
                                    className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full"
                                    size={60} strokeWidth={2}></CalendarClock>
                                Incomplete Applications
                            </Link>
                        </li>
                        <li className="border-b border-b-purple-900/50 mb-3 ">

                            <Link href="/applications/closed"
                                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                                <CalendarX
                                    className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full"
                                    size={60} strokeWidth={2}></CalendarX>
                                Closed Applications
                            </Link>
                        </li>
                        <li className="border-b border-b-purple-900/50 mb-3">
                            <Link href="/"
                                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                                <HomeIcon
                                    className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full"
                                    size={60} strokeWidth={2}></HomeIcon>
                                Home Page
                            </Link>
                        </li>
                        <li className="border-b border-b-purple-900/50 mb-3">
                            <Link href="/jobs"
                                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                                <Search
                                    className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full"
                                    size={60} strokeWidth={2}></Search>
                                Explore jobs
                            </Link>
                        </li>

                        <li className="border-b border-b-purple-900/50 mb-3">
                            <Link href="/admin/logout"
                                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-purple-900 text-sm font-medium">
                                <LogOut
                                    className="text-purple-950 mr-2  bg-white box-content p-1 h-5 w-5 object-cover rounded-full"
                                    size={60} strokeWidth={2}></LogOut>
                                Sign Out
                            </Link>
                        </li>


                    </ul>
                </div>
            </aside>

        </div>
    )
}