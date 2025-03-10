
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-24 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-estate-navy/70 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Ready to Find Your Dream Home?
          </h2>
          
          <p className="text-lg text-white/90 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Let our expert team guide you through the process of finding and securing your perfect property. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <Link 
              to="/properties" 
              className="btn-secondary px-8 py-3 text-base"
            >
              Browse Properties
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline border-white text-white px-8 py-3 text-base hover:bg-white/10"
            >
              Contact an Agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
