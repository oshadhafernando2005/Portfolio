
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scrolling effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-portfolio-blue-dark">
          Portfolio
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-portfolio-blue transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Skills
          </a>
          <a href="#experience" className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-gray-700 hover:text-portfolio-blue transition-colors">
            Contact
          </a>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="#about" 
                className="text-gray-700 hover:text-portfolio-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-700 hover:text-portfolio-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-gray-700 hover:text-portfolio-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="text-gray-700 hover:text-portfolio-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-portfolio-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
