
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Map as MapIcon, Search, Filter, List } from 'lucide-react';
import { properties } from '../data/properties';
import PropertyCard from '../components/properties/PropertyCard';

const Map = () => {
  const [showListView, setShowListView] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter properties based on search term
  const filteredProperties = properties.filter(property => 
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-white dark:bg-estate-navy overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <div className="relative h-[calc(100vh-5rem)]">
          {/* Map Header */}
          <div className="absolute top-0 left-0 right-0 bg-white dark:bg-estate-charcoal z-10 shadow-md p-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="bg-estate-gold/10 w-10 h-10 rounded-full flex items-center justify-center">
                  <MapIcon size={20} className="text-estate-gold" />
                </div>
                <h1 className="text-xl font-display font-semibold text-estate-navy dark:text-white">
                  Interactive Map
                </h1>
              </div>
              
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                  placeholder="Search by location or property name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 bg-estate-lightGray dark:bg-estate-navy rounded-md hover:bg-gray-200 dark:hover:bg-estate-charcoal transition-colors">
                  <Filter size={20} className="text-estate-navy dark:text-white" />
                </button>
                <button 
                  className={`p-2 rounded-md hover:bg-gray-200 dark:hover:bg-estate-charcoal transition-colors ${
                    showListView 
                      ? 'bg-estate-gold/20 text-estate-gold' 
                      : 'bg-estate-lightGray dark:bg-estate-navy text-estate-navy dark:text-white'
                  }`}
                  onClick={() => setShowListView(!showListView)}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Map Container */}
          <div className="h-full pt-20">
            <div className={`h-full transition-all duration-300 ${showListView ? 'md:w-1/2' : 'w-full'}`}>
              {/* Map Placeholder - Would be replaced with actual map component */}
              <div className="bg-gray-200 dark:bg-gray-800 h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <MapIcon size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Interactive map would be displayed here
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    (This would use a mapping library like Mapbox or Google Maps)
                  </p>
                </div>
              </div>
            </div>
            
            {/* List View */}
            {showListView && (
              <div className="absolute top-20 bottom-0 right-0 md:w-1/2 bg-white dark:bg-estate-navy overflow-y-auto p-4 border-l border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-display font-semibold text-estate-navy dark:text-white mb-4">
                  {filteredProperties.length} Properties Found
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {filteredProperties.map(property => (
                    <div key={property.id} className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                      <PropertyCard {...property} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Map;
