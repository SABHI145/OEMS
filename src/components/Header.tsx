import { useState, useEffect } from 'react';
import { Car, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-teal shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Car className={`h-8 w-8 ${isScrolled ? 'text-cool-mint' : 'text-deep-teal'}`} />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-charcoal'}`}>
              OEMS
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#rides"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-cool-mint' : 'text-charcoal hover:text-deep-teal'
              }`}
            >
              Rides
            </a>
            <a
              href="#drive"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-cool-mint' : 'text-charcoal hover:text-deep-teal'
              }`}
            >
              Drive
            </a>
            <a
              href="#business"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-cool-mint' : 'text-charcoal hover:text-deep-teal'
              }`}
            >
              Business
            </a>
            <a
              href="#safety"
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-cool-mint' : 'text-charcoal hover:text-deep-teal'
              }`}
            >
              Safety
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? 'text-white hover:text-cool-mint'
                  : 'text-charcoal hover:text-deep-teal'
              }`}
            >
              Support
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? 'text-white hover:text-cool-mint'
                  : 'text-charcoal hover:text-deep-teal'
              }`}
            >
              Sign In
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isScrolled
                  ? 'bg-cool-mint text-charcoal hover:shadow-mint'
                  : 'bg-deep-teal text-white hover:bg-opacity-90'
              }`}
            >
              Join Now
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-white' : 'text-charcoal'} />
            ) : (
              <Menu className={isScrolled ? 'text-white' : 'text-charcoal'} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-deep-teal">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#rides" className="block px-3 py-2 text-white hover:text-cool-mint">
              Rides
            </a>
            <a href="#drive" className="block px-3 py-2 text-white hover:text-cool-mint">
              Drive
            </a>
            <a href="#business" className="block px-3 py-2 text-white hover:text-cool-mint">
              Business
            </a>
            <a href="#safety" className="block px-3 py-2 text-white hover:text-cool-mint">
              Safety
            </a>
            <div className="pt-2 space-y-2">
              <button className="w-full px-4 py-2 text-white hover:text-cool-mint">
                Support
              </button>
              <button className="w-full px-4 py-2 text-white hover:text-cool-mint">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-cool-mint text-charcoal rounded-lg font-medium">
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
