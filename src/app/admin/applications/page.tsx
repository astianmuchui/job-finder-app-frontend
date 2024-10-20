import RootLayout from "../layout"
// import Image from "next/image"
// import Link from "next/link"
// import Modal from "@/components/Modal"

const page = () => {
  return (
    <RootLayout>

        <div className="w-full h-full p-3">
                <h1 className="text-xl font-bold text-purple-900">Manage Applications</h1>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 ">
                    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-3  pt-1 bg-white ">
                        <div>
                        </div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-gray-50 focus:border-1 focus:border-gray-100 focus:outline-0" placeholder="Search for applications" />
                        </div>
                    </div>

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
                                    Company Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Application Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Applicant Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email Address
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
                                        <div className="text-base font-semibold">Safaricom</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    Software Engineer
                                </td>
                                <td className="px-6 py-4">
                                    John doe
                                </td>
                                <td className="px-6 py-4">
                                    john.doe@gmail.com
                                </td>

                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-purple-100 bg-gradient-to-tr hover:bg-gradient-to-bl  from-purple-700/70 via-purple-800 to-purple-900 py-2 px-2 rounded-lg capitalize">view application</a>
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
