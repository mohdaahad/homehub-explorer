
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Home, Ruler, Bath, BedDouble } from 'lucide-react';

export interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  propertyType: 'house' | 'apartment' | 'condo' | 'villa';
  featured?: boolean;
  isNew?: boolean;
}

const PropertyCard = ({ 
  id, 
  title, 
  address, 
  price, 
  bedrooms, 
  bathrooms, 
  area, 
  imageUrl, 
  propertyType,
  featured = false,
  isNew = false
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="group property-card-hover rounded-xl overflow-hidden bg-white dark:bg-estate-charcoal shadow-md animate-scale-in opacity-0" style={{ animationFillMode: 'forwards' }}>
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Property Status Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {featured && (
            <span className="px-2 py-1 bg-estate-gold text-estate-navy text-xs font-semibold rounded">
              Featured
            </span>
          )}
          {isNew && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded">
              New
            </span>
          )}
        </div>
        
        {/* Favorite Button */}
        <button 
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
            isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/70 backdrop-blur-sm text-estate-navy hover:bg-white'
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart size={18} fill={isFavorite ? "white" : "none"} />
        </button>
        
        {/* Property Type Badge */}
        <div className="absolute bottom-3 left-3">
          <div className="px-3 py-1 bg-white/70 backdrop-blur-sm text-estate-navy text-xs font-semibold rounded-full flex items-center">
            <Home size={14} className="mr-1" />
            {propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}
          </div>
        </div>
        
        {/* Price */}
        <div className="absolute bottom-3 right-3">
          <div className="px-3 py-1 bg-estate-navy/90 backdrop-blur-sm text-white text-sm font-semibold rounded-md">
            {formatPrice(price)}
          </div>
        </div>
      </div>
      
      {/* Property Details */}
      <Link to={`/property/${id}`}>
        <div className="p-5">
          <h3 className="text-lg font-display font-semibold text-estate-navy dark:text-white mb-2 line-clamp-1">
            {title}
          </h3>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
            <MapPin size={16} className="flex-shrink-0 mr-1" />
            <span className="text-sm line-clamp-1">{address}</span>
          </div>
          
          <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
            <div className="flex justify-between">
              <PropertyFeature icon={<BedDouble size={18} />} value={bedrooms} label="Beds" />
              <PropertyFeature icon={<Bath size={18} />} value={bathrooms} label="Baths" />
              <PropertyFeature icon={<Ruler size={18} />} value={area} label="Sq Ft" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const PropertyFeature = ({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) => (
  <div className="flex items-center">
    <div className="text-estate-navy dark:text-gray-300 mr-2">
      {icon}
    </div>
    <div>
      <span className="block text-sm font-semibold text-estate-navy dark:text-white">
        {value}
      </span>
      <span className="block text-xs text-gray-500 dark:text-gray-400">
        {label}
      </span>
    </div>
  </div>
);

export default PropertyCard;
