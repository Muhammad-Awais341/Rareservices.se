
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-full transition-colors group-hover:bg-primary/20">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Velocity<span className="text-primary">Sync</span>
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <Button asChild>
              <a href="#book">Book Now</a>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-6 pb-4 space-y-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg">
          <a href="#services" className="block py-3 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#about" className="block py-3 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#contact" className="block py-3 font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <Button asChild className="w-full">
            <a href="#book" onClick={() => setIsMenuOpen(false)}>Book Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
