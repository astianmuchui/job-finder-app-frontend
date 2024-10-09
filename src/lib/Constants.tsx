import {BadgeDollarSign, BriefcaseBusiness, Cpu, Figma, GraduationCap, HeartPulse, Twitch} from "lucide-react";

export const  name = "GigHaven";
export const Highlight = ({
                              children,
                              className,
                          }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
      {children}
    </span>
    );
};
export const CARDS = [
    {
        id: 0,
        name: "Personalized Feed",
        designation: "Explore Jobs Tailored for You",
        content: (
            <p>
                Access a personalized feed of job opportunities, tailored to your skills, preferences, and search history.
                Our platform ensures that you are always seeing the most relevant positions, saving you time and effort.
            </p>
        ),
    },
    {
        id: 1,
        name: "Track Your Application",
        designation: "Stay Updated on Your Job Applications",
        content: (
            <p>
                Keep track of all your job applications in one place. Easily refer to previous applications, view statuses,
                and get notifications on updates so you are always informed.
            </p>
        ),
    },
    {
        id: 2,
        name: "Filter by Categories",
        designation: "Refine Your Job Search",
        content: (
            <p>
                Search efficiently by filtering job opportunities by categories. Whether you're looking for specific roles, industries, or levels,
                our advanced filters make it easy to find the jobs that best suit your expertise and interests.
            </p>
        ),
    },
    {
        id: 3,
        name: "Access 1000+ Companies",
        designation: "Discover Opportunities from Top Employers",
        content: (
            <p>
                Explore a vast range of job opportunities from over 1000 companies. From startups to established enterprises, find your ideal job
                from some of the most renowned employers across various industries.
            </p>
        ),
    }
    ]

export const JobCategories = [
    {
        id:0,
        name: "Finance",
        icon: <BadgeDollarSign size={20} className={"mr-4"}/>,

    }
    ,
    {
        id:1,
        name: "Tech",
        icon: <Cpu size={20} className={"mr-4"}/>,

    }
    ,
    {
        id:2,
        name: "Health",
        icon: <HeartPulse  size={20} className={"mr-4"}/>,
    }
    ,
    {
        id:3,
        name: "Education",
        icon: <GraduationCap  size={20} className={"mr-4"}/>,
    }
    ,
    {
        id:4,
        name: "Marketing",
        icon: <Twitch  size={20} className={"mr-4"}/>,
    }
    ,
    {
        id:5,
        name: "Sales",
        icon: <BadgeDollarSign  size={20} className={"mr-4"}/>,
    },
    {
        id:6,
        name: "Design",
        icon: <Figma   size={20} className={"mr-4"}/>,
    }

]
