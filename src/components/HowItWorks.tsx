
import { Home, User, Calendar, Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-ucla-blue" />,
      title: "Find a Sublease",
      description: "Browse listings and filter by price, location, amenities, and available dates to find your perfect match."
    },
    {
      icon: <User className="h-10 w-10 text-ucla-blue" />,
      title: "Contact the Sublessor",
      description: "Message the sublessor directly through our platform to ask questions and arrange viewings."
    },
    {
      icon: <Calendar className="h-10 w-10 text-ucla-blue" />,
      title: "Schedule a Tour",
      description: "Visit the apartment and meet the current residents to make sure it's the right fit for you."
    },
    {
      icon: <Check className="h-10 w-10 text-ucla-blue" />,
      title: "Secure Your Sublease",
      description: "Use our contract generator to create a legally sound sublease agreement and lock in your new home."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">How BruinLease Works</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Find and secure your perfect UCLA apartment sublease in just a few easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
