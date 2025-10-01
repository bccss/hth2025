import { motion } from 'framer-motion'
import { useState } from 'react'

interface Prize {
  place: string
  amount: string
  description: string
  icon: string
  color: string
}

interface CategoryPrize {
  title: string
  amount: string
  description: string
  icon: string
  sponsor?: string
  challenge?: string
}

interface PastWinner {
  year: string
  project: string
  team: string
  description: string
  category: string
  projectLink?: string
}

function Prizes() {
  const [activeCategory, setActiveCategory] = useState<'overall' | 'category' | 'sponsor'>('overall')

  const overallPrizes: Prize[] = [
    {
      place: 'First Place',
      amount: 'TBA',
      description: '',
      icon: '🥇',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      place: 'Second Place', 
      amount: 'TBA',
      description: '',
      icon: '🥈',
      color: 'from-gray-300 to-gray-500'
    },
    {
      place: 'Rookie Track',
      amount: 'TBA',
      description: '',
      icon: '📚',
      color: 'from-amber-600 to-amber-800'
    }
  ]

  const categoryPrizes: CategoryPrize[] = [
    {
      title: 'Best AI/ML Implementation',
      amount: 'TBA',
      description: 'Most innovative use of artificial intelligence or machine learning',
      icon: '🤖',
      challenge: 'Build something that leverages AI to solve real-world problems'
    },
    {
      title: 'Best Social Impact',
      amount: 'TBA', 
      description: 'Project that makes the biggest positive difference in the world',
      icon: '🌍',
      challenge: 'Create technology that addresses social, environmental, or humanitarian issues'
    },
    {
      title: 'Best Technical Achievement',
      amount: 'TBA',
      description: 'Most impressive technical complexity and innovation',
      icon: '⚡',
      challenge: 'Push the boundaries of what\'s possible with code'
    },
    {
      title: 'Best Design & UX',
      amount: 'TBA',
      description: 'Most beautiful and user-friendly interface',
      icon: '🎨',
      challenge: 'Create an experience that users will love to use'
    },
    {
      title: 'Best Beginner Project',
      amount: 'TBA',
      description: 'Outstanding project by first-time hackathon participants',
      icon: '🌟',
      challenge: 'Show that great ideas can come from anywhere'
    },
    {
      title: 'People\'s Choice Award',
      amount: 'TBA',
      description: 'Voted by hackathon participants as their favorite',
      icon: '❤️',
      challenge: 'Win the hearts of your fellow hackers'
    }
  ]

  const sponsorPrizes: CategoryPrize[] = [
    {
      title: 'Sponsor Challenge #1',
      amount: 'TBA',
      description: 'Sponsor-specific challenge prize',
      icon: '☁️',
      challenge: 'Details to be announced with sponsor confirmation'
    },
    {
      title: 'Sponsor Challenge #2',
      amount: 'TBA',
      description: 'Sponsor-specific challenge prize',
      icon: '💰',
      challenge: 'Details to be announced with sponsor confirmation'
    },
    {
      title: 'Sponsor Challenge #3',
      amount: 'TBA',
      description: 'Sponsor-specific challenge prize',
      icon: '🔗',
      challenge: 'Details to be announced with sponsor confirmation'
    }
  ]

  const pastWinners: PastWinner[] = [
    {
      year: '2024',
      project: 'Study Buddies',
      team: 'Jaden Ying, Michael Widener, Ian Patino, Michael Tran',
      description: 'See where your friends are studying.',
      category: 'First Place Overall',
      projectLink: 'https://github.com/widenerm/HTH24'
    },
    {
      year: '2024',
      project: 'BC Marketplace',
      team: 'Myles Grant, Jude Lascano',
      description: 'Buy, sell, and trade with BC students.',
      category: 'Second Place Overall',
      projectLink: 'https://github.com/mylesgrxnt/BC-Marketplace'
    },
    {
      year: '2024',
      project: 'BC GO!',
      team: 'Kit Levy, Matthew Dukes',
      description: 'The best way to explore Boston.',
      category: 'Rookie Track',
      projectLink: 'https://github.com/mattdks/bc_go'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="min-h-screen bg-backgroundPurple py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--color-lightPink)]/5 to-[var(--color-lightPurple)]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[var(--color-lightPurple)]/5 to-[var(--color-lightPink)]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-fontCream mb-6">
            <span className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
              Prizes
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">To Be Announced</span>
          </h1>
          <p className="text-lg sm:text-xl text-fontCream/80 max-w-3xl mx-auto leading-relaxed">
            Amazing prizes, recognition, and opportunities await! Prize details will be announced soon.
          </p>
        </motion.div>

        {/* Category Switcher */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { key: 'overall', label: 'Overall' },
              { key: 'category', label: 'Categories' },
              { key: 'sponsor', label: 'Sponsors' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key as 'overall' | 'category' | 'sponsor')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === tab.key
                    ? 'bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream'
                    : 'bg-[var(--color-lightPurple)]/20 text-fontCream/70 hover:text-fontCream hover:bg-[var(--color-lightPurple)]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Prize Content */}
        <div className="mb-20">
          {activeCategory === 'overall' && (
            <motion.div
              key="overall"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {overallPrizes.map((prize, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative"
                >
                  <div className="bg-[var(--color-lightPurple)]/20 backdrop-blur-lg rounded-2xl p-8 border border-[var(--color-lightPurple)]/30 hover:border-[var(--color-lightPink)]/50 transition-all duration-300 text-center h-full">
                    <div className="text-6xl mb-6">{prize.icon}</div>
                    <h3 className="text-2xl font-bold text-fontCream mb-2">{prize.place}</h3>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-4`}>
                      {prize.amount}
                    </div>
                    <p className="text-fontCream/80 leading-relaxed">{prize.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeCategory === 'category' && (
            <motion.div
              key="category"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="bg-[var(--color-lightPurple)]/15 backdrop-blur-lg rounded-2xl p-12 border border-[var(--color-lightPurple)]/30">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-fontCream mb-4">More Prizes Coming Soon</h3>
                <p className="text-fontCream/80 text-lg leading-relaxed">
                  More prizes will be announced closer to the event.
                </p>
              </div>
            </motion.div>
          )}

          {activeCategory === 'sponsor' && (
            <motion.div
              key="sponsor"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-[var(--color-lightPurple)]/20 to-[var(--color-lightPink)]/20 backdrop-blur-lg rounded-2xl p-12 border border-[var(--color-lightPurple)]/30">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold text-fontCream mb-4">Sponsor Challenges Coming Soon</h3>
                <p className="text-fontCream/80 text-lg leading-relaxed">
                  More prizes will be announced closer to the event.
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Past Winners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-fontCream text-center mb-12">
            🏆 Past Winners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastWinners.map((winner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-[var(--color-lightPurple)]/10 backdrop-blur-lg rounded-xl p-6 border border-[var(--color-lightPurple)]/20"
              >
                <div className="text-[var(--color-lightPink)] font-bold text-sm mb-2">{winner.year}</div>
                {winner.projectLink ? (
                  <a 
                    href={winner.projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-fontCream mb-2 hover:text-[var(--color-lightPink)] transition-colors duration-300 cursor-pointer"
                  >
                    {winner.project}
                  </a>
                ) : (
                  <h3 className="text-xl font-bold text-fontCream mb-2">{winner.project}</h3>
                )}
                <div className="text-[var(--color-lightPurple)] text-sm mb-3">by {winner.team}</div>
                <p className="text-fontCream/80 text-sm mb-4 leading-relaxed">{winner.description}</p>
                <div className="text-xs text-[var(--color-lightPink)] uppercase tracking-wide">
                  {winner.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[var(--color-lightPurple)]/20 to-[var(--color-lightPink)]/20 backdrop-blur-lg rounded-2xl p-8 sm:p-12 border border-[var(--color-lightPurple)]/30 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-fontCream mb-4">
              Ready to Win Big?
            </h3>
            <p className="text-fontCream/80 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ hackers competing for amazing prizes and the chance to showcase your skills to industry leaders!
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
  )
}

export default Prizes 