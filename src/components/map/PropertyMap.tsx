
import React, { useRef, useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { properties } from '../../data/properties';

interface PropertyMapProps {
  selectedId?: string;
  onSelectProperty?: (id: string) => void;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ selectedId, onSelectProperty }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // Simulating map interaction
  const handleMarkerClick = (id: string) => {
    if (onSelectProperty) {
      onSelectProperty(id);
    }
  };

  useEffect(() => {
    // This is a placeholder for actual map initialization
    // In a real implementation, you would initialize a map library here
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-md relative animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full bg-estate-lightGray">
        {!isMapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-estate-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Simplified Map Visual */}
        {isMapLoaded && (
          <div className="absolute inset-0 bg-[#E8ECEE] dark:bg-[#1A2333]">
            {/* Map Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {[...Array(6)].map((_, colIndex) => (
                <div key={`col-${colIndex}`} className="border-r border-gray-300 dark:border-gray-700 h-full"></div>
              ))}
              {[...Array(6)].map((_, rowIndex) => (
                <div key={`row-${rowIndex}`} className="border-b border-gray-300 dark:border-gray-700 w-full"></div>
              ))}
            </div>
            
            {/* Property Markers */}
            {properties.map((property) => {
              // Generate random positions for demo purposes
              const top = Math.floor(Math.random() * 80) + 10; // 10-90%
              const left = Math.floor(Math.random() * 80) + 10; // 10-90%
              
              const isSelected = property.id === selectedId;
              
              return (
                <div
                  key={property.id}
                  className={`absolute cursor-pointer transition-all duration-300 ${
                    isSelected ? 'z-30 scale-125' : 'z-20 hover:scale-110'
                  }`}
                  style={{ top: `${top}%`, left: `${left}%` }}
                  onClick={() => handleMarkerClick(property.id)}
                >
                  <div className={`flex flex-col items-center ${isSelected ? 'animate-pulse-subtle' : ''}`}>
                    <div className={`rounded-full ${
                      isSelected 
                        ? 'bg-estate-gold text-estate-navy' 
                        : 'bg-estate-navy text-white'
                    } w-10 h-10 flex items-center justify-center shadow-lg`}>
                      <MapPin size={20} />
                    </div>
                    {isSelected && (
                      <div className="mt-2 px-3 py-1.5 bg-white dark:bg-estate-navy rounded-md shadow-lg whitespace-nowrap">
                        <p className="text-xs font-medium text-estate-navy dark:text-white">
                          {property.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {new Intl.NumberFormat('en-US', { 
                            style: 'currency', 
                            currency: 'USD',
                            maximumFractionDigits: 0
                          }).format(property.price)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      {/* Map Controls (Placeholder) */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="w-10 h-10 bg-white dark:bg-estate-navy text-estate-navy dark:text-white rounded-md shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-estate-charcoal transition-colors">
          +
        </button>
        <button className="w-10 h-10 bg-white dark:bg-estate-navy text-estate-navy dark:text-white rounded-md shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-estate-charcoal transition-colors">
          -
        </button>
      </div>
      
      {/* Map Attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">
        Map Data © Estate
      </div>
    </div>
  );
};

export default PropertyMap;
