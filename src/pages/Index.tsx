
import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import Features from '../components/home/Features';
import CallToAction from '../components/home/CallToAction';
import Testimonials from '../components/home/Testimonials';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-estate-navy overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
