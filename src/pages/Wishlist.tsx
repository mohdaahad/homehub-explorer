
import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PropertyGrid from '../components/properties/PropertyGrid';
import { PropertyCardProps } from '../components/properties/PropertyCard';
import { Heart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { properties } from '../data/properties';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<PropertyCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate loading saved wishlist items
    setLoading(true);
    setTimeout(() => {
      // For demo, use 3 random properties as wishlist items
      const randomProperties = [...properties]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      setWishlistItems(randomProperties);
      setLoading(false);
    }, 1000);
  }, []);
  
  const handleRemoveItem = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    
    toast({
      title: "Removed from Wishlist",
      description: "Property has been removed from your wishlist",
      variant: "destructive",
    });
  };
  
  const handleClearWishlist = () => {
    setWishlistItems([]);
    
    toast({
      title: "Wishlist Cleared",
      description: "All properties have been removed from your wishlist",
      variant: "destructive",
    });
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-estate-navy overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="section-container">
          <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3">
              <div className="bg-estate-gold/10 w-12 h-12 rounded-full flex items-center justify-center">
                <Heart size={24} className="text-estate-gold" />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-estate-navy dark:text-white">
                My Wishlist
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
              Keep track of properties you're interested in and compare them at your convenience.
            </p>
          </div>
          
          {loading ? (
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <PropertyGrid properties={[]} loading={true} />
            </div>
          ) : wishlistItems.length === 0 ? (
            <div className="text-center py-16 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <Heart size={64} className="mx-auto mb-6 text-gray-300 dark:text-gray-600" />
              <h3 className="text-2xl font-display font-medium text-estate-navy dark:text-white mb-3">
                Your Wishlist is Empty
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
                You haven't added any properties to your wishlist yet. Browse our listings and click the heart icon to save properties you like.
              </p>
              <Link 
                to="/properties" 
                className="inline-block bg-estate-navy text-white px-6 py-3 rounded-md font-medium hover:bg-estate-navy/90 transition-colors"
              >
                Explore Properties
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <h2 className="text-xl font-display font-medium text-estate-navy dark:text-white">
                  {wishlistItems.length} Saved {wishlistItems.length === 1 ? 'Property' : 'Properties'}
                </h2>
                <button 
                  onClick={handleClearWishlist}
                  className="flex items-center text-red-500 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={18} className="mr-2" />
                  Clear Wishlist
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                {wishlistItems.map((property, index) => (
                  <div key={property.id} className="relative group">
                    <div className="absolute top-4 right-4 z-20">
                      <button 
                        onClick={() => handleRemoveItem(property.id)}
                        className="w-10 h-10 bg-white/80 backdrop-blur-sm text-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <PropertyCard {...property} />
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Using a simplified version of PropertyCard for the wishlist
const PropertyCard = (property: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <Link to={`/property/${property.id}`} className="block">
      <div className="rounded-xl overflow-hidden bg-white dark:bg-estate-charcoal shadow-md h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={property.imageUrl} 
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute bottom-3 right-3">
            <div className="px-3 py-1 bg-estate-navy/90 backdrop-blur-sm text-white text-sm font-semibold rounded-md">
              {formatPrice(property.price)}
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-display font-semibold text-estate-navy dark:text-white mb-2 line-clamp-1">
            {property.title}
          </h3>
          
          <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-4">
            <div className="flex justify-between text-sm">
              <div>
                <span className="text-estate-navy dark:text-white font-medium">{property.bedrooms}</span> beds
              </div>
              <div>
                <span className="text-estate-navy dark:text-white font-medium">{property.bathrooms}</span> baths
              </div>
              <div>
                <span className="text-estate-navy dark:text-white font-medium">{property.area}</span> sq ft
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Wishlist;
