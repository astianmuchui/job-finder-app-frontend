'use client';

import HeroesSection from "@/components/HeroesSection";
import Jobs from "@/components/Jobs";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
        <HeroesSection/>
        <Jobs/>
    </div>
  );
}
