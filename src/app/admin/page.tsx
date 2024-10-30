
import RootLayout from "./layout"
import { PencilIcon, UserIcon, UserCog2Icon, PaperclipIcon } from "lucide-react"
import LineGraph from "@/components/LineGraph"

const page = () => {

  return (
    <RootLayout>
        <div className="w-full h-full p-3">
            <h1 className="text-purple-950 font-bold text-xl">
                Welcome, Admin
            </h1>

        <div className="grid grid-cols-4 place-items-center w-full mt-4 gap-3 h-40">
            <div className="card w-full h-36 border border-gray-200 shadow-sm rounded-2xl bg-gradient-to-tr from-purple-900 to-purple-950/90 p-3">
                <UserIcon className="text-purple-100 " strokeWidth={3} ></UserIcon>
                <p className="text-lg my-1 tracking-wider text-white font-bold ">Users</p>
                <h1 className="text-3xl text-purple-300 font-extrabold">23</h1>
            </div>

            <div className="card w-full h-36 border border-gray-200 shadow-sm rounded-2xl bg-gradient-to-tr from-pink-600 to-pink-700 p-3">
                <PencilIcon className="text-pink-100" strokeWidth={3} ></PencilIcon>
                <p className="text-lg my-1 tracking-wider text-white  font-bold ">Applications</p>
                <h1 className="text-3xl text-pink-300 font-extrabold">400</h1>
            </div>

            <div className="card w-full h-36 border border-gray-200 shadow-sm rounded-2xl bg-gradient-to-tr from-purple-900 to-purple-950/90 p-3">
                <UserCog2Icon className="text-purple-100" strokeWidth={3} ></UserCog2Icon>
                <p className="text-lg my-1 tracking-wider text-white font-bold ">Recruiters</p>
                <h1 className="text-3xl text-purple-300 font-extrabold">10000</h1>
            </div>

            <div className="card w-full h-36 border border-gray-200 shadow-sm rounded-2xl bg-gradient-to-tr from-pink-600 to-pink-700/90 p-3">
                <PaperclipIcon className="text-purple-100" strokeWidth={3} ></PaperclipIcon>
                <p className="text-lg my-1 tracking-wider font-bold text-white">Jobs added</p>
                <h1 className="text-3xl text-pink-300 font-extrabold">1000</h1>
            </div>
        </div>
        <LineGraph></LineGraph>
        </div>

    </RootLayout>
  )
}

export default page