import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import colors from '../styles/colors';

interface ScheduleCard {
  id: string;
  title: string;
  time: string;
  description: string;
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const cards: Record<'day1' | 'day2', ScheduleCard[]> = {
    day1: [
      {
        id: '1',
        title: 'Opening Ceremony',
        time: '9:00 AM',
        description: 'Welcome to Hack the Heights 2025! Kickoff with inspiring talks and team formation.',
      },
      {
        id: '2',
        title: 'Workshop: Web Development',
        time: '10:30 AM',
        description: 'Learn modern web development with React and Next.js. Perfect for beginners!',
      },
      {
        id: '3',
        title: 'Lunch Break',
        time: '12:00 PM',
        description: 'Enjoy a delicious meal and network with fellow hackers.',
      },
      {
        id: '4',
        title: 'Workshop: AI & ML',
        time: '1:30 PM',
        description: 'Introduction to machine learning and AI applications. Hands-on coding session.',
      },
      {
        id: '5',
        title: 'Mentor Office Hours',
        time: '3:00 PM',
        description: 'Get one-on-one help from industry experts and experienced developers.',
      },
    ],
    day2: [
      {
        id: '1',
        title: 'Breakfast & Coffee',
        time: '8:00 AM',
        description: 'Start your day with some energy and networking.',
      },
      {
        id: '2',
        title: 'Workshop: Mobile Development',
        time: '9:30 AM',
        description: 'Build your first mobile app using React Native. Bring your laptop!',
      },
      {
        id: '3',
        title: 'Lunch Break',
        time: '12:00 PM',
        description: 'Recharge with good food and great company.',
      },
      {
        id: '4',
        title: 'Project Submissions',
        time: '2:00 PM',
        description: 'Final touches and submission of your amazing projects.',
      },
      {
        id: '5',
        title: 'Closing Ceremony',
        time: '5:00 PM',
        description: 'Awards, prizes, and final remarks. See you next year!',
      },
    ],
  };

  // Card variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen bg-backgroundPurple py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-fontCream text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Schedule
        </motion.h2>
        
        {/* Day Switcher */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative bg-[var(--color-lightPurple)]/50 rounded-full p-1">
            <motion.div
              className="absolute h-full bg-[var(--color-lightPink)] rounded-full"
              initial={false}
              animate={{
                left: activeDay === 'day1' ? '0%' : '50%',
                width: '50%',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <button
              className={`relative px-6 py-2 rounded-full text-sm font-medium z-10 ${
                activeDay === 'day1' ? 'text-fontCream' : 'text-[var(--color-secondaryCream)]/70'
              }`}
              onClick={() => setActiveDay('day1')}
              aria-pressed={activeDay === 'day1'}
              aria-label="View Day 1 Schedule"
            >
              Day 1
            </button>
            <button
              className={`relative px-6 py-2 rounded-full text-sm font-medium z-10 ${
                activeDay === 'day2' ? 'text-fontCream' : 'text-[var(--color-secondaryCream)]/70'
              }`}
              onClick={() => setActiveDay('day2')}
              aria-pressed={activeDay === 'day2'}
              aria-label="View Day 2 Schedule"
            >
              Day 2
            </button>
          </div>
        </motion.div>

        {/* Schedule Cards */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
              className="space-y-3"
            >
              {cards[activeDay].map((card) => (
                <motion.div
                  key={card.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                  className="bg-[var(--color-lightPurple)]/20 backdrop-blur-lg rounded-xl p-4 sm:p-5 shadow-lg max-w-md mx-auto"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-fontCream">{card.title}</h3>
                      <p className="text-[var(--color-lightPink)] text-sm mt-1">{card.time}</p>
                    </div>
                  </div>
                  <p className="text-[var(--color-secondaryCream)]/80 text-sm mt-2">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
