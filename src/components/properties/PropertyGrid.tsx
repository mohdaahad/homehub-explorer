
import React from 'react';
import PropertyCard, { PropertyCardProps } from './PropertyCard';

interface PropertyGridProps {
  properties: PropertyCardProps[];
  loading?: boolean;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[...Array(6)].map((_, index) => (
          <PropertyCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-display font-medium text-estate-navy dark:text-white mb-3">
          No properties found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          Try adjusting your search criteria or browse our featured properties instead.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {properties.map((property, index) => (
        <PropertyCard 
          key={property.id} 
          {...property} 
          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        />
      ))}
    </div>
  );
};

const PropertyCardSkeleton = () => (
  <div className="rounded-xl overflow-hidden bg-white dark:bg-estate-charcoal shadow-md">
    <div className="estate-shimmer aspect-[4/3] bg-gray-200 dark:bg-gray-800" />
    <div className="p-5">
      <div className="estate-shimmer h-6 w-4/5 bg-gray-200 dark:bg-gray-800 rounded mb-3" />
      <div className="estate-shimmer h-4 w-3/5 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
      <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
        <div className="flex justify-between">
          <div className="estate-shimmer h-12 w-1/4 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="estate-shimmer h-12 w-1/4 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="estate-shimmer h-12 w-1/4 bg-gray-200 dark:bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export default PropertyGrid;
