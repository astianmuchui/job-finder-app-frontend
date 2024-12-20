import {Search} from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

type SearchBarProps = {
    placeholder: string;
}

const SearchBar = ({placeholder}: SearchBarProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();


    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div
            className={"flex flex-row items-center p-1 lg:w-[100%] h-16 mt-4 lg:flex lg:flex-row lg:items-center lg:justify-between lg:border-2 lg:p-2  bg-white rounded-2xl"}>
            <div className={"flex flex-row items-center pl-2"}>

                <Search size={20} className={"text-black/40"}/>
                <input type="text" placeholder={placeholder} onChange={(e) => handleSearch(e.target.value)}  defaultValue={searchParams.get('query')?.toString()}
                       className="p-2 rounded-lg border-0 focus:outline-none focus:ring-0"/>

            </div>
            <Link href="/">
                <button
                    className="w-max p-3 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-lg hover:bg-gradient-to-br">
                    Search
                </button>
            </Link>
        </div>
    )
}

export default SearchBar;