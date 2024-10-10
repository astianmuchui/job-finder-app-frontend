import Image from "next/image";
import { MapPin, Clock, Briefcase } from "lucide-react"; // Add icons like MapPin, Clock, Briefcase as needed

const JobCard = () => {
    return (
        <div className="flex flex-col space-y-3 bg-black/10 shadow-lg min-w-[20%] min-h-[400px] lg:h-[400px] lg:w-[20%] mx-auto rounded-xl p-4 ">
            <div className="flex items-center space-x-3">
                <Image src="/logos/SAF-MAIN-LOGO.png" alt={"logo"} width={70} height={70} className="rounded-full"/>
                <div>
                    <h2 className="font-bold text-gray-800 text-lg">
                        Safaricom
                    </h2>
                    <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={15} className="mr-1"/>
                        <p>Nairobi, Kenya</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <h1 className="text-black font-bold text-xl">
                    Senior Software Engineer
                </h1>
                <div className="flex space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                        <Briefcase size={15} className="mr-1"/>
                        <p>Full-time</p>
                    </div>
                    <div className="flex items-center">
                        <Clock size={15} className="mr-1"/>
                        <p>2 hours ago</p>
                    </div>
                </div>
            </div>

            <p className="text-gray-600 text-sm pt-8">
                Create your free job posting today and start receiving competitive quotes from qualified professionals within just a few hours.
            </p>


            <div className="flex justify-between pt-6 items-center mt-auto w-full">
                <div className="text-purple-800/70 font-bold text-lg">
                    $800<span className="text-sm text-gray-500">/hr</span>
                </div>
                <button className="bg-purple-400 text-purple-800/70 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-200">
                    Apply
                </button>
            </div>
        </div>
    );
};

export default JobCard;
