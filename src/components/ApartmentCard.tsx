
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ApartmentData {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  availableFrom: string;
  availableTo: string;
  isFeatured?: boolean;
  furnished: string;
  parking: number;
}

interface ApartmentCardProps {
  apartment: ApartmentData;
}

const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const formatAvailability = () => {
    const from = new Date(apartment.availableFrom).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const to = new Date(apartment.availableTo).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${from} - ${to}`;
  };

  return (
    <Link to={`/apartments/${apartment.id}`} className="block">
      <div className={cn(
        "listing-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300",
        apartment.isFeatured && "border-2 border-ucla-gold"
      )}>
        <div className="relative">
          <img 
            src={apartment.imageUrl} 
            alt={apartment.title} 
            className="w-full h-48 object-cover"
          />
          {apartment.isFeatured && (
            <div className="absolute top-2 left-2 bg-ucla-gold text-black text-xs font-bold px-2 py-1 rounded-md">
              Featured
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
            onClick={toggleFavorite}
          >
            <Heart className={cn("h-5 w-5", isFavorite ? "fill-red-500 text-red-500" : "text-gray-600")} />
          </Button>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{apartment.title}</h3>
            <p className="font-bold text-ucla-blue">${apartment.price}/mo</p>
          </div>
          <p className="text-gray-600 text-sm mb-2">{apartment.address}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div className="flex space-x-4">
              <span>{apartment.bedrooms} {apartment.bedrooms === 1 ? 'bed' : 'beds'}</span>
              <span>{apartment.bathrooms} {apartment.bathrooms === 1 ? 'bath' : 'baths'}</span>
              <span>{apartment.sqft} sqft</span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100">
            <p className="text-sm text-gray-600">Available: {formatAvailability()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
