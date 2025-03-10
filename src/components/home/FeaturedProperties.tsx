
import React from 'react';
import PropertyGrid from '../properties/PropertyGrid';
import { getFeaturedProperties } from '../../data/properties';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {
  const featuredProperties = getFeaturedProperties();

  return (
    <section id="featured" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="mb-6 md:mb-0">
          <span className="text-sm font-medium text-estate-gold uppercase tracking-wider animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Featured Properties
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-estate-navy dark:text-white mt-2 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Exceptional Homes Await
          </h2>
        </div>
        <Link 
          to="/properties" 
          className="group flex items-center text-estate-navy dark:text-white font-medium hover:text-estate-gold dark:hover:text-estate-gold transition-colors animate-fade-in opacity-0" 
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          View All Properties
          <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      
      <PropertyGrid properties={featuredProperties} />
    </section>
  );
};

export default FeaturedProperties;
