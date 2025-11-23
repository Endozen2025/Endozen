import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const { getContent } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: getContent('header', 'navigation', 'home_text') || 'Home', path: '/' },
    { name: getContent('header', 'navigation', 'about_text') || 'About', path: '/about' },
    { name: getContent('header', 'navigation', 'services_text') || 'Services', path: '/services' },
    { name: getContent('header', 'navigation', 'equipment_text') || 'Equipment', path: '/equipment' },
    { name: getContent('header', 'navigation', 'contact_text') || 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Link to="/" className="flex items-center h-full overflow-visible">
            {/* EndoZen Header Logo - Full width for complete visibility */}
            {!logoError ? (
              <img 
                src="/Endozen Logo.jpg" 
                alt="EndoZen Logo" 
                className="h-full w-auto object-contain"
                style={{ 
                  maxWidth: '600px',
                  minWidth: '330px',
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  transform: 'scale(0.88)',
                  transformOrigin: 'left center',
                  filter: 'contrast(1.1) brightness(1.05)',
                  imageRendering: 'auto'
                }}
                onError={() => setLogoError(true)}
              />
            ) : (
              <Activity className="h-12 w-12 text-blue-600" />
            )}
          </Link>

          {/* Desktop Navigation - Closer to logo */}
          <nav className="hidden md:flex space-x-8 ml-8 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/quote"
            className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium ml-auto transition-colors duration-200"
          >
            {getContent('header', 'cta', 'quote_button_text') || 'Get Quote'}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="block px-3 py-2 mt-4 bg-green-600 text-white text-center rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {getContent('header', 'cta', 'quote_button_text') || 'Get Quote'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
