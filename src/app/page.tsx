'use client';

import HeroesSection from "@/components/HeroesSection";
import Category from "@/components/Category";
import HowItWorks from "@/components/HowItWorks";
import FindAJob from "@/components/FindAJob";


export default function Home() {
  return (
      <div className={"flex flex-col"}>
          <HeroesSection/>
          <Category/>
          <HowItWorks/>
          <FindAJob/>
      </div>
  );
}

