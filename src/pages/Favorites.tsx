
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ApartmentCard, { ApartmentData } from "@/components/ApartmentCard";
import { mockApartments } from "@/data/mockApartments";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Favorites = () => {
  // In a real app, this would come from user preferences in a database
  // For now, we'll just use a few random apartments as favorites
  const [favorites, setFavorites] = useState<ApartmentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Just use a subset of the mock apartments for demo purposes
      const demoFavorites = mockApartments.slice(0, 3);
      setFavorites(demoFavorites);
      setIsLoading(false);
    };

    fetchFavorites();
  }, []);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(apt => apt.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Heart className="h-6 w-6 text-ucla-blue mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Your Favorites</h1>
          </div>

          {isLoading ? (
            <div className="flex justify-center my-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ucla-blue"></div>
            </div>
          ) : favorites.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No favorites yet</h3>
              <p className="text-gray-600 mb-6">
                Start saving your favorite apartments to track them and compare later.
              </p>
              <Button asChild className="bg-ucla-blue hover:bg-ucla-darkblue">
                <a href="/apartments">Browse Apartments</a>
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {favorites.map((apartment) => (
                  <div key={apartment.id} className="relative">
                    <ApartmentCard apartment={apartment} />
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                      onClick={() => removeFavorite(apartment.id)}
                    >
                      <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Compare your favorite apartments to make the best choice for your needs.
                </p>
                <Button asChild className="bg-ucla-blue hover:bg-ucla-darkblue">
                  <a href="/apartments">Find More Apartments</a>
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
