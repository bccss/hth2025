import Landing from "./components/Landing.tsx";
import Schedule from "./components/Schedule.tsx";
import About from "./components/About.tsx";
import Nav from "./components/Nav.tsx";
import Sponsors from "./components/Sponsors.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css'

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-backgroundPurple relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              className="fixed bottom-6 right-6 bg-[var(--color-lightPink)] text-fontCream p-3 rounded-full shadow-lg z-50"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
