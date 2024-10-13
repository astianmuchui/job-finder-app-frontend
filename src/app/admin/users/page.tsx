import RootLayout from "../layout";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import Modal from "@/components/Modal";

const page = () => {
    return (
        <RootLayout>


            <div className="w-full h-full p-3">
                <h1 className="text-xl font-bold text-purple-900">Manage Users</h1>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 ">
                    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-3  pt-1 bg-white ">
                        <div>
                            <button className="bg-gradient-to-br cursor-pointer  from-purple-700/80 via-purple-800/70 to-purple-900 p-2 text-sm rounded-xl mt-1 hover:bg-gradient-to-tr" id="trigger">
                                Add new
                            </button>
                        </div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-gray-50 focus:border-1 focus:border-gray-100 focus:outline-0" placeholder="Search for users" />
                        </div>
                    </div>
                    <Modal trigger="#trigger">
                        <div className="w-full h-full p-3">
                            <h1 className="text-xl font-bold text-purple-900">Add User</h1>
                            <form className="w-full  mt-6">
                                <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2 text-md font-bold text-purple-900 capitalize">Name</label>
                                    <input type="text" id="name" className="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 dark:bg-gray-700 " placeholder="John doe" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-md font-bold text-purple-900 capitalize">Email Address</label>
                                    <input type="email" id="email" className="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 dark:bg-gray-700 " placeholder="name@mail.com" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-md font-bold text-purple-900 capitalize"> password</label>
                                    <input type="password" id="password" className="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 dark:bg-gray-700 " required />
                                </div>

                                <button type="submit" className="text-white bg-gradient-to-br from-purple-700/80 via-purple-800/70 to-purple-900 p-3 rounded-xl mt-1 hover:bg-gradient-to-tr focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                            </form>

                        </div>
                    </Modal>

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="">
                                        <div className="text-base font-semibold">Neil Sims</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    neils@gmail.com
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-purple-100 bg-gradient-to-tr hover:bg-gradient-to-bl  from-purple-700/70 via-purple-800 to-purple-900 py-2 px-2 rounded-lg capitalize">view user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="">
                                        <div className="text-base font-semibold">Bonnie Green</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    bonnie@gmail.com
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-purple-100 bg-gradient-to-tr hover:bg-gradient-to-bl  from-purple-700/70 via-purple-800 to-purple-900 py-2 px-2 rounded-lg capitalize">view user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="">
                                        <div className="text-base font-semibold">Jese Leos</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    jesse@gmail.com
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-purple-100 bg-gradient-to-tr hover:bg-gradient-to-bl  from-purple-700/70 via-purple-800 to-purple-900 py-2 px-2 rounded-lg capitalize">view user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="">
                                        <div className="text-base font-semibold">Thomas Lean</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    lean.thomsas@gmail.com
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-purple-100 bg-gradient-to-tr hover:bg-gradient-to-bl  from-purple-700/70 via-purple-800 to-purple-900 py-2 px-2 rounded-lg capitalize">view user</a>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="">
                                        <div className="text-base font-semibold">Leslie Livingston</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    leslie.livingston@gmail.com
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-purple-100 bg-gradient-to-tr hover:bg-gradient-to-bl  from-purple-700/70 via-purple-800 to-purple-900 py-2 px-2 rounded-lg capitalize">view user</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </RootLayout>
    )
}

export default page