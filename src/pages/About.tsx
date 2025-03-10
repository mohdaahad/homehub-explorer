
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Info, Award, Users, TrendingUp, Building, Home, UserCheck, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-estate-navy overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-container mb-16">
          <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3">
              <div className="bg-estate-gold/10 w-12 h-12 rounded-full flex items-center justify-center">
                <Info size={24} className="text-estate-gold" />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-estate-navy dark:text-white">
                About Us
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
              We're more than just a real estate company. We're your partners in finding the perfect place to call home.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden aspect-[21/9] animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Estate team in office" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-estate-navy/50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center p-6">
                <h2 className="text-2xl md:text-4xl font-display font-semibold mb-4">
                  Helping People Find Their Dream Homes Since 2010
                </h2>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                  Our mission is to connect people with properties that perfectly match their lifestyle and aspirations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="section-container mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-estate-navy dark:text-white mb-4">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Estate was founded in 2010 by a group of passionate real estate professionals who shared a vision: to transform the way people buy, sell, and rent properties by focusing on exceptional service and leveraging cutting-edge technology.
                </p>
                <p>
                  What began as a small office with just five agents has grown into a nationwide network of experienced professionals dedicated to helping clients navigate the complex real estate market with confidence and ease.
                </p>
                <p>
                  Today, we're proud to be recognized as industry leaders, known for our personalized approach, market expertise, and commitment to innovation. Our success is built on the trust we've established with thousands of satisfied clients who've found their perfect properties through Estate.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="rounded-xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Estate office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Estate agents" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Homeowner with agent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1582883040775-f98dd8c04597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern architecture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="bg-estate-lightGray dark:bg-estate-charcoal py-16">
          <div className="section-container">
            <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-estate-navy dark:text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                At Estate, our values drive everything we do. They shape our culture and guide our approach to serving clients and communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard 
                icon={<UserCheck size={32} />}
                title="Integrity"
                description="We believe in transparency, honesty, and doing what's right for our clients, even when it's not the easiest path."
                delay={0.6}
              />
              <ValueCard 
                icon={<Award size={32} />}
                title="Excellence"
                description="We strive for excellence in every aspect of our service, constantly raising the bar for what clients can expect."
                delay={0.7}
              />
              <ValueCard 
                icon={<Users size={32} />}
                title="Community"
                description="We're committed to building stronger communities through our work and giving back to the places we serve."
                delay={0.8}
              />
              <ValueCard 
                icon={<TrendingUp size={32} />}
                title="Innovation"
                description="We embrace new ideas and technologies that enhance the client experience and make real estate transactions smoother."
                delay={0.9}
              />
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="section-container py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <StatCard number="10+" text="Years in Business" icon={<Building />} delay={1.0} />
            <StatCard number="15,000+" text="Properties Sold" icon={<Home />} delay={1.1} />
            <StatCard number="98%" text="Client Satisfaction" icon={<UserCheck />} delay={1.2} />
            <StatCard number="20+" text="Cities Served" icon={<Globe />} delay={1.3} />
          </div>
        </section>
        
        {/* Team */}
        <section className="section-container mb-16">
          <div className="text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-estate-navy dark:text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of real estate expertise and a passion for innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              name="Emily Johnson"
              title="Chief Executive Officer"
              delay={1.5}
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              name="David Martinez"
              title="Chief Operating Officer"
              delay={1.6}
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              name="Sarah Wilson"
              title="Head of Sales"
              delay={1.7}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ValueCard = ({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) => (
  <div 
    className="bg-white dark:bg-estate-navy rounded-xl p-6 shadow-sm animate-fade-in opacity-0" 
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    <div className="text-estate-gold mb-4">{icon}</div>
    <h3 className="text-xl font-display font-semibold text-estate-navy dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const StatCard = ({ number, text, icon, delay }: { number: string; text: string; icon: React.ReactNode; delay: number }) => (
  <div 
    className="animate-fade-in opacity-0" 
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    <div className="text-estate-gold flex justify-center mb-4">{icon}</div>
    <h3 className="text-3xl md:text-4xl font-display font-bold text-estate-navy dark:text-white mb-2">{number}</h3>
    <p className="text-gray-600 dark:text-gray-300">{text}</p>
  </div>
);

const TeamMember = ({ image, name, title, delay }: { image: string; name: string; title: string; delay: number }) => (
  <div 
    className="animate-fade-in opacity-0" 
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    <div className="bg-white dark:bg-estate-charcoal rounded-xl overflow-hidden shadow-sm">
      <div className="aspect-[3/4]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-estate-navy dark:text-white mb-1">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{title}</p>
      </div>
    </div>
  </div>
);

export default About;
