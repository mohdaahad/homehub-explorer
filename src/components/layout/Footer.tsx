
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-estate-navy text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-display font-semibold mb-4">Estate</h3>
            <p className="text-gray-300 mb-6 max-w-xs">
              Discover exceptional properties tailored to your unique lifestyle. Let Estate guide you home.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/properties">Find Properties</FooterLink>
              <FooterLink to="/map">Interactive Map</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/news">Real Estate News</FooterLink>
              <FooterLink to="/reviews">Client Reviews</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <FooterLink to="/buying">Buying Guidance</FooterLink>
              <FooterLink to="/selling">Selling Property</FooterLink>
              <FooterLink to="/investment">Property Investment</FooterLink>
              <FooterLink to="/valuation">Market Valuation</FooterLink>
              <FooterLink to="/mortgage">Mortgage Services</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-display font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-estate-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Estate Avenue, Luxury Heights, CA 94103</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-estate-gold flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-estate-gold flex-shrink-0" />
                <span className="text-gray-300">contact@estateluxury.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Estate. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-estate-gold hover:text-estate-navy transition-colors">
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-estate-gold transition-colors inline-block"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
