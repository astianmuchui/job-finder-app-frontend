import Sidebar from "@/app/applications/_components/Sidebar";

type LayoutProps = {
    children: React.ReactNode
}

export default async function Layout({children}: LayoutProps) {
    return (
        <div className={"flex flex-row justify-between w-[100vw] h-[100vh]"}>
            <div className={"w-[15%]"}>
                <Sidebar/>
            </div>
            <div className={"flex-grow w-[85%]"}>
                {children}
            </div>
        </div>
    )

}