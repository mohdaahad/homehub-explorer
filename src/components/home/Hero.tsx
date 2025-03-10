
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    title: 'Exclusive Luxury Homes',
    subtitle: 'Discover architectural masterpieces designed for exceptional living'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    title: 'Premium Urban Living',
    subtitle: 'Experience the height of sophisticated city residences'
  },
  {
    url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    title: 'Beachfront Paradise',
    subtitle: 'Wake up to stunning ocean views and coastal elegance'
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Initial load
    setIsLoaded(true);
    
    // Set up interval for image rotation
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setIsFading(false);
      }, 500); // Transition time
    }, 6000); // Image change interval
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Background Image */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentImage === index ? (isFading ? 'opacity-0' : 'opacity-100') : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            zIndex: currentImage === index ? 0 : -1,
          }}
        />
      ))}
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-estate-navy/30 to-estate-navy/70 z-10"></div>
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 z-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Badge */}
          <div className={`inline-block mb-6 px-3 py-1 bg-estate-gold/90 backdrop-blur-sm text-estate-navy text-sm font-semibold rounded-full ${isLoaded ? 'animate-fade-in opacity-0' : 'opacity-0'}`} style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Find Your Perfect Home
          </div>
          
          {/* Title */}
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-display font-semibold text-white mb-6 leading-tight ${isLoaded ? 'animate-fade-in opacity-0' : 'opacity-0'}`} style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            {heroImages[currentImage].title}
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed ${isLoaded ? 'animate-fade-in opacity-0' : 'opacity-0'}`} style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            {heroImages[currentImage].subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isLoaded ? 'animate-fade-in opacity-0' : 'opacity-0'}`} style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <Link 
              to="/properties" 
              className="btn-primary px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl"
            >
              Explore Properties
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline border-white text-white px-8 py-3 text-base sm:text-lg hover:bg-white/10"
            >
              Contact an Agent
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isLoaded ? 'animate-fade-in opacity-0' : 'opacity-0'}`} style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
          <ScrollLink
            to="featured"
            smooth={true}
            duration={800}
            className="flex flex-col items-center cursor-pointer group"
          >
            <span className="text-white/80 text-sm mb-2 group-hover:text-white transition-colors">
              Scroll Down
            </span>
            <ArrowDown size={24} className="text-white/80 animate-float group-hover:text-white transition-colors" />
          </ScrollLink>
        </div>
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImage === index 
                ? 'bg-estate-gold w-6' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => {
              setIsFading(true);
              setTimeout(() => {
                setCurrentImage(index);
                setIsFading(false);
              }, 500);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const Link = ({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

export default Hero;
