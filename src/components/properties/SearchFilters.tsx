
import React, { useState } from 'react';
import { ChevronDown, Sliders, Search } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (filters: any) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const propertyTypes = [
    { value: '', label: 'All Properties' },
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'condo', label: 'Condo' },
    { value: 'villa', label: 'Villa' },
    { value: 'office', label: 'Office' },
    { value: 'commercial', label: 'Commercial' },
  ];

  return (
    <div className="glass-panel rounded-xl overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          {/* Basic Search Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-estate-navy dark:text-white mb-1.5 block">Location</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter city, neighborhood, or address"
                  className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-estate-charcoal border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold"
                  value={filters.location}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-estate-navy dark:text-white mb-1.5 block">Property Type</label>
              <select
                name="propertyType"
                className="w-full px-4 py-2.5 bg-white dark:bg-estate-charcoal border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold appearance-none"
                value={filters.propertyType}
                onChange={handleChange}
              >
                {propertyTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full h-full bg-estate-navy hover:bg-estate-navy/90 text-white font-medium rounded-md transition-colors flex items-center justify-center mt-6 md:mt-0"
              >
                <Search size={18} className="mr-2" />
                Search Properties
              </button>
            </div>
          </div>

          {/* Advanced Search Toggle */}
          <div className="mt-4">
            <button
              type="button"
              className="flex items-center text-sm font-medium text-estate-navy dark:text-white hover:text-estate-gold transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Sliders size={16} className="mr-2" />
              Advanced Filters
              <ChevronDown 
                size={16} 
                className={`ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>

          {/* Advanced Search Controls */}
          {isExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 animate-slide-down opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div>
                <label className="text-sm font-medium text-estate-navy dark:text-white mb-1.5 block">Min Price</label>
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min Price"
                  className="w-full px-4 py-2.5 bg-white dark:bg-estate-charcoal border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold"
                  value={filters.minPrice}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-estate-navy dark:text-white mb-1.5 block">Max Price</label>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max Price"
                  className="w-full px-4 py-2.5 bg-white dark:bg-estate-charcoal border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold"
                  value={filters.maxPrice}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-estate-navy dark:text-white mb-1.5 block">Bedrooms</label>
                <select
                  name="bedrooms"
                  className="w-full px-4 py-2.5 bg-white dark:bg-estate-charcoal border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold appearance-none"
                  value={filters.bedrooms}
                  onChange={handleChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-estate-navy dark:text-white mb-1.5 block">Bathrooms</label>
                <select
                  name="bathrooms"
                  className="w-full px-4 py-2.5 bg-white dark:bg-estate-charcoal border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold appearance-none"
                  value={filters.bathrooms}
                  onChange={handleChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchFilters;
