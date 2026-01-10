'use client'
import React from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Overlap1 from "@/components/Overlap1";
import Mission1 from "@/components/Mission1";
import JoinUs from "@/components/JoinUs";
import StoriesArticles from "@/components/StoriesArticles";
import TestimonialFAQ from "@/components/TestimonialFAQ";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

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
      <Footer />
    </div>
  );
};

export default Home;