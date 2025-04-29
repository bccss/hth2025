import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`p-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#432F70]/90 backdrop-blur-md shadow-md' : ''}`}>
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-fontCream text-xl font-bold">Hack the Heights</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-[#9F86C0] hover:text-[#F9F5EF] transition-colors">Home</Link>
          <Link to="/schedule" className="text-[#9F86C0] hover:text-[#F9F5EF] transition-colors">Schedule</Link>
          <Link to="/about" className="text-[#9F86C0] hover:text-[#F9F5EF] transition-colors">About</Link>
          <Link to="/sponsors" className="text-[#9F86C0] hover:text-[#F9F5EF] transition-colors">Sponsors</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span 
            className={`block w-6 h-0.5 bg-[#E0B1CB] transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span 
            className={`block w-6 h-0.5 bg-[#E0B1CB] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span 
            className={`block w-6 h-0.5 bg-[#E0B1CB] transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-[#432F70]/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-60 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-4">
          <Link 
            to="/" 
            className="text-[#9F86C0] hover:text-[#F9F5EF] transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/schedule" 
            className="text-[#9F86C0] hover:text-[#F9F5EF] transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Schedule
          </Link>
          <Link 
            to="/about" 
            className="text-[#9F86C0] hover:text-[#F9F5EF] transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/sponsors" 
            className="text-[#9F86C0] hover:text-[#F9F5EF] transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Sponsors
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 