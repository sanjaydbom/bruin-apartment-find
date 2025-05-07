
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mockApartments } from "@/data/mockApartments";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, User, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const ApartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [apartment, setApartment] = useState(mockApartments.find(apt => apt.id === id));
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ucla-blue"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!apartment) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Apartment Not Found</h1>
            <p className="text-gray-600 mb-6">The listing you are looking for does not exist or has been removed.</p>
            <Button asChild className="bg-ucla-blue hover:bg-ucla-darkblue">
              <a href="/apartments">Browse Other Apartments</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatAvailability = () => {
    const from = new Date(apartment.availableFrom).toLocaleDateString('en-US', 
      { month: 'long', day: 'numeric', year: 'numeric' });
    const to = new Date(apartment.availableTo).toLocaleDateString('en-US', 
      { month: 'long', day: 'numeric', year: 'numeric' });
    return `${from} - ${to}`;
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const getFurnishedText = () => {
    switch(apartment.furnished) {
      case "fully": return "Fully Furnished";
      case "partially": return "Partially Furnished";
      case "no": return "Not Furnished";
      default: return "Not Specified";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-80 md:h-96 bg-gray-300">
              <img 
                src={apartment.imageUrl} 
                alt={apartment.title} 
                className="w-full h-full object-cover"
              />
              {apartment.isFeatured && (
                <div className="absolute top-4 left-4 bg-ucla-gold text-black text-sm font-bold px-3 py-1 rounded-md">
                  Featured
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{apartment.title}</h1>
                  <p className="text-gray-600 mt-1">{apartment.address}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-3xl font-bold text-ucla-blue">${apartment.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 py-4 border-b border-gray-200">
                <div>
                  <span className="text-gray-600 block text-sm">Bedrooms</span>
                  <span className="font-semibold text-lg">{apartment.bedrooms}</span>
                </div>
                <div>
                  <span className="text-gray-600 block text-sm">Bathrooms</span>
                  <span className="font-semibold text-lg">{apartment.bathrooms}</span>
                </div>
                <div>
                  <span className="text-gray-600 block text-sm">Square Feet</span>
                  <span className="font-semibold text-lg">{apartment.sqft}</span>
                </div>
                <div>
                  <span className="text-gray-600 block text-sm">Parking Spots</span>
                  <span className="font-semibold text-lg">{apartment.parking}</span>
                </div>
                <div>
                  <span className="text-gray-600 block text-sm">Furnished</span>
                  <span className="font-semibold text-lg">{getFurnishedText()}</span>
                </div>
              </div>
              
              <div className="py-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Availability</h2>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-ucla-blue" />
                  <span>{formatAvailability()}</span>
                </div>
              </div>
              
              <div className="py-6">
                <h2 className="text-xl font-semibold mb-4">About This Listing</h2>
                <p className="text-gray-700 leading-relaxed">
                  Located in the heart of Westwood, this apartment offers convenience and comfort for UCLA students. 
                  Just a short walk to campus, grocery stores, and popular restaurants. The apartment features modern 
                  appliances, great natural lighting, and a spacious layout perfect for students.
                </p>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3">Amenities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-ucla-blue mr-2" />
                      <span>Air Conditioning</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-ucla-blue mr-2" />
                      <span>Laundry on-site</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-ucla-blue mr-2" />
                      <span>High-Speed Internet</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-ucla-blue mr-2" />
                      <span>Dishwasher</span>
                    </div>
                    {apartment.parking > 0 && (
                      <div className="flex items-center">
                        <Check className="h-5 w-5 text-ucla-blue mr-2" />
                        <span>Parking Included</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button className="bg-ucla-blue hover:bg-ucla-darkblue">
                  <User className="mr-2 h-4 w-4" /> Contact Sublessor
                </Button>
                <Button variant="outline" className="border-ucla-blue text-ucla-blue" onClick={toggleFavorite}>
                  <Heart className={cn("mr-2 h-4 w-4", isFavorite && "fill-red-500 text-red-500")} />
                  {isFavorite ? "Saved to Favorites" : "Add to Favorites"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApartmentDetail;
