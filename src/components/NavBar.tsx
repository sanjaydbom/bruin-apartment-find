
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Heart, User, Home } from "lucide-react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Home className="h-6 w-6 text-ucla-blue" />
          <span className="text-2xl font-bold text-ucla-blue">BruinLease</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/apartments" className="text-gray-700 hover:text-ucla-blue font-medium">Browse</Link>
          <Link to="/create-listing" className="text-gray-700 hover:text-ucla-blue font-medium">List Your Apartment</Link>
          <Link to="/favorites" className="text-gray-700 hover:text-ucla-blue font-medium">Favorites</Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/favorites">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button className="bg-ucla-blue hover:bg-ucla-darkblue">Sign In</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            className="text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <Link to="/apartments" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">Browse</Link>
            <Link to="/create-listing" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">List Your Apartment</Link>
            <Link to="/favorites" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">Favorites</Link>
            <Link to="/search" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">Search</Link>
            <Link to="/profile" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">Profile</Link>
            <Button className="w-full bg-ucla-blue hover:bg-ucla-darkblue">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
