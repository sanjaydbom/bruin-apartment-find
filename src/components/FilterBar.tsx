
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";

export interface FilterOptions {
  priceRange: [number, number];
  bedrooms: string;
  bathrooms: string;
  parkingSpots: string;
  furnished: string;
  leaseLength: string;
  gender: string;
}

interface FilterBarProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [500, 3000],
    bedrooms: "any",
    bathrooms: "any",
    parkingSpots: "any",
    furnished: "any",
    leaseLength: "any",
    gender: "any"
  });
  
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: [value[0], value[1]] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <div className="bg-white shadow-md rounded-lg mb-6">
      <div className="p-4 flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <input 
            type="text" 
            className="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
            placeholder="Search by address, neighborhood..." 
          />
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="whitespace-nowrap">
              Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <h4 className="font-medium">Price Range</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
                <Slider 
                  defaultValue={[filters.priceRange[0], filters.priceRange[1]]} 
                  max={5000} 
                  min={0} 
                  step={100} 
                  onValueChange={handlePriceChange}
                  className="w-full"
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>
          
        <Button variant="outline" onClick={toggleFilters} className="md:hidden">
          More Filters
        </Button>
        
        <div className={`${isFiltersOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-3 mt-3 md:mt-0`}>
          <Select onValueChange={(value) => handleFilterChange("bedrooms", value)} defaultValue={filters.bedrooms}>
            <SelectTrigger className="w-full md:w-[130px]">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Bedrooms</SelectItem>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4+">4+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>
          
          <Select onValueChange={(value) => handleFilterChange("bathrooms", value)} defaultValue={filters.bathrooms}>
            <SelectTrigger className="w-full md:w-[130px]">
              <SelectValue placeholder="Bathrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Bathrooms</SelectItem>
              <SelectItem value="1">1 Bathroom</SelectItem>
              <SelectItem value="2">2 Bathrooms</SelectItem>
              <SelectItem value="3+">3+ Bathrooms</SelectItem>
            </SelectContent>
          </Select>
          
          <Select onValueChange={(value) => handleFilterChange("furnished", value)} defaultValue={filters.furnished}>
            <SelectTrigger className="w-full md:w-[130px]">
              <SelectValue placeholder="Furnished" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="fully">Fully Furnished</SelectItem>
              <SelectItem value="partially">Partially Furnished</SelectItem>
              <SelectItem value="no">Not Furnished</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="default" className="bg-ucla-blue hover:bg-ucla-darkblue">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
