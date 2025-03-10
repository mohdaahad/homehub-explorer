
import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SearchFilters from '../components/properties/SearchFilters';
import PropertyGrid from '../components/properties/PropertyGrid';
import { properties } from '../data/properties';
import { Buildings } from 'lucide-react';

const Properties = () => {
  const [loading, setLoading] = useState(true);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSearch = (filters: any) => {
    setLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      let results = [...properties];
      
      // Filter by location
      if (filters.location) {
        const searchTerm = filters.location.toLowerCase();
        results = results.filter(
          property => 
            property.address.toLowerCase().includes(searchTerm) ||
            property.title.toLowerCase().includes(searchTerm)
        );
      }
      
      // Filter by property type
      if (filters.propertyType) {
        results = results.filter(property => property.propertyType === filters.propertyType);
      }
      
      // Filter by min price
      if (filters.minPrice) {
        results = results.filter(property => property.price >= parseInt(filters.minPrice));
      }
      
      // Filter by max price
      if (filters.maxPrice) {
        results = results.filter(property => property.price <= parseInt(filters.maxPrice));
      }
      
      // Filter by bedrooms
      if (filters.bedrooms) {
        results = results.filter(property => property.bedrooms >= parseInt(filters.bedrooms));
      }
      
      // Filter by bathrooms
      if (filters.bathrooms) {
        results = results.filter(property => property.bathrooms >= parseInt(filters.bathrooms));
      }
      
      setFilteredProperties(results);
      setLoading(false);
    }, 800);
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-estate-navy overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <section className="section-container">
          <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3">
              <div className="bg-estate-gold/10 w-12 h-12 rounded-full flex items-center justify-center">
                <Buildings size={24} className="text-estate-gold" />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-estate-navy dark:text-white">
                Properties
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
              Browse our comprehensive listing of premium properties. Use the filters below to find your perfect match.
            </p>
          </div>
          
          <SearchFilters onSearch={handleSearch} />
          
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <h2 className="text-xl font-display font-medium text-estate-navy dark:text-white">
                {loading 
                  ? 'Finding properties...' 
                  : `${filteredProperties.length} Properties Found`
                }
              </h2>
              <div className="flex gap-2">
                <select 
                  className="px-3 py-2 bg-white dark:bg-estate-charcoal border border-gray-300 dark:border-gray-700 rounded-md text-sm"
                  defaultValue="recommended"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
            
            <PropertyGrid properties={filteredProperties} loading={loading} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
