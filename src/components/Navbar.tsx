
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* ZeroBite Logo with custom SVG */}
            <div className="mr-3 relative h-10">
              <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
                <text x="0" y="30" fontFamily="'Playfair Display', serif" fontSize="30" fontWeight="bold" fill="#1F2937">Zer</text>
                {/* The 0 with bite mark */}
                <g className="zero-with-bite">
                  <text x="56" y="30" fontFamily="'Playfair Display', serif" fontSize="30" fontWeight="bold" fill="#FFB478">0</text>
                  {/* Bite mark circle (represents bite taken from the 0) */}
                  <circle cx="65" cy="15" r="5" fill="white" stroke="#FFB478" strokeWidth="2"/>
                  {/* Small bite marks to make it look like teeth marks */}
                  <path d="M62 15 L60 17" stroke="#FFB478" strokeWidth="1"/>
                  <path d="M65 12 L65 10" stroke="#FFB478" strokeWidth="1"/>
                  <path d="M68 15 L70 17" stroke="#FFB478" strokeWidth="1"/>
                </g>
                <text x="75" y="30" fontFamily="'Playfair Display', serif" fontSize="30" fontWeight="bold" fill="#1F2937">Bite</text>
              </svg>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#flavors">Our Flavors</NavLink>
            <NavLink href="#process">Our Process</NavLink>
            <NavLink href="#locations">Locations</NavLink>
            <NavLink href="#contact">Contact</NavLink>
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
              <MobileNavLink href="#flavors" onClick={() => setIsMobileMenuOpen(false)}>
                Our Flavors
              </MobileNavLink>
              <MobileNavLink href="#process" onClick={() => setIsMobileMenuOpen(false)}>
                Our Process
              </MobileNavLink>
              <MobileNavLink href="#locations" onClick={() => setIsMobileMenuOpen(false)}>
                Locations
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
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
    className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-800 after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-100"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-800 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
