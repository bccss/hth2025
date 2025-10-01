import '../index.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'registration' | 'event' | 'technical';
}

interface Testimonial {
  name: string;
  year: string;
  major: string;
  quote: string;
  project?: string;
}

interface Stat {
  number: string;
  label: string;
  icon: string;
}

function About() {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>([]);
  const [selectedFAQCategory, setSelectedFAQCategory] = useState<'all' | 'general' | 'registration' | 'event' | 'technical'>('all');

  const stats: Stat[] = [
    { number: '1000+', label: 'Students Participated', icon: '👥' },
    { number: '200+', label: 'Projects Built', icon: '💻' },
    { number: '24', label: 'Hours of Innovation', icon: '⏰' },
    { number: '$15K+', label: 'Total Prizes Awarded', icon: '🏆' },
    { number: '15+', label: 'Industry Mentors', icon: '🧠' },
    { number: '10', label: 'Years Running', icon: '📅' }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Name',
      year: 'Class of 20XX',
      major: 'Major',
      quote: 'Quote',
      project: 'Project'
    },
    {
      name: 'Name',
      year: 'Class of 20XX',
      major: 'Major',
      quote: 'Quote',
      project: 'Project'
    },
    {
      name: 'Name',
      year: 'Class of 20XX',
      major: 'Major',
      quote: 'Quote',
      project: 'Project'
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'Who can participate in Hack the Heights?',
      answer: 'HTH is open to all Boston College students regardless of major, year, or coding experience! We especially encourage beginners - many of our past winners were first-time hackers.',
      category: 'general'
    },
    {
      question: 'Do I need to know how to code to participate?',
      answer: 'Not at all! We have workshops for beginners, mentors to help you learn, and many projects need designers, business minds, and creative thinkers. Come learn and contribute your unique skills!',
      category: 'general'
    },
    {
      question: 'How do I register for the event?',
      answer: 'Registration opens 6 weeks before the event. Sign up for our newsletter to get notified when applications go live. We typically fill up quickly, so register early!',
      category: 'registration'
    },
    {
      question: 'Do I need to have a team before the event?',
      answer: 'No! Many participants come solo and form teams during our team formation session on Day 1. Teams can be 1-4 people. We\'ll help you find the perfect teammates.',
      category: 'registration'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Hack the Heights is completely FREE! We provide all meals, snacks, swag, and prizes. Just bring your laptop, creativity, and enthusiasm!',
      category: 'registration'
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, chargers, any hardware you want to use, comfortable clothes, toiletries, and a sleeping bag if you plan to stay overnight. We provide everything else!',
      category: 'event'
    },
    {
      question: 'Where do I sleep during the 24 hours?',
      answer: 'We have designated quiet spaces for rest with couches and floor space. Many hackers power through, but we encourage taking breaks and getting some sleep!',
      category: 'event'
    },
    {
      question: 'What kind of food is provided?',
      answer: 'We provide all meals and snacks throughout the 24 hours, including dinner, midnight snacks, breakfast, and lunch. We accommodate dietary restrictions - just let us know when you register!',
      category: 'event'
    },
    {
      question: 'Can I start coding before the event?',
      answer: 'No, all code must be written during the 24-hour period. However, you can brainstorm ideas, research APIs, and plan your project beforehand. Come with ideas, not code!',
      category: 'technical'
    },
    {
      question: 'What programming languages and tools can I use?',
      answer: 'Any programming language, framework, or tool is allowed! We\'ll have workshops on popular technologies like React, Python, and cloud services. Use whatever you\'re comfortable with.',
      category: 'technical'
    },
    {
      question: 'How are projects judged?',
      answer: 'Projects are judged on creativity, technical implementation, potential impact, and presentation quality. We have multiple prize categories, so every project has a chance to win!',
      category: 'technical'
    },
    {
      question: 'What if I have a question during the event?',
      answer: 'We have mentors available 24/7 during the hackathon! Plus our organizing team is always around to help with any questions or issues. Just ask - we\'re here to help you succeed!',
      category: 'technical'
    }
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndexes(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const filteredFAQs = selectedFAQCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedFAQCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-backgroundPurple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[var(--color-lightPink)]/5 to-[var(--color-lightPurple)]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 120, 240, 360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[var(--color-lightPurple)]/5 to-[var(--color-lightPink)]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 240, 120, 0]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-fontCream mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
                Hack the Heights
              </span>
            </h1>
            {/* <p className="text-lg sm:text-xl text-fontCream/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Boston College's premier hackathon where innovation meets community. For ten years, we've been 
              bringing together the brightest minds to build the future, one line of code at a time.
            </p> */}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-[var(--color-lightPurple)]/20 to-[var(--color-lightPink)]/20 backdrop-blur-lg rounded-2xl p-8 sm:p-12 border border-[var(--color-lightPurple)]/30 mb-20"
          >
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-fontCream mb-6">Our Mission</h2>
              <p className="text-lg text-fontCream/90 leading-relaxed max-w-4xl mx-auto">
                Hack the Heights exists to democratize innovation at Boston College. We believe that great ideas 
                can come from anyone, regardless of their background or experience level. Our hackathon is a 
                judgment-free zone where students can experiment, learn, fail, and succeed together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-fontCream mb-4">
              By the Numbers
            </h2>
            <p className="text-fontCream/80 text-lg">
              Ten years of building, learning, and growing together
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[var(--color-lightPurple)]/15 backdrop-blur-lg rounded-xl p-6 text-center border border-[var(--color-lightPurple)]/30 hover:border-[var(--color-lightPink)]/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-lightPink)] mb-2">
                  {stat.number}
                </div>
                <div className="text-fontCream/80 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-fontCream mb-6">
              What Makes Us{' '}
              <span className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
                Special
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '🤝',
                title: 'Beginner-Friendly',
                description: 'Over 40% of our participants are first-time hackers. We provide mentorship, workshops, and a supportive community for everyone to succeed.'
              },
              {
                icon: '🏫',
                title: 'BC Community',
                description: 'Exclusively for Boston College students, creating tight-knit connections and lasting friendships within our Eagles community.'
              },
              {
                icon: '🎓',
                title: 'Learn by Doing',
                description: 'Hands-on workshops led by industry professionals. Learn React, AI/ML, cloud deployment, and more through practical projects.'
              },
              {
                icon: '💡',
                title: 'Real Impact',
                description: 'Many HTH projects become real startups, research projects, or open-source contributions that make a difference in the world.'
              },
              {
                icon: '🌟',
                title: 'Industry Connections',
                description: 'Network with recruiters, engineers, and executives from top tech companies. Many participants land internships through HTH connections.'
              },
              {
                icon: '🏆',
                title: 'Amazing Prizes',
                description: '$15K+ in prizes, plus exclusive opportunities like mentorship programs, startup accelerator spots, and internship fast-tracks.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-lightPurple)]/10 backdrop-blur-lg rounded-xl p-6 border border-[var(--color-lightPurple)]/20 hover:border-[var(--color-lightPink)]/40 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-fontCream mb-3">{feature.title}</h3>
                <p className="text-fontCream/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-fontCream mb-4">
              Student Stories
            </h2>
            <p className="text-fontCream/80 text-lg">
              Hear from past participants who found their passion through HTH
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[var(--color-lightPurple)]/15 to-[var(--color-lightPink)]/15 backdrop-blur-lg rounded-xl p-6 border border-[var(--color-lightPurple)]/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">💬</div>
                <p className="text-fontCream/90 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-[var(--color-lightPink)] font-bold">{testimonial.name}</div>
                  <div className="text-fontCream/70 text-sm">{testimonial.year} • {testimonial.major}</div>
                  {testimonial.project && (
                    <div className="text-[var(--color-lightPurple)] text-xs mt-2">
                      Built: {testimonial.project}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-fontCream mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-fontCream/80 text-lg mb-8">
              Everything you need to know about participating in HTH 2025
            </p>

            {/* FAQ Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { key: 'all', label: 'All Questions' },
                { key: 'general', label: 'General' },
                { key: 'registration', label: 'Registration' },
                { key: 'event', label: 'Event Day' },
                { key: 'technical', label: 'Technical' }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedFAQCategory(category.key as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFAQCategory === category.key
                      ? 'bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream'
                      : 'bg-[var(--color-lightPurple)]/20 text-fontCream/70 hover:text-fontCream hover:bg-[var(--color-lightPurple)]/30'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AnimatePresence>
              {filteredFAQs.map((faq, index) => (
                <motion.div 
                  key={`${selectedFAQCategory}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-[var(--color-lightPurple)]/15 backdrop-blur-lg rounded-xl p-6 cursor-pointer hover:bg-[var(--color-lightPurple)]/25 transition-all duration-300 border border-[var(--color-lightPurple)]/30 hover:border-[var(--color-lightPink)]/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <div 
                    className="flex justify-between items-start"
                    onClick={() => toggleAnswer(index)}
                    role="button"
                    aria-expanded={openIndexes[index]}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        toggleAnswer(index);
                      }
                    }}
                  >
                    <h3 className="text-lg font-semibold text-fontCream pr-4 leading-snug">{faq.question}</h3>
                    <motion.span 
                      className="text-[var(--color-lightPink)] text-2xl flex-shrink-0"
                      animate={{ rotate: openIndexes[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndexes[index] ? '−' : '+'}
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {openIndexes[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-fontCream/80 mt-4 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[var(--color-lightPurple)]/20 to-[var(--color-lightPink)]/20 backdrop-blur-lg rounded-2xl p-8 sm:p-12 border border-[var(--color-lightPurple)]/30">
              <h3 className="text-2xl sm:text-3xl font-bold text-fontCream mb-4">
                Ready to Join Our Community?
              </h3>
              <p className="text-fontCream/80 text-lg mb-8 max-w-2xl mx-auto">
                Be part of something bigger. Join hundreds of BC students in building the future, 
                one hackathon at a time. Your journey starts here.
              </p>
              <motion.a 
              href="https://forms.gle/UjvVou31bR8xBMjr5"
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
              <span className="relative z-10">Register Now</span>
            </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About;