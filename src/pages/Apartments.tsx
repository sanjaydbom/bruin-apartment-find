
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FilterBar, { FilterOptions } from "@/components/FilterBar";
import ApartmentCard, { ApartmentData } from "@/components/ApartmentCard";
import { mockApartments } from "@/data/mockApartments";
import { Button } from "@/components/ui/button";

const Apartments = () => {
  const [apartments, setApartments] = useState<ApartmentData[]>([]);
  const [filteredApartments, setFilteredApartments] = useState<ApartmentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("recommended");

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setApartments(mockApartments);
      setFilteredApartments(mockApartments);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleFilterChange = (filters: FilterOptions) => {
    // Filter apartments based on selected criteria
    const filtered = apartments.filter(apartment => {
      // Price range filter
      if (apartment.price < filters.priceRange[0] || apartment.price > filters.priceRange[1]) {
        return false;
      }

      // Bedrooms filter (if not "any")
      if (filters.bedrooms !== "any") {
        const bedroomCount = parseInt(filters.bedrooms);
        if (filters.bedrooms === "4+" && apartment.bedrooms < 4) {
          return false;
        } else if (filters.bedrooms !== "4+" && apartment.bedrooms !== bedroomCount) {
          return false;
        }
      }

      // Bathrooms filter (if not "any")
      if (filters.bathrooms !== "any") {
        if (filters.bathrooms === "3+" && apartment.bathrooms < 3) {
          return false;
        } else if (filters.bathrooms === "1" && apartment.bathrooms !== 1) {
          return false;
        } else if (filters.bathrooms === "2" && apartment.bathrooms !== 2) {
          return false;
        }
      }

      // Furnished filter (if not "any")
      if (filters.furnished !== "any" && apartment.furnished !== filters.furnished) {
        return false;
      }

      return true;
    });

    setFilteredApartments(filtered);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    let sorted = [...filteredApartments];

    switch (option) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "date-newest":
        sorted.sort((a, b) => new Date(b.availableFrom).getTime() - new Date(a.availableFrom).getTime());
        break;
      case "date-oldest":
        sorted.sort((a, b) => new Date(a.availableFrom).getTime() - new Date(b.availableFrom).getTime());
        break;
      default:
        // Recommended: featured items first, then by price
        sorted.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return a.price - b.price;
        });
    }

    setFilteredApartments(sorted);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Find Your Perfect Sublease</h1>
          
          <FilterBar onFilterChange={handleFilterChange} />
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-gray-600">
              {isLoading ? "Loading listings..." : `${filteredApartments.length} listings found`}
            </p>
            
            <div className="flex items-center mt-4 md:mt-0">
              <label htmlFor="sort" className="text-gray-700 mr-2">Sort by:</label>
              <select 
                id="sort" 
                className="border rounded-md px-3 py-1.5 text-gray-700"
                value={sortOption}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="date-newest">Date: Newest First</option>
                <option value="date-oldest">Date: Oldest First</option>
              </select>
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center my-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ucla-blue"></div>
            </div>
          ) : filteredApartments.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center my-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No apartments match your filters</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
              <Button 
                onClick={() => handleFilterChange({
                  priceRange: [500, 3000],
                  bedrooms: "any",
                  bathrooms: "any",
                  parkingSpots: "any",
                  furnished: "any",
                  leaseLength: "any",
                  gender: "any"
                })}
                className="bg-ucla-blue hover:bg-ucla-darkblue"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredApartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apartments;
