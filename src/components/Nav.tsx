import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/about', label: 'About' },
    { path: '/prizes', label: 'Prizes' },
    { path: '/sponsors', label: 'Sponsors' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className={`p-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--color-primaryPurple)]/95 backdrop-blur-md shadow-lg border-b border-[var(--color-lightPurple)]/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-fontCream text-xl font-bold hover:text-[var(--color-lightPink)] transition-colors duration-300"
          aria-label="Hack the Heights home page"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent"
          >
            Hack the Heights
          </motion.span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-[var(--color-lightPurple)] hover:text-[var(--color-secondaryCream)] transition-colors duration-300 font-medium ${
                isActive(item.path) ? 'text-[var(--color-lightPink)]' : ''
              }`}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
              </motion.span>
              {isActive(item.path) && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] rounded-full"
                  layoutId="navbar-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-lightPink)] focus:ring-opacity-50 rounded-md p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span 
            className="block w-6 h-0.5 bg-[var(--color-lightPink)] rounded-full"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span 
            className="block w-6 h-0.5 bg-[var(--color-lightPink)] rounded-full"
            animate={{
              opacity: isMenuOpen ? 0 : 1
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span 
            className="block w-6 h-0.5 bg-[var(--color-lightPink)] rounded-full"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0
            }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        id="mobile-menu"
        className="md:hidden absolute left-0 right-0 bg-[var(--color-primaryPurple)]/98 backdrop-blur-md shadow-xl border-b border-[var(--color-lightPurple)]/20 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div 
          className="flex flex-col py-4 px-6 space-y-4"
          initial={{ y: -20 }}
          animate={{ y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link 
                to={item.path}
                className={`block text-[var(--color-lightPurple)] hover:text-[var(--color-secondaryCream)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--color-lightPurple)]/10 font-medium ${
                  isActive(item.path) ? 'text-[var(--color-lightPink)] bg-[var(--color-lightPink)]/10' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Nav; 