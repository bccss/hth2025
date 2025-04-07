import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Schedule</h2>
        
        {/* Day Switcher */}
        <div className="flex justify-center mb-8">
          <div className="relative bg-gray-700 rounded-full p-1">
            <motion.div
              className="absolute h-full bg-blue-500 rounded-full"
              initial={false}
              animate={{
                left: activeDay === 'day1' ? '0%' : '50%',
                width: '50%',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <button
              className={`relative px-6 py-2 rounded-full text-sm font-medium z-10 ${
                activeDay === 'day1' ? 'text-white' : 'text-gray-300'
              }`}
              onClick={() => setActiveDay('day1')}
            >
              Day 1
            </button>
            <button
              className={`relative px-6 py-2 rounded-full text-sm font-medium z-10 ${
                activeDay === 'day2' ? 'text-white' : 'text-gray-300'
              }`}
              onClick={() => setActiveDay('day2')}
            >
              Day 2
            </button>
          </div>
        </div>

        {/* Schedule Cards */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            {cards[activeDay].map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg max-w-md mx-auto"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="text-blue-400 text-sm mt-1">{card.time}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-2">{card.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
