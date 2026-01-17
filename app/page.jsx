'use client'
import React from "react";
import { default as nextDynamic } from "next/dynamic";
import Hero from "@/components/Hero";
import Overlap1 from "@/components/Overlap1";
import Mission1 from "@/components/Mission1";
import JoinUs from "@/components/JoinUs";
import StoriesArticles from "@/components/StoriesArticles";
import TestimonialFAQ from "@/components/TestimonialFAQ";

export const dynamic = 'force-dynamic';
const Navbar = nextDynamic(() => import("@/components/Navbar"));

const Home = () => {
  return (
    <div className="w-full m-0 p-0">
      <Navbar/>
      <main className="w-full m-0 p-0">
        <Hero />
        <Overlap1 />
        <Mission1 />
        <JoinUs />
        <StoriesArticles />
        <TestimonialFAQ />
      </main>
    </div>
  );
};

export default Home;