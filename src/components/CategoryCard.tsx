import {BadgeDollarSign} from "lucide-react";


const  CategoryCard = ()=> {
    return (
        <div className={"w-full h-[20vh] lg:w-[17vw] lg:h-[13vh] border border-black/10  rounded-lg flex flex-row space-x-8 justify-center items-center "} >
           <div className={""}>
               <BadgeDollarSign size={45}/>
           </div>
            <div className={"flex flex-col space-y-4"}>
                <p>
                    Finance
                </p>
                <p>
                    120 Jobs available
                </p>
            </div>
        </div>
    )
}

export default CategoryCard;