
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-ucla-blue to-ucla-darkblue text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Find your perfect UCLA apartment sublease
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Connect directly with UCLA students looking to sublet their apartments. 
            Find the right place that matches your needs, budget, and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-ucla-gold text-gray-800 hover:bg-opacity-90 font-semibold text-lg px-8">
              <Link to="/apartments">Browse Apartments</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-ucla-blue font-semibold text-lg px-8">
              <Link to="/create-listing">List Your Apartment</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFD100" d="M40,-51.2C51.9,-42.5,61.4,-29.9,64.6,-15.6C67.8,-1.3,64.7,14.6,57.3,28.2C49.9,41.8,38.2,52.9,24.3,59.4C10.4,65.9,-5.7,67.7,-20.9,63.5C-36,59.2,-50.2,48.8,-59.9,34.7C-69.5,20.5,-74.7,2.6,-71.2,-13.3C-67.6,-29.2,-55.3,-43.1,-41.3,-51.2C-27.2,-59.4,-11.4,-61.7,2.5,-65C16.4,-68.3,32.8,-72.5,40,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
