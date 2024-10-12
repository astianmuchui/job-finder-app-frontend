'use client';

import HeroesSection from "@/components/HeroesSection";
import Category from "@/components/Category";
import HowItWorks from "@/components/HowItWorks";
import FindAJob from "@/components/FindAJob";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
      <div className={"flex flex-col"}>
          <NavBar/>
          <HeroesSection id={"home"}/>
          <Category id={"category"}/>
          <HowItWorks id={"howitworks"}/>
          <FindAJob id={"jobs"}/>
          <Footer />
      </div>
  );
}

