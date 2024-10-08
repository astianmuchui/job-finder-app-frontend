import {Navbar} from "flowbite-react";

const HeroesSection = () => {
    return(
        <div className={"text-white bg-amber-600"}>
            <Navbar fluid rounded className={"bg-red-800 flex flex-row justify-between"}>
                <Navbar.Brand href="https://flowbite.com/" className={"pr-32"}>
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">

        </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className={"flex flex-col"}>
                    <Navbar.Link href="/navbars" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">About</Navbar.Link>
                    <Navbar.Link href="/navbars">Services</Navbar.Link>
                    <Navbar.Link href="/navbars">Pricing</Navbar.Link>
                    <Navbar.Link href="/navbars">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <h1>Heroes Section</h1>
        </div>
    )
}

export default HeroesSection;