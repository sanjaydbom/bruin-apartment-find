
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
        <FeaturedListings apartments={featuredApartments} />
        <HowItWorks />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">What Students Say</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Hear from UCLA students who found their perfect apartment through BruinLease
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-ucla-blue text-white flex items-center justify-center font-bold text-xl">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Michael Chen</h4>
                    <p className="text-sm text-gray-600">Computer Science, 2026</p>
                  </div>
                </div>
                <p className="text-gray-700">"After weeks of searching on various platforms, I found my perfect apartment on BruinLease in just two days. The filtering options made it so easy to find exactly what I was looking for."</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-ucla-blue text-white flex items-center justify-center font-bold text-xl">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Sophia Rodriguez</h4>
                    <p className="text-sm text-gray-600">Biology, 2025</p>
                  </div>
                </div>
                <p className="text-gray-700">"I needed to sublet my apartment while I was away for a summer internship. BruinLease made it super simple to create a listing and connect with potential sublessees. Found a match within a week!"</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-ucla-blue text-white flex items-center justify-center font-bold text-xl">
                    J
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">James Wong</h4>
                    <p className="text-sm text-gray-600">Economics, 2024</p>
                  </div>
                </div>
                <p className="text-gray-700">"The contract generator on BruinLease saved me a lot of headaches. It was easy to use and gave me peace of mind knowing that all the important details were covered in my sublease agreement."</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-ucla-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Sublease?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join hundreds of UCLA students who have found their ideal housing situation through BruinLease.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/apartments" className="bg-ucla-gold text-gray-800 hover:bg-opacity-90 font-semibold text-lg px-8 py-3 rounded-md">
                Browse Apartments
              </a>
              <a href="/create-listing" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ucla-blue font-semibold text-lg px-8 py-3 rounded-md">
                List Your Apartment
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
