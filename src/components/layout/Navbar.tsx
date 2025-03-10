
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Heart, Home, Building, Map, Info, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
            <NavLink to="/properties" icon={<Building size={16} />} delay={0.2} active={location.pathname === '/properties'}>Properties</NavLink>
            <NavLink to="/map" icon={<Map size={16} />} delay={0.3} active={location.pathname === '/map'}>Map</NavLink>
            <NavLink to="/about" icon={<Info size={16} />} delay={0.4} active={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/contact" icon={<Phone size={16} />} delay={0.5} active={location.pathname === '/contact'}>Contact</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 rounded-full transition-colors hover:bg-estate-lightGray dark:hover:bg-estate-charcoal animate-slide-in-right opacity-0" 
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <Search size={20} className="text-estate-navy dark:text-white" />
            </button>
            <Link 
              to="/wishlist"
              className="p-2 rounded-full transition-colors hover:bg-estate-lightGray dark:hover:bg-estate-charcoal animate-slide-in-right opacity-0" 
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <Heart size={20} className="text-estate-navy dark:text-white" />
            </Link>
            <Link 
              to="/signin"
              className="flex items-center space-x-2 bg-estate-navy text-white px-4 py-2 rounded-md animate-slide-in-right opacity-0 hover:bg-estate-navy/90 transition-colors"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <User size={18} />
              <span className="text-sm font-medium">Sign In</span>
            </Link>
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
          <MobileNavLink to="/" icon={<Home size={20} />} onClick={() => setIsMenuOpen(false)} active={location.pathname === '/'}>Home</MobileNavLink>
          <MobileNavLink to="/properties" icon={<Building size={20} />} onClick={() => setIsMenuOpen(false)} active={location.pathname === '/properties'}>Properties</MobileNavLink>
          <MobileNavLink to="/map" icon={<Map size={20} />} onClick={() => setIsMenuOpen(false)} active={location.pathname === '/map'}>Map</MobileNavLink>
          <MobileNavLink to="/about" icon={<Info size={20} />} onClick={() => setIsMenuOpen(false)} active={location.pathname === '/about'}>About</MobileNavLink>
          <MobileNavLink to="/contact" icon={<Phone size={20} />} onClick={() => setIsMenuOpen(false)} active={location.pathname === '/contact'}>Contact</MobileNavLink>
          <MobileNavLink to="/wishlist" icon={<Heart size={20} />} onClick={() => setIsMenuOpen(false)} active={location.pathname === '/wishlist'}>Wishlist</MobileNavLink>
          
          <div className="pt-6 border-t border-estate-lightGray dark:border-estate-charcoal">
            <Link 
              to="/signin"
              className="flex items-center w-full space-x-2 bg-estate-navy text-white px-4 py-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={20} />
              <span className="text-base font-medium">Sign In / Register</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children, icon, delay = 0, active = false }: { to: string; children: React.ReactNode; icon?: React.ReactNode; delay?: number; active?: boolean }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md hover:bg-estate-lightGray dark:hover:bg-estate-charcoal/50 transition-colors animate-slide-in-right opacity-0 ${
      active 
        ? 'bg-estate-gold/10 text-estate-gold' 
        : 'text-estate-navy dark:text-white'
    }`}
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    {icon && <span className="opacity-70">{icon}</span>}
    <span>{children}</span>
  </Link>
);

const MobileNavLink = ({ to, children, icon, onClick, active = false }: { to: string; children: React.ReactNode; icon?: React.ReactNode; onClick: () => void; active?: boolean }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-3 px-2 py-3 text-lg font-medium rounded-md hover:bg-estate-lightGray dark:hover:bg-estate-charcoal/50 transition-colors ${
      active 
        ? 'bg-estate-gold/10 text-estate-gold' 
        : 'text-estate-navy dark:text-white'
    }`}
    onClick={onClick}
  >
    {icon && <span>{icon}</span>}
    <span>{children}</span>
  </Link>
);

export default Navbar;
