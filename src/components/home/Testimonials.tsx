
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Estate helped us find our dream home with incredible attention to detail. Their team understood exactly what we were looking for and made the entire process seamless.",
    author: "Michael & Sarah Johnson",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "The virtual tours and detailed property information saved us so much time. We were able to narrow down our choices before visiting in person, and found the perfect home in half the time.",
    author: "Jennifer Reynolds",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "As first-time homebuyers, we were intimidated by the process. Estate's team guided us through every step with patience and expertise. Couldn't recommend them more highly.",
    author: "David & Emma Chen",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="section-container">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
        <div className="mb-6 md:mb-0">
          <span className="text-sm font-medium text-estate-gold uppercase tracking-wider animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-estate-navy dark:text-white mt-2 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            What Our Clients Say
          </h2>
        </div>
        <div className="flex space-x-2 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-estate-navy dark:border-white text-estate-navy dark:text-white hover:bg-estate-navy hover:text-white dark:hover:bg-white dark:hover:text-estate-navy transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-estate-navy dark:border-white text-estate-navy dark:text-white hover:bg-estate-navy hover:text-white dark:hover:bg-white dark:hover:text-estate-navy transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          className={`flex transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          aria-live="polite"
        >
          <div className="glass-panel rounded-xl p-8 md:p-12 w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3 flex flex-col items-center md:items-start">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-medium text-estate-navy dark:text-white text-center md:text-left">
                  {testimonials[activeIndex].author}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                  {testimonials[activeIndex].location}
                </p>
              </div>
              
              <div className="md:w-2/3">
                <div className="text-estate-gold mb-4">
                  <Quote size={40} />
                </div>
                <blockquote className="text-lg md:text-xl text-estate-navy dark:text-white italic mb-6">
                  {testimonials[activeIndex].quote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating || index === activeIndex) return;
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveIndex(index);
                  setIsAnimating(false);
                }, 400);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index 
                  ? 'bg-estate-gold w-8' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
