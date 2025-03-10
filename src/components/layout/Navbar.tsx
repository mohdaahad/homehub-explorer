
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Heart, Home, Building, Map, Info, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-estate-navy/90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-display font-semibold text-estate-navy dark:text-white"
          >
            <span className="inline-block animate-slide-in-right opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Estate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/properties" icon={<Building size={16} />} delay={0.2}>Properties</NavLink>
            <NavLink to="/map" icon={<Map size={16} />} delay={0.3}>Map</NavLink>
            <NavLink to="/about" icon={<Info size={16} />} delay={0.4}>About</NavLink>
            <NavLink to="/contact" icon={<Phone size={16} />} delay={0.5}>Contact</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 rounded-full transition-colors hover:bg-estate-lightGray dark:hover:bg-estate-charcoal animate-slide-in-right opacity-0" 
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <Search size={20} className="text-estate-navy dark:text-white" />
            </button>
            <button 
              className="p-2 rounded-full transition-colors hover:bg-estate-lightGray dark:hover:bg-estate-charcoal animate-slide-in-right opacity-0" 
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <Heart size={20} className="text-estate-navy dark:text-white" />
            </button>
            <button 
              className="flex items-center space-x-2 bg-estate-navy text-white px-4 py-2 rounded-md animate-slide-in-right opacity-0 hover:bg-estate-navy/90 transition-colors"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <User size={18} />
              <span className="text-sm font-medium">Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-estate-navy dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-estate-navy p-6 pt-20 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <MobileNavLink to="/" icon={<Home size={20} />} onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/properties" icon={<Building size={20} />} onClick={() => setIsMenuOpen(false)}>Properties</MobileNavLink>
          <MobileNavLink to="/map" icon={<Map size={20} />} onClick={() => setIsMenuOpen(false)}>Map</MobileNavLink>
          <MobileNavLink to="/about" icon={<Info size={20} />} onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/contact" icon={<Phone size={20} />} onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          
          <div className="pt-6 border-t border-estate-lightGray dark:border-estate-charcoal">
            <button className="flex items-center w-full space-x-2 bg-estate-navy text-white px-4 py-3 rounded-md">
              <User size={20} />
              <span className="text-base font-medium">Sign In / Register</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children, icon, delay = 0 }: { to: string; children: React.ReactNode; icon?: React.ReactNode; delay?: number }) => (
  <Link 
    to={to} 
    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-estate-navy dark:text-white rounded-md hover:bg-estate-lightGray dark:hover:bg-estate-charcoal/50 transition-colors animate-slide-in-right opacity-0"
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    {icon && <span className="opacity-70">{icon}</span>}
    <span>{children}</span>
  </Link>
);

const MobileNavLink = ({ to, children, icon, onClick }: { to: string; children: React.ReactNode; icon?: React.ReactNode; onClick: () => void }) => (
  <Link 
    to={to} 
    className="flex items-center space-x-3 px-2 py-3 text-lg font-medium text-estate-navy dark:text-white rounded-md hover:bg-estate-lightGray dark:hover:bg-estate-charcoal/50 transition-colors"
    onClick={onClick}
  >
    {icon && <span>{icon}</span>}
    <span>{children}</span>
  </Link>
);

export default Navbar;
