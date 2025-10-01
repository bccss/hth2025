import '../index.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface SponsorshipTier {
  name: string;
  price: string;
  tier: 'bronze' | 'silver' | 'gold' | 'diamond';
  description: string;
  benefits: string[];
  featured?: boolean;
}

interface SponsorshipBenefit {
  icon: string;
  title: string;
  description: string;
}

function Sponsors() {
  const [selectedTier, setSelectedTier] = useState<'all' | 'bronze' | 'silver' | 'gold' | 'diamond'>('all');

  const sponsorTiers = {
    bronze: { name: 'Bronze', color: 'from-amber-600 to-amber-800', bgColor: 'from-amber-600/20 to-amber-800/20' },
    silver: { name: 'Silver', color: 'from-gray-400 to-gray-600', bgColor: 'from-gray-400/20 to-gray-600/20' },
    gold: { name: 'Gold', color: 'from-yellow-500 to-orange-500', bgColor: 'from-yellow-500/20 to-orange-500/20' },
    diamond: { name: 'Diamond', color: 'from-blue-400 to-purple-500', bgColor: 'from-blue-400/20 to-purple-500/20' }
  };

  const sponsorshipTierInfo: SponsorshipTier[] = [
    {
      name: "Bronze",
      price: "$250",
      tier: 'bronze',
      description: "Perfect for startups and smaller companies looking to support student innovation and get started with hackathon sponsorship.",
      benefits: [
        "Small logo placement",
        "Pre-event email",
        "Send-A-Rep"
      ]
    },
    {
      name: "Silver",
      price: "$500",
      tier: 'silver',
      description: "Ideal for growing companies wanting meaningful student engagement and recruiting opportunities.",
      benefits: [
        "Small logo placement",
        "Pre-event email",
        "Send-A-Rep",
        "Host affiliate workshop",
        "Post-hackathon recruiting email",
        "Table during lunch/dinner"
      ]
    },
    {
      name: "Gold",
      price: "$1,000",
      tier: 'gold',
      description: "Great for established companies seeking premium visibility and speaking opportunities at the event.",
      benefits: [
        "Small logo placement",
        "Pre-event email",
        "Send-A-Rep",
        "Host affiliate workshop",
        "Post-hackathon recruiting email",
        "Table during lunch/dinner",
        "Send-A-Rep to speak at Opening Ceremony"
      ]
    },
    {
      name: "Diamond",
      price: "$3,000",
      tier: 'diamond',
      description: "Premium sponsorship for companies wanting maximum impact, exclusivity, and comprehensive student access.",
      benefits: [
        "Small logo placement",
        "Pre-event email",
        "Send-A-Rep",
        "Host affiliate workshop",
        "Post-hackathon recruiting email",
        "Table during lunch/dinner",
        "Send-A-Rep to speak at Opening Ceremony",
        "Host your own competition",
        "Pre-Hackathon coffee chats",
        "Sponsor Lounge"
      ],
      featured: true
    }
  ];

  const benefits: SponsorshipBenefit[] = [
    {
      icon: '🌍',
      title: 'Social Impact Focus',
      description: 'Our hackathon, influenced by our Jesuit and Liberal arts background, targets social good. Participants solve real-world issues, aligning with themes like environmental sustainability and mental health.'
    },
    {
      icon: '🎓',
      title: 'Holistic Participant Development',
      description: 'Boston College promotes "cura personalis" — caring for the whole person. Our diverse students possess varied talents and degrees, offering your company multifaceted, creative thinkers.'
    },
    {
      icon: '🤝',
      title: 'Diversity Hub',
      description: 'We foster an inclusive environment; 25% of past attendees were underrepresented minorities. Partnering with us showcases your commitment to diversity and broadens your community appeal.'
    },
    {
      icon: '⚖️',
      title: 'Values-Driven Innovation',
      description: 'Boston College\'s hackathon embodies our values of social responsibility, growth, and diversity. Support students who are passionate about making a meaningful difference.'
    },
    {
      icon: '🧠',
      title: 'Liberal Arts Advantage',
      description: 'Our participants bring interdisciplinary perspectives from across Boston College\'s diverse academic programs, creating innovative solutions that transcend traditional technical boundaries.'
    },
    {
      icon: '💼',
      title: 'Strategic Partnership',
      description: 'Sponsoring our hackathon is a strategic and ethical choice that aligns with your organization\'s values while connecting you with the next generation of purpose-driven innovators.'
    }
  ];

  const allBenefits = [
    'Small logo placement',
    'Pre-event email',
    'Send-A-Rep',
    'Host affiliate workshop',
    'Post-hackathon recruiting email',
    'Table during lunch/dinner',
    'Send-A-Rep to speak at Opening Ceremony',
    'Host your own competition',
    'Pre-Hackathon coffee chats',
    'Sponsor Lounge'
  ];

  const filteredTiers = selectedTier === 'all' 
    ? sponsorshipTierInfo 
    : sponsorshipTierInfo.filter(tier => tier.tier === selectedTier);

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
    <section className="min-h-screen bg-backgroundPurple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[var(--color-lightPink)]/5 to-[var(--color-lightPurple)]/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[var(--color-lightPurple)]/5 to-[var(--color-lightPink)]/5 rounded-full blur-3xl"
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

      {/* Header */}
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-fontCream mb-6">
              Become a{' '}
              <span className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
                Sponsor
              </span>
            </h1>

            {/* Call to Action Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-[var(--color-lightPink)]/20 to-[var(--color-lightPurple)]/20 backdrop-blur-lg rounded-xl p-6 border border-[var(--color-lightPink)]/30 max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-2xl">🤝</span>
                <h3 className="text-xl font-bold text-fontCream">Join Us in Making a Difference</h3>
              </div>
              <p className="text-fontCream/90 leading-relaxed">
                Sponsoring our hackathon is a strategic and ethical choice for your organization. 
                Connect with purpose-driven students who are passionate about social impact and innovation.
              </p>
            </motion.div>
          </motion.div>

          {/* Tier Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { key: 'all', label: 'All Tiers' },
              { key: 'bronze', label: 'Bronze' },
              { key: 'silver', label: 'Silver' },
              { key: 'gold', label: 'Gold' },
              { key: 'diamond', label: 'Diamond' }
            ].map((tier) => (
              <button
                key={tier.key}
                onClick={() => setSelectedTier(tier.key as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTier === tier.key
                    ? 'bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream'
                    : 'bg-[var(--color-lightPurple)]/20 text-fontCream/70 hover:text-fontCream hover:bg-[var(--color-lightPurple)]/30'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </motion.div>

          {/* Sponsorship Tiers Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {filteredTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                variants={itemVariants}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${sponsorTiers[tier.tier].bgColor} backdrop-blur-lg rounded-xl p-6 border border-[var(--color-lightPurple)]/30 hover:border-[var(--color-lightPink)]/50 transition-all duration-300 relative overflow-hidden group ${
                  tier.featured ? 'ring-2 ring-[var(--color-lightPink)]/50' : ''
                }`}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                {tier.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[var(--color-lightPink)]/20 text-[var(--color-lightPink)] px-2 py-1 rounded-full text-xs font-medium">
                      ⭐ Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold text-transparent bg-gradient-to-r ${sponsorTiers[tier.tier].color} bg-clip-text mb-2`}>
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold text-fontCream mb-2">{tier.price}</div>
                  <p className="text-fontCream/80 text-sm leading-relaxed">{tier.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✅</span>
                      <span className="text-fontCream/80 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={`mailto:bccssociety@gmail.com?subject=HTH 2025 Sponsorship - ${tier.name} Tier`}
                  className={`w-full inline-block text-center bg-gradient-to-r ${sponsorTiers[tier.tier].color} text-fontCream px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choose {tier.name}
                </motion.a>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-lightPink)]/5 to-[var(--color-lightPurple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-fontCream mb-8 text-center">
              Benefits{' '}
              <span className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
                Comparison
              </span>
            </h2>
            
            <div className="bg-[var(--color-lightPurple)]/15 backdrop-blur-lg rounded-xl p-6 border border-[var(--color-lightPurple)]/30 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-lightPurple)]/30">
                    <th className="text-left py-3 px-4 text-fontCream font-semibold">Benefit</th>
                    <th className="text-center py-3 px-4 text-amber-400 font-semibold">Bronze<br/>$250</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">Silver<br/>$500</th>
                    <th className="text-center py-3 px-4 text-yellow-400 font-semibold">Gold<br/>$1,000</th>
                    <th className="text-center py-3 px-4 text-blue-400 font-semibold">Diamond<br/>$3,000</th>
                  </tr>
                </thead>
                <tbody>
                  {allBenefits.map((benefit, index) => (
                    <tr key={index} className="border-b border-[var(--color-lightPurple)]/20">
                      <td className="py-3 px-4 text-fontCream/80">{benefit}</td>
                      <td className="text-center py-3 px-4">
                        {index <= 2 ? <span className="text-green-400">✅</span> : <span className="text-gray-500">—</span>}
                      </td>
                      <td className="text-center py-3 px-4">
                        {index <= 5 ? <span className="text-green-400">✅</span> : <span className="text-gray-500">—</span>}
                      </td>
                      <td className="text-center py-3 px-4">
                        {index <= 6 ? <span className="text-green-400">✅</span> : <span className="text-gray-500">—</span>}
                      </td>
                      <td className="text-center py-3 px-4">
                        <span className="text-green-400">✅</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Sponsor HTH */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-fontCream mb-6">
              Why{' '}
              <span className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
                Sponsor HTH?
              </span>
            </h2>
            <p className="text-fontCream/80 text-lg max-w-3xl mx-auto">
              Sponsoring our hackathon is a strategic and ethical choice for your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-lightPurple)]/15 backdrop-blur-lg rounded-xl p-6 border border-[var(--color-lightPurple)]/30 hover:border-[var(--color-lightPink)]/50 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-fontCream mb-3">{benefit.title}</h3>
                <p className="text-fontCream/80 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership CTA */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
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
                Ready to Make a Difference?
              </h3>
              <p className="text-fontCream/80 text-lg mb-8 max-w-2xl mx-auto">
                Join us in empowering the next generation of socially-conscious innovators. 
                For more sponsorship info, contact us today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:bccssociety@gmail.com?subject=HTH 2025 Sponsorship Inquiry"
                  className="inline-block bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(224, 177, 203, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 transform -skew-x-20 transition-all duration-1000 ease-out group-hover:w-full"></span>
                  <span className="relative z-10">📧 bccssociety@gmail.com</span>
                </motion.a>

                <motion.a
                  href="https://instagram.com/bccssociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border-2 border-[var(--color-lightPurple)] text-fontCream px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-lightPurple)]/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📱 @bccssociety
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors;