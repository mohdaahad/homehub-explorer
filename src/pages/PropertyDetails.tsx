
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { getPropertyById } from '../data/properties';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Heart, Share, MapPin, BedDouble, Bath, Ruler, ArrowLeft } from 'lucide-react';
import { PropertyCardProps } from '../components/properties/PropertyCard';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<PropertyCardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (id) {
      // Simulate loading
      setLoading(true);
      setTimeout(() => {
        const fetchedProperty = getPropertyById(id);
        if (fetchedProperty) {
          setProperty(fetchedProperty);
        }
        setLoading(false);
      }, 500);
    }
  }, [id]);

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from Wishlist" : "Added to Wishlist",
      description: isFavorite ? "Property has been removed from your wishlist" : "Property has been added to your wishlist",
      variant: isFavorite ? "destructive" : "default",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property?.title,
        text: `Check out this property: ${property?.title}`,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Property link has been copied to clipboard",
      });
    }
  };

  const formatPrice = (price?: number) => {
    if (!price) return "";
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-estate-navy">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="section-container">
            <div className="estate-shimmer h-8 w-40 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
            <div className="estate-shimmer aspect-[16/9] bg-gray-200 dark:bg-gray-800 rounded-xl mb-8" />
            <div className="estate-shimmer h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
            <div className="estate-shimmer h-6 w-1/2 bg-gray-200 dark:bg-gray-800 rounded mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="estate-shimmer h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
                <div className="estate-shimmer h-32 w-full bg-gray-200 dark:bg-gray-800 rounded mb-8" />
                <div className="estate-shimmer h-6 w-1/2 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
                <div className="estate-shimmer h-32 w-full bg-gray-200 dark:bg-gray-800 rounded" />
              </div>
              <div>
                <div className="estate-shimmer h-60 w-full bg-gray-200 dark:bg-gray-800 rounded mb-4" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-white dark:bg-estate-navy">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="section-container flex flex-col items-center justify-center py-16">
            <h1 className="text-3xl font-display font-semibold text-estate-navy dark:text-white mb-4">
              Property Not Found
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              to="/properties" 
              className="flex items-center text-estate-navy dark:text-white hover:text-estate-gold dark:hover:text-estate-gold transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Properties
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-estate-navy">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="section-container">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <Link to="/" className="hover:text-estate-navy dark:hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-estate-navy dark:hover:text-white transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-estate-navy dark:text-white">{property.title}</span>
          </div>
          
          {/* Property Image */}
          <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden animate-scale-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <img 
              src={property.imageUrl} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
            
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button 
                onClick={handleAddToFavorites}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isFavorite 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/80 backdrop-blur-sm text-estate-navy hover:bg-white'
                }`}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart size={20} fill={isFavorite ? "white" : "none"} />
              </button>
              <button 
                onClick={handleShare}
                className="w-12 h-12 bg-white/80 backdrop-blur-sm text-estate-navy rounded-full flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Share property"
              >
                <Share size={20} />
              </button>
            </div>
            
            {/* Property Type Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="px-4 py-2 bg-estate-navy/80 backdrop-blur-sm text-white text-sm font-semibold rounded-md">
                {property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}
              </div>
            </div>
          </div>
          
          {/* Property Title and Address */}
          <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-estate-navy dark:text-white mb-3">
              {property.title}
            </h1>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <MapPin size={18} className="flex-shrink-0 mr-2" />
              <span>{property.address}</span>
            </div>
          </div>
          
          {/* Property Key Details */}
          <div className="flex flex-wrap items-center justify-between bg-estate-lightGray dark:bg-estate-charcoal rounded-xl p-6 mb-10 animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="mr-6 sm:mr-12">
                <div className="flex items-center">
                  <BedDouble size={20} className="text-estate-navy dark:text-white mr-2" />
                  <span className="text-lg font-semibold text-estate-navy dark:text-white">{property.bedrooms}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Bedrooms</span>
              </div>
              <div className="mr-6 sm:mr-12">
                <div className="flex items-center">
                  <Bath size={20} className="text-estate-navy dark:text-white mr-2" />
                  <span className="text-lg font-semibold text-estate-navy dark:text-white">{property.bathrooms}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Bathrooms</span>
              </div>
              <div>
                <div className="flex items-center">
                  <Ruler size={20} className="text-estate-navy dark:text-white mr-2" />
                  <span className="text-lg font-semibold text-estate-navy dark:text-white">{property.area}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Sq Ft</span>
              </div>
            </div>
            <div className="bg-estate-navy dark:bg-estate-gold/90 px-6 py-3 rounded-lg text-white dark:text-estate-navy text-xl font-semibold">
              {formatPrice(property.price)}
            </div>
          </div>
          
          {/* Property Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <h2 className="text-2xl font-display font-semibold text-estate-navy dark:text-white mb-4">
                Description
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4 mb-8">
                <p>
                  Welcome to this stunning {property.propertyType} featuring {property.bedrooms} bedrooms and {property.bathrooms} bathrooms in a prime location. This exceptional property offers {property.area} square feet of luxurious living space designed for comfort and style.
                </p>
                <p>
                  The property boasts an elegant design with high-end finishes throughout. The spacious living areas are bathed in natural light, creating a warm and inviting atmosphere. The gourmet kitchen is equipped with top-of-the-line appliances, custom cabinetry, and a large island perfect for entertaining.
                </p>
                <p>
                  The primary suite offers a tranquil retreat with a spa-like bathroom featuring dual vanities, a soaking tub, and a separate shower. Additional bedrooms provide ample space for family or guests, each with convenient access to well-appointed bathrooms.
                </p>
              </div>
              
              <h2 className="text-2xl font-display font-semibold text-estate-navy dark:text-white mb-4">
                Features & Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                <FeatureItem>Gourmet kitchen with premium appliances</FeatureItem>
                <FeatureItem>Hardwood flooring throughout</FeatureItem>
                <FeatureItem>Smart home technology</FeatureItem>
                <FeatureItem>Energy-efficient windows</FeatureItem>
                <FeatureItem>Central heating and air conditioning</FeatureItem>
                <FeatureItem>Spacious walk-in closets</FeatureItem>
                <FeatureItem>Dedicated home office space</FeatureItem>
                <FeatureItem>Modern lighting fixtures</FeatureItem>
                <FeatureItem>Outdoor entertainment area</FeatureItem>
                <FeatureItem>Landscaped garden</FeatureItem>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
                <h2 className="text-2xl font-display font-semibold text-estate-navy dark:text-white mb-4">
                  Location
                </h2>
                <div className="bg-gray-200 dark:bg-gray-800 rounded-xl aspect-[16/9] mb-4">
                  {/* Map placeholder - would be replaced with actual map component */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    Interactive map would be displayed here
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  <FeatureItem>Close to public transportation</FeatureItem>
                  <FeatureItem>Walking distance to restaurants</FeatureItem>
                  <FeatureItem>Nearby schools and universities</FeatureItem>
                  <FeatureItem>Parks and recreation within reach</FeatureItem>
                  <FeatureItem>Shopping centers in the vicinity</FeatureItem>
                  <FeatureItem>Medical facilities nearby</FeatureItem>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="bg-white dark:bg-estate-charcoal rounded-xl shadow-md p-6 sticky top-28">
                <h3 className="text-xl font-display font-semibold text-estate-navy dark:text-white mb-6">
                  Schedule a Viewing
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message (Optional)
                    </label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30 min-h-[100px]"
                      placeholder="I'm interested in this property and would like to..."
                    ></textarea>
                  </div>
                  <button 
                    type="button" 
                    className="w-full py-3 bg-estate-navy text-white rounded-md font-medium hover:bg-estate-navy/90 transition-colors"
                  >
                    Request Viewing
                  </button>
                </form>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    or call us directly at <span className="text-estate-navy dark:text-white font-medium">(555) 123-4567</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center">
    <div className="w-2 h-2 bg-estate-gold rounded-full mr-3"></div>
    <span className="text-gray-600 dark:text-gray-300">{children}</span>
  </div>
);

export default PropertyDetails;
