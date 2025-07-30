import { useState, useEffect } from 'react'
import '../index.css'
import cat from '../assets/catcatcat.gif'
import { motion, useScroll, useTransform } from 'framer-motion'

function Landing() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 150])
  const y2 = useTransform(scrollY, [0, 300], [0, -150])

  // Update window height when resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Countdown timer (set to a future date - adjust as needed)
  useEffect(() => {
    const targetDate = new Date('2025-10-15T09:00:00').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const contentHeight = windowHeight - 64

  return (
    <main className="overflow-hidden relative">
      {/* 10th Anniversary Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 bg-gradient-to-r from-[var(--color-lightPink)] via-[var(--color-lightPurple)] to-[var(--color-lightPink)] py-3 sm:py-4 overflow-hidden"
      >
        {/* Animated sparkles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-300 text-xs sm:text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                rotate: [0, 360]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center relative z-10 px-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl">🎉</span>
            <div className="text-center">
              <div className="text-fontCream font-bold text-sm sm:text-base md:text-lg">
                CELEBRATING 10 YEARS OF INNOVATION
              </div>
              <div className="text-fontCream/90 text-xs sm:text-sm font-medium">
                HTH 2025 • 10th Anniversary Edition • A Decade of Hacking Excellence
              </div>
            </div>
            <span className="text-2xl sm:text-3xl">🎉</span>
          </div>
        </motion.div>

        {/* Floating confetti elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`confetti-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: i % 3 === 0 ? '#E0B1CB' : i % 3 === 1 ? '#9F86C0' : '#F9F5EF',
                left: `${10 + i * 12}%`,
                top: '20%'
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-[var(--color-lightPurple)]/10 to-[var(--color-lightPink)]/10 rounded-full blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-[var(--color-lightPink)]/10 to-[var(--color-lightPurple)]/10 rounded-full blur-3xl"
          style={{ y: y2 }}
        />
      </div>

      {/* Hero Section */}
      <section 
        className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ minHeight: `${contentHeight}px` }}
      >
        <div className="w-full max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.img 
              src={cat} 
              alt="Hack the Heights mascot" 
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain mx-auto mb-6 drop-shadow-[0_0_25px_rgba(224,177,203,0.6)]"
              whileHover={{ 
                scale: 1.1, 
                rotate: 10,
                filter: "drop-shadow(0 0 30px rgba(224,177,203,0.8))"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://placehold.co/200x200?text=HTH';
              }}
            />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold tracking-tight text-fontCream mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block">Hack</span>{' '}
            <span className="inline-block bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
              the
            </span>{' '}
            <span className="inline-block">Heights</span>
          </motion.h1>

          <motion.div
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-lightPink)] mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Fall 2025 • 10th Anniversary
          </motion.div>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-center max-w-4xl mx-auto text-fontCream mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Boston College's premier hackathon where{' '}
            <span className="text-[var(--color-lightPink)] font-semibold">innovation meets community</span>.
            <br className="hidden sm:block" />
            Celebrating a decade of excellence with 500+ fellow hackers for 24 hours of building something amazing.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <motion.div 
                key={item.label} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="bg-[var(--color-lightPurple)]/20 backdrop-blur-lg rounded-xl p-2 sm:p-3 md:p-4 border border-[var(--color-lightPurple)]/30 hover:border-[var(--color-lightPink)]/50 transition-all duration-300 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-fontCream">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--color-lightPink)] uppercase tracking-wide font-medium">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a 
              href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group w-full sm:w-auto text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(224, 177, 203, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 transform -skew-x-20 transition-all duration-1000 ease-out group-hover:w-full"></span>
              <span className="relative z-10">🚀 Register Now</span>
            </motion.a>

            <motion.button 
              className="bg-transparent border-2 border-[var(--color-lightPurple)] text-fontCream px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[var(--color-lightPurple)]/20 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-lightPink)]">500+</div>
              <div className="text-xs sm:text-sm md:text-base text-fontCream">Hackers</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-lightPurple)]">24</div>
              <div className="text-xs sm:text-sm md:text-base text-fontCream">Hours</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-lightPink)]">$$$</div>
              <div className="text-xs sm:text-sm md:text-base text-fontCream">Prizes</div>
            </motion.div>
            <motion.div 
              className="text-center relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent relative">
                10
                <motion.span 
                  className="absolute -top-1 -right-2 text-xs text-yellow-400"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </div>
              <div className="text-xs sm:text-sm md:text-base text-fontCream">Years</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fontCream mb-6">
              What is{' '}
              <span className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
                Hack the Heights?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-fontCream max-w-4xl mx-auto leading-relaxed">
              Boston College's annual hackathon where innovation meets community. Now celebrating our 10th anniversary, 
              this 24-hour coding marathon brings together creative minds to build tech solutions, learn new skills, and collaborate 
              on impactful projects. From complete beginners to seasoned developers—everyone is welcome to join this decade-long tradition of excellence!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '🚀',
                title: 'Build & Innovate',
                description: 'Create amazing projects in 24 hours with cutting-edge technology and unlimited creativity.'
              },
              {
                icon: '🤝',
                title: 'Connect & Collaborate',
                description: 'Meet like-minded hackers, form teams, and build lasting friendships in the tech community.'
              },
              {
                icon: '📚',
                title: 'Learn & Grow',
                description: 'Attend workshops, get mentorship, and level up your skills with industry experts.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-lightPurple)]/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-[var(--color-lightPurple)]/20 hover:border-[var(--color-lightPink)]/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-fontCream mb-4">{item.title}</h3>
                <p className="text-fontCream/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Event Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[var(--color-lightPurple)]/20 to-[var(--color-lightPink)]/20 backdrop-blur-lg rounded-xl p-8 sm:p-12 border border-[var(--color-lightPurple)]/30"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-fontCream mb-6 text-center">
              Why Hack the Heights?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { number: '100+', label: 'Participants' },
                { number: '24', label: 'Hours of Coding' },
                { number: '$$$', label: 'in Prizes' },
                { number: '3+', label: 'Workshops' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[var(--color-lightPink)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-fontCream/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-lightPurple)]/20 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <a 
            href="https://bccss.co/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-fontCream hover:text-[var(--color-lightPink)] transition-colors font-medium"
          >
            Powered by BC Computer Science Society
          </a>
          <p className="text-center sm:text-right text-fontCream/80">
            Interested in sponsoring?{' '}
            <a 
              href="mailto:bccssociety@gmail.com" 
              className="text-[var(--color-lightPink)] hover:text-fontCream transition-colors font-medium"
            >
              Get in touch!
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}

export default Landing



