
import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { mockApartments } from "@/data/mockApartments";

const Index = () => {
  // Get the featured apartments
  const featuredApartments = mockApartments.filter(apt => apt.isFeatured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
