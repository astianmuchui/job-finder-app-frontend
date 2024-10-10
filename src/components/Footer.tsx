import {name} from "@/lib/Constants";
const Footer = () => {
    return (
        <footer className="bg-purple-800/70 text-white py-16">




    <div className="container mx-auto px-4 flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between md:items-center relative z-10">

        <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to Get Your Dream Job?</h3>
            <a href="#" className="text-4xl md:text-5xl font-bold flex items-center space-x-4">
                <span className={"underline underline-offset-[20px]"}>Register Here Now</span>
                <span className="text-5xl">→</span>
            </a>
        </div>

        <div className="max-w-sm space-y-4">
            <div className="flex items-center space-x-2">

                    <span className="text-2xl font-semibold">{name}</span>
            </div>
            <p className="text-gray-300">
                Take the next step in your career journey with Gighaven . Designed to streamline the Job hunt process, our personalized Feed matches and helps you connect with top employers and recruiters.
            </p>
        </div>
    </div>


    <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="flex justify-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white">Gmail</a>
            <a href="#" className="text-gray-300 hover:text-white">Github</a>
            <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
        </div>
        <p className="text-center text-gray-400 mt-4 text-sm">
            ©2024 GigHaven Studio. All rights reserved.
        </p>
    </div>
</footer>
    );
}

export default Footer;
