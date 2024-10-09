import React from "react";

interface Category {
    id: number;
    name: string;
    icon: React.ReactNode;
}

const SmallCategoryCard = ({ category }: { category: Category }) => {
    return (
        <div className={"flex flex-row justify-center items-center space-x-2 w-56 text-black border border-black/10 rounded-xl p-1 hover:bg-purple-200"}>
           <div>
               {category.icon}
           </div>
            <h1 className={"text-lg"}>{category.name}</h1>
        </div>
    )
};

export default SmallCategoryCard;