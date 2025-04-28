import { useState } from 'react'
import '../index.css'
import cat from '../assets/catcatcat.gif'

function Landing() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div className="bg-backgroundPurple min-h-screen flex flex-col items-center justify-between py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl flex flex-col items-center space-y-8">
        <div className="h-8" />

        {/* placeholder */}
        <div className="flex flex-col items-center space-y-6 animate-fade-in">
          <img 
            src={cat} 
            alt="Hack the Heights mascot" 
            className="w-48 h-48 sm:w-64 sm:h-64 object-contain transform hover:scale-105 transition-transform duration-300"
          />
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold tracking-tight">
            Hack the Heights 2025
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl">
            Notify me when more information comes out!
          </p>

          <a 
            href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              bg-backgroundCream text-fontPurple px-8 py-2 rounded-xl transition-all duration-300
              hover:bg-fontPurple hover:text-backgroundCream font-medium text-lg
              transform ${isHovered ? 'scale-105' : ''} ${isPressed ? 'scale-95' : ''}
              shadow-lg hover:shadow-xl active:shadow
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
          >
            Sign Up Now
          </a>
        </div>
      </div>

      <footer className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-4 text-sm sm:text-base">
        <a 
          href="https://bccss.co/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-backgroundCream transition-colors"
        >
          bccss.co
        </a>
        <p className="text-center sm:text-right">
          Interested in sponsoring us?{' '}
          <a 
            href="mailto:bccssociety@gmail.com" 
            className="underline text-white hover:text-backgroundCream transition-colors"
          >
            Click here!
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Landing



