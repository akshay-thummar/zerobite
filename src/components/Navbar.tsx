
import { useState, useEffect } from 'react';
import { Menu, X, IceCream, MapPin, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* ZeroBite Logo */}
            <div className="flex items-center">
              <span className="font-playfair text-3xl font-bold tracking-tight text-gray-900">Zer</span>
              <div className="relative inline-block">
                <span className="font-playfair text-3xl font-bold text-cream-500">0</span>
                {/* Bite mark in the zero */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-cream-500"></div>
              </div>
              <span className="font-playfair text-3xl font-bold tracking-tight text-gray-900">Bite</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#flavors">
              <IceCream className="h-4 w-4 mr-1.5 text-cream-500" />
              Our Flavors
            </NavLink>
            <NavLink href="#process">Our Process</NavLink>
            <NavLink href="#juices">Fresh Juices</NavLink>
            <NavLink href="#locations">
              <MapPin className="h-4 w-4 mr-1.5 text-cream-500" />
              Locations
            </NavLink>
            <a 
              href="#contact"
              className="px-4 py-2 rounded-full bg-cream-500 text-white font-medium hover:bg-cream-400 transition-colors shadow-sm"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:text-gray-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="px-4 py-3 space-y-3 bg-white/98 backdrop-blur-md rounded-xl shadow-lg">
              <MobileNavLink href="#flavors" onClick={() => setIsMobileMenuOpen(false)}>
                <IceCream className="h-4 w-4 mr-2 text-cream-500" />
                Our Flavors
              </MobileNavLink>
              <MobileNavLink href="#process" onClick={() => setIsMobileMenuOpen(false)}>
                Our Process
              </MobileNavLink>
              <MobileNavLink href="#juices" onClick={() => setIsMobileMenuOpen(false)}>
                Fresh Juices
              </MobileNavLink>
              <MobileNavLink href="#locations" onClick={() => setIsMobileMenuOpen(false)}>
                <MapPin className="h-4 w-4 mr-2 text-cream-500" />
                Locations
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-800 hover:text-cream-500 px-3 py-2 text-sm font-medium transition-colors flex items-center"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center text-gray-800 hover:text-cream-500 px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
