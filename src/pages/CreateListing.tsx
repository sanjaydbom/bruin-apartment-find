
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const CreateListing = () => {
  const [formStep, setFormStep] = useState(1);
  
  const handleNextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePreviousStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your listing has been created!", {
      description: "Once approved, it will appear in the listings soon.",
    });
    // In a real app, this would submit to a backend API
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">List Your Apartment</h1>
            <p className="text-gray-600 mb-6">Connect with UCLA students looking for a sublease</p>
            
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${formStep >= 1 ? 'bg-ucla-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                  1
                </div>
                <div className={`h-1 flex-1 mx-2 ${formStep >= 2 ? 'bg-ucla-blue' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${formStep >= 2 ? 'bg-ucla-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                  2
                </div>
                <div className={`h-1 flex-1 mx-2 ${formStep >= 3 ? 'bg-ucla-blue' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${formStep >= 3 ? 'bg-ucla-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                  3
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className={formStep >= 1 ? 'text-ucla-blue font-medium' : 'text-gray-500'}>Apartment Details</span>
                <span className={formStep >= 2 ? 'text-ucla-blue font-medium' : 'text-gray-500'}>Lease Information</span>
                <span className={formStep >= 3 ? 'text-ucla-blue font-medium' : 'text-gray-500'}>Photos & Contact</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {formStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-semibold text-gray-800">Apartment Details</h2>
                  
                  <div>
                    <Label htmlFor="title">Listing Title</Label>
                    <Input 
                      id="title" 
                      placeholder="e.g. Spacious 2BR near UCLA" 
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Full Address</Label>
                    <Input 
                      id="address" 
                      placeholder="Street, City, State, Zip Code" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="bedrooms">Bedrooms</Label>
                      <Select required>
                        <SelectTrigger id="bedrooms">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5+">5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="bathrooms">Bathrooms</Label>
                      <Select required>
                        <SelectTrigger id="bathrooms">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="1.5">1.5</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="2.5">2.5</SelectItem>
                          <SelectItem value="3+">3+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="sqft">Square Feet</Label>
                      <Input id="sqft" type="number" placeholder="e.g. 850" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="furnished">Furnished</Label>
                      <Select required>
                        <SelectTrigger id="furnished">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fully">Fully Furnished</SelectItem>
                          <SelectItem value="partially">Partially Furnished</SelectItem>
                          <SelectItem value="no">Not Furnished</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="parking">Parking Spots</Label>
                      <Select required>
                        <SelectTrigger id="parking">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3+">3+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your apartment, highlight special features, and mention proximity to campus..."
                      rows={5}
                      required
                    />
                  </div>
                </div>
              )}
              
              {formStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-semibold text-gray-800">Lease Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Monthly Rent ($)</Label>
                      <Input id="price" type="number" placeholder="e.g. 1800" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="utilities">Utilities</Label>
                      <Select required>
                        <SelectTrigger id="utilities">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="included">All Included</SelectItem>
                          <SelectItem value="some">Some Included</SelectItem>
                          <SelectItem value="none">Not Included</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="availableFrom">Available From</Label>
                      <Input id="availableFrom" type="date" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="availableTo">Available Until</Label>
                      <Input id="availableTo" type="date" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="preferredGender">Preferred Gender</Label>
                    <Select>
                      <SelectTrigger id="preferredGender">
                        <SelectValue placeholder="No Preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">No Preference</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="additionalTerms">Additional Terms</Label>
                    <Textarea 
                      id="additionalTerms" 
                      placeholder="Any specific requirements or conditions for the sublease..."
                      rows={3}
                    />
                  </div>
                </div>
              )}
              
              {formStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-semibold text-gray-800">Photos & Contact Information</h2>
                  
                  <div>
                    <Label htmlFor="photos">Upload Photos</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <input 
                        type="file" 
                        id="photos" 
                        accept="image/*" 
                        multiple 
                        className="hidden" 
                      />
                      <label 
                        htmlFor="photos"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="mt-2 text-gray-600">Click to upload photos</span>
                        <span className="mt-1 text-sm text-gray-500">(Add at least 3 photos for best results)</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        required
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-600">
                        I agree to the <a href="#" className="text-ucla-blue hover:underline">Terms and Conditions</a>
                      </label>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex justify-between">
                {formStep > 1 && (
                  <Button type="button" variant="outline" onClick={handlePreviousStep}>
                    Back
                  </Button>
                )}
                {formStep < 3 ? (
                  <Button type="button" className="ml-auto bg-ucla-blue hover:bg-ucla-darkblue" onClick={handleNextStep}>
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" className="ml-auto bg-ucla-blue hover:bg-ucla-darkblue">
                    Submit Listing
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateListing;
