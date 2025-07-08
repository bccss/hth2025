import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from "./components/Nav.tsx";
import './index.css'

// Lazy load components for better performance
const Landing = lazy(() => import('./components/Landing.tsx'));
const Schedule = lazy(() => import('./components/Schedule.tsx'));
const About = lazy(() => import('./components/About.tsx'));
const Sponsors = lazy(() => import('./components/Sponsors.tsx'));
const Prizes = lazy(() => import('./components/Prizes.tsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-backgroundPurple flex items-center justify-center">
    <div className="text-center">
      <motion.div 
        className="w-16 h-16 border-4 border-[var(--color-lightPurple)] border-t-[var(--color-lightPink)] rounded-full mx-auto mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p 
        className="text-fontCream text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading Hack the Heights...
      </motion.p>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetError }: { error: Error; resetError: () => void }) => (
  <div className="min-h-screen bg-backgroundPurple flex items-center justify-center px-4">
    <div className="text-center max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[var(--color-lightPurple)]/20 backdrop-blur-lg rounded-xl p-8 border border-[var(--color-lightPurple)]/30"
      >
        <h2 className="text-2xl font-bold text-fontCream mb-4">Oops! Something went wrong</h2>
        <p className="text-fontCream/80 mb-6">
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={resetError}
            className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
          <motion.button
            onClick={() => window.location.reload()}
            className="bg-transparent border-2 border-[var(--color-lightPurple)] text-fontCream px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-lightPurple)]/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Refresh Page
          </motion.button>
        </div>
        <details className="mt-6 text-left">
          <summary className="text-fontCream/60 cursor-pointer hover:text-fontCream transition-colors">
            Error Details
          </summary>
          <pre className="mt-2 text-xs text-fontCream/40 overflow-auto p-2 bg-[var(--color-primaryPurple)]/50 rounded">
            {error.message}
          </pre>
        </details>
      </motion.div>
    </div>
  </div>
);

// Simple error boundary hook
const useErrorBoundary = () => {
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      setError(new Error(error.message));
    };
    
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
  
  const resetError = () => setError(null);
  
  return { error, resetError };
};

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { error, resetError } = useErrorBoundary();

  // Enhanced scroll to top button visibility with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      setShowScrollButton(window.scrollY > 500);
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrollPercent);
      
      // Clear existing timeout
      clearTimeout(timeoutId);
      
      // Set new timeout to hide scrolling indicator
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Enhanced scroll to top function with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // If there's an error, show the error fallback
  if (error) {
    return <ErrorFallback error={error} resetError={resetError} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-backgroundPurple relative">
        <Nav />
        
        <main role="main">
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/about" element={<About />} />
                <Route path="/prizes" element={<Prizes />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="*" element={
                  <div className="min-h-screen bg-backgroundPurple flex items-center justify-center px-4">
                    <div className="text-center max-w-md mx-auto">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[var(--color-lightPurple)]/20 backdrop-blur-lg rounded-xl p-8 border border-[var(--color-lightPurple)]/30"
                      >
                        <h1 className="text-6xl font-bold text-[var(--color-lightPink)] mb-4">404</h1>
                        <h2 className="text-2xl font-bold text-fontCream mb-4">Page Not Found</h2>
                        <p className="text-fontCream/80 mb-6">
                          The page you're looking for doesn't exist. Let's get you back to the hackathon!
                        </p>
                        <motion.a
                          href="/"
                          className="inline-block bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          🏠 Go Home
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                } />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        {/* Enhanced scroll to top button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              className="fixed bottom-6 right-6 bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream p-3 rounded-full shadow-lg z-50 hover:shadow-xl transition-all duration-300 group"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top of page"
              title="Scroll to top"
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ y: isScrolling ? -2 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </motion.svg>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Scroll progress indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] transform origin-left z-50"
          style={{ scaleX: scrollProgress }}
          initial={{ scaleX: 0 }}
        />
      </div>
    </Router>
  )
}

export default App
