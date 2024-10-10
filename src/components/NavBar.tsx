import {Button, Dropdown, Navbar} from "flowbite-react";
import {name} from "@/lib/Constants";
import {BriefcaseBusiness, House, NotebookPen} from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <div className={"flex flex-col justify-between items-center bg-purple-100 shadow fixed w-full top-0 start-0 z-20 h-18"}>
            <Navbar fluid rounded className={"bg-white/20 backdrop:filter backdrop:backdrop-blur-md w-full p-4"}>
                <div className="flex items-center justify-between w-full">
                    <Navbar.Brand href="https://flowbite.com/">
                            <span className="self-center whitespace-nowrap text-xl font-semibold text-black tracking-wider px-3">
                                {name}
                            </span>
                    </Navbar.Brand>

                    {/* Dropdown for smaller screens */}
                    <div className={"lg:hidden  text-black"}>
                        <Dropdown
                            className={"bg-white/30 backdrop:filter backdrop:backdrop-blur-md gap-y-12 w-52 p-2 text-black "}
                            arrowIcon={false}
                            inline
                            label={
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            }
                        >
                            <div className={"space-y-4 text-black"}>
                                <Dropdown.Item className={"m-2"}>
                                    <Navbar.Link href="#home" active
                                                 className={"text-md mx-3 flex items-center justify-center text-black"}>
                                        <House size={20} className={"mr-4"}/>
                                        Home
                                    </Navbar.Link>
                                </Dropdown.Item>
                                <Dropdown.Divider className={"h-[1px] bg-black/50"}/>
                                <Dropdown.Item className={"m-2"}>
                                    <Navbar.Link href="#category"
                                                 className={"text-md mx-3 flex items-center justify-center"}>
                                        <BriefcaseBusiness size={20} className={"mr-4"}/>
                                        Jobs
                                    </Navbar.Link>
                                </Dropdown.Item>
                                <Dropdown.Divider className={"h-[1px] bg-black/50"}/>
                                <Dropdown.Item className={"m-2"}>
                                    <Navbar.Link href="/navbars"
                                                 className={"text-md mx-3 flex items-center justify-center"}>
                                        <NotebookPen size={20} className={"mr-4"}/>
                                        Applications
                                    </Navbar.Link>
                                </Dropdown.Item>
                                <Dropdown.Divider className={"h-[1px] bg-black/50"}/>
                                <Dropdown.Item>
                                    <Link href="/">
                                        <button className="w-max p-3 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-lg hover:bg-gradient-to-br">
                                            Get Started
                                        </button>
                                    </Link>
                                </Dropdown.Item>
                            </div>
                        </Dropdown>
                    </div>

                    {/* Collapse for larger screens */}
                    <div className={"hidden lg:flex lg:items-center lg:space-x-4 lg:list-none lg:text-black"}>
                        <Navbar.Link href="#" active className={"text-black underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-purple-800/70"}>
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="#" className={" underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-purple-800/70"}>About</Navbar.Link>
                        <Navbar.Link href="#" className={" underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-purple-800/70"}>Services</Navbar.Link>
                        <Navbar.Link href="#" className={ "underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-purple-800/70"}>Pricing</Navbar.Link>
                        <Navbar.Link href="#" className={" underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-purple-800/70"}>Contact</Navbar.Link>

                        <Link href="/">
                                        <button className="w-max p-3 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-lg hover:bg-gradient-to-br">
                                            Get Started
                                        </button>
                                    </Link>
                        </div>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;