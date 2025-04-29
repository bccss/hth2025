import { useState, useEffect } from 'react'
import '../index.css'
import cat from '../assets/catcatcat.gif'
import { motion } from 'framer-motion'

function Landing() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  // Update window height when resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate the height to use (minus navbar height ~64px)
  const contentHeight = windowHeight - 64

  return (
    <main 
      className="flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{ height: `${contentHeight}px` }}
    >      
      {/* Content - using z-10 to ensure it appears above the background */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center flex-grow z-10">
        <motion.section 
          className="flex flex-col items-center space-y-4 sm:space-y-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img 
            src={cat} 
            alt="Hack the Heights mascot" 
            className="w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-contain drop-shadow-[0_0_15px_rgba(224,177,203,0.5)]"
            whileHover={{ 
              scale: 1.05, 
              rotate: 5,
              filter: "drop-shadow(0 0 20px rgba(224,177,203,0.7))"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://placehold.co/200x200?text=HTH';
            }}
          />
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-tight text-fontCream drop-shadow-[0_0_10px_rgba(159,134,192,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hack the Heights 2025
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-center max-w-2xl text-fontCream"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Notify me when more information comes out!
          </motion.p>

          <motion.a 
            href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              bg-backgroundCream text-fontPurple px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300
              hover:bg-[var(--color-lightPink)] hover:text-fontCream font-medium text-base sm:text-lg
              transform ${isHovered ? 'scale-105' : ''} ${isPressed ? 'scale-95' : ''}
              shadow-lg hover:shadow-xl active:shadow focus:outline-none focus:ring-2 focus:ring-[var(--color-lightPink)]
              relative overflow-hidden group
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
            aria-label="Sign up for Hack the Heights newsletter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(224, 177, 203, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Adding shine effect on hover */}
            <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 transform -skew-x-20 transition-all duration-1000 ease-out group-hover:w-full"></span>
            Sign Up Now
          </motion.a>
        </motion.section>
      </div>

      <footer className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 py-4 px-4 text-sm z-10">
        <a 
          href="https://bccss.co/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-fontCream hover:text-[var(--color-lightPink)] transition-colors"
        >
          bccss.co
        </a>
        <p className="text-center sm:text-right text-fontCream">
          Interested in sponsoring us?{' '}
          <a 
            href="mailto:bccssociety@gmail.com" 
            className="underline text-[var(--color-lightPink)] hover:text-fontCream transition-colors"
          >
            Click here!
          </a>
        </p>
      </footer>
    </main>
  )
}

export default Landing



