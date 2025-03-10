
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-estate-navy overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-container mb-16">
          <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3">
              <div className="bg-estate-gold/10 w-12 h-12 rounded-full flex items-center justify-center">
                <MessageSquare size={24} className="text-estate-gold" />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-estate-navy dark:text-white">
                Contact Us
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
              Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
            </p>
          </div>
        </section>
        
        {/* Contact Info and Form */}
        <section className="section-container mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <h2 className="text-2xl font-display font-semibold text-estate-navy dark:text-white mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <ContactItem 
                  icon={<Phone size={24} />}
                  title="Phone"
                  content="(555) 123-4567"
                />
                <ContactItem 
                  icon={<Mail size={24} />}
                  title="Email"
                  content="contact@estateluxury.com"
                />
                <ContactItem 
                  icon={<MapPin size={24} />}
                  title="Office Address"
                  content="123 Estate Avenue, Luxury Heights, CA 94103"
                />
                <ContactItem 
                  icon={<Clock size={24} />}
                  title="Business Hours"
                  content="Monday - Friday: 9AM - 6PM | Saturday: 10AM - 4PM"
                />
              </div>
              
              <div className="bg-estate-lightGray dark:bg-estate-charcoal rounded-xl p-6">
                <h3 className="text-xl font-display font-semibold text-estate-navy dark:text-white mb-4">
                  Connect With Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Follow us on social media for the latest property listings, market insights, and company news.
                </p>
                <div className="flex space-x-4">
                  <SocialButton icon="facebook" />
                  <SocialButton icon="twitter" />
                  <SocialButton icon="instagram" />
                  <SocialButton icon="linkedin" />
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-in-right opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="bg-white dark:bg-estate-charcoal rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-display font-semibold text-estate-navy dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30"
                      placeholder="Property Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-gold dark:bg-estate-navy/30 resize-none"
                      placeholder="I'm interested in..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-estate-navy text-white rounded-md font-medium hover:bg-estate-navy/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="bg-estate-lightGray dark:bg-estate-charcoal py-12">
            <div className="section-container">
              <h2 className="text-2xl font-display font-semibold text-estate-navy dark:text-white mb-6 text-center">
                Visit Our Office
              </h2>
              <div className="rounded-xl overflow-hidden aspect-[21/9] max-h-[500px]">
                {/* Map Placeholder - Would be replaced with actual map component */}
                <div className="bg-gray-200 dark:bg-gray-800 h-full w-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Interactive map showing our office location would be displayed here
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      (This would use a mapping library like Mapbox or Google Maps)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section-container mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <h2 className="text-2xl font-display font-semibold text-estate-navy dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqItem 
              question="How do I schedule a property viewing?"
              answer="You can schedule a viewing directly through our website by navigating to the property details page and selecting the 'Request Viewing' option. Alternatively, you can contact our office by phone or email."
            />
            <FaqItem 
              question="What areas do you serve?"
              answer="We currently serve major metropolitan areas and their surrounding suburbs in California, New York, Florida, and Texas. We're constantly expanding to new markets."
            />
            <FaqItem 
              question="How long does the buying process take?"
              answer="The timeframe varies depending on various factors, but typically, the process from initial offer to closing takes 30-45 days. Our agents work diligently to ensure a smooth and efficient process."
            />
            <FaqItem 
              question="Do you help with mortgage financing?"
              answer="While we don't provide direct mortgage financing, we have established relationships with trusted lenders who offer competitive rates. Our team can connect you with these partners to help secure financing."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-start">
    <div className="text-estate-gold mr-4 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-estate-navy dark:text-white mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </div>
);

const SocialButton = ({ icon }: { icon: string }) => (
  <a 
    href="#" 
    className="w-10 h-10 bg-white dark:bg-estate-navy rounded-full flex items-center justify-center hover:bg-estate-gold hover:text-white transition-colors"
    aria-label={`Follow us on ${icon}`}
  >
    <span className="text-estate-navy dark:text-white">
      {/* Social icons would be placed here */}
      {icon.charAt(0).toUpperCase()}
    </span>
  </a>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white dark:bg-estate-charcoal rounded-xl p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-estate-navy dark:text-white mb-3">{question}</h3>
    <p className="text-gray-600 dark:text-gray-300">{answer}</p>
  </div>
);

export default Contact;
