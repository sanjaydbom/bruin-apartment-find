
import ApartmentCard, { ApartmentData } from './ApartmentCard';

interface FeaturedListingsProps {
  apartments: ApartmentData[];
}

const FeaturedListings = ({ apartments }: FeaturedListingsProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Listings</h2>
            <p className="text-gray-600 mt-2">Discover the best subleases near UCLA</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
