
import React from 'react';
import { Shield, Search, Home, Headphones, Calendar, DollarSign } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-estate-gold" />,
      title: 'Find Your Perfect Home',
      description: 'Browse our curated selection of premium properties tailored to your preferences.'
    },
    {
      icon: <Home className="w-8 h-8 text-estate-gold" />,
      title: 'Virtual Tours',
      description: 'Experience properties remotely with immersive 3D tours and detailed floor plans.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-estate-gold" />,
      title: 'Expert Guidance',
      description: 'Our real estate professionals provide personalized support throughout your journey.'
    },
    {
      icon: <Shield className="w-8 h-8 text-estate-gold" />,
      title: 'Secure Transactions',
      description: 'Rest easy with our secure, transparent, and professionally managed process.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-estate-gold" />,
      title: 'Schedule Viewings',
      description: 'Book in-person or virtual viewings at times that work for your schedule.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-estate-gold" />,
      title: 'Financing Support',
      description: 'Connect with trusted lenders and financing options tailored to your needs.'
    }
  ];

  return (
    <section className="bg-estate-cream dark:bg-estate-charcoal py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-estate-gold uppercase tracking-wider animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Why Choose Estate
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-estate-navy dark:text-white mt-2 mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Dedicated to Exceptional Service
          </h2>
          <p className="text-gray-600 dark:text-gray-300 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            We combine cutting-edge technology with personalized expertise to create a seamless real estate experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-8 animate-scale-in opacity-0" 
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-semibold text-estate-navy dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
