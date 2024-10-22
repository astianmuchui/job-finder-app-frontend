import CompanyMarquee from "@/components/CompanyMarquee";
import {ArrowBigLeftDash, ArrowBigRightDash, MoveRight} from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import React, {useState} from "react";

// Total number of cards (adjust this to your data)
const TOTAL_CARDS = 10;
type CategoryProps = {
    id: string
}

const Category = ({id}: CategoryProps) => {

    const [currentPage, setCurrentPage] = useState(0);


    const cardsPerPage = window.innerWidth >= 1024 ? 8 : 4;

    const cards = Array.from({ length: TOTAL_CARDS }, (_, i) => <CategoryCard key={i} />);


    const totalPages = Math.ceil(cards.length / cardsPerPage);


    const currentCards = cards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);


    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };


    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div id={id} className={"bg-purple-100 text-black h-[90vh] lg:h-[80vh] flex flex-col space-y-10"}>
            <CompanyMarquee/>
            <div className={" flex flex-col items-center space-y-4 mt-4"}>
                <h1 className={"font-bold text-xl text-center lg:text-5xl lg:text-center"}>Browse By Categories</h1>
                <p className={"text-md lg:text-2xl font-light"}>Discover the perfect job tailored just for you</p>
            </div>
            <div className={"flex flex-row justify-center items-center"}>
                <div className={"absolute right-[3rem] -bottom-[9rem] lg:right-[14rem] lg:-bottom-[12rem]  flex flex-row justify-center items-center text-purple-800/70 space-x-3"}>
                    <p>
                        See all
                    </p>
                    <MoveRight />
                </div>
                <div className={" bg-purple-800/70  text-white/70 rounded-full m-2 p-1"} onClick={() => handlePrev()}>
                    <ArrowBigLeftDash size={30}/>
                </div>
                <div className={"w-[80%] bg-purple-100 h-[60vh] lg:h-[40vh] flex flex-col space-y-4 lg:flex lg:flex-row lg:flex-wrap justify-center items-center p-2 lg:space-y-0 lg:space-x-4"}>
                    {currentCards}
                </div>
                <div className={"bg-purple-800/70 text-white/70  rounded-full m-2 p-1"} onClick={() => handleNext()}>

                    <ArrowBigRightDash size={30}/>
                </div>
            </div>
        </div>
    );
}

export default Category;
