'use client';

import HeroesSection from "@/components/HeroesSection";
import Category from "@/components/Category";


export default function Home() {
  return (
    <div className={"flex flex-col"}>
        <HeroesSection/>
       <Category/>
    </div>
  );
}

