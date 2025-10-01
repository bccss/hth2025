import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScheduleEvent {
  id: string;
  title: string;
  time: string;
  endTime?: string;
  description: string;
  location?: string;
  type: 'ceremony' | 'workshop' | 'meal' | 'networking' | 'coding' | 'presentation' | 'judging';
  icon: string;
  speaker?: string;
  capacity?: number;
  isRequired?: boolean;
  tags?: string[];
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const eventTypeColors = {
    ceremony: 'from-[var(--color-lightPink)] to-[var(--color-lightPurple)]',
    workshop: 'from-blue-400 to-blue-600',
    meal: 'from-green-400 to-green-600',
    networking: 'from-purple-400 to-purple-600',
    coding: 'from-orange-400 to-orange-600',
    presentation: 'from-red-400 to-red-600',
    judging: 'from-yellow-400 to-yellow-600'
  };

  const events: Record<'day1' | 'day2', ScheduleEvent[]> = {
    day1: [
      {
        id: '1',
        title: 'Registration & Check-in',
        time: '11:30AM - 12:00PM',
        description: 'Full schedule to be announced on day of event. Stay tuned for detailed timing and locations!',
        type: 'ceremony',
        icon: '🎯',
        isRequired: true,
        tags: ['Registration', 'Welcome']
      },
      {
        id: '2',
        title: 'Opening Ceremony',
        time: '12:00PM - 12:30PM',
        description: 'Full schedule to be announced on day of event. Get ready for an inspiring kickoff!',
        type: 'ceremony',
        icon: '🚀',
        isRequired: true,
        tags: ['Keynote', 'Opening']
      },
      {
        id: '3',
        title: 'Hacking Begins!',
        time: '12:30PM',
        description: 'Full schedule to be announced on day of event. The 24-hour coding marathon starts here!',
        type: 'coding',
        icon: '💻',
        isRequired: true,
        tags: ['Coding', 'Development']
      },
      {
        id: '4',
        title: 'Team Formation',
        time: '12:30 PM - 1:00 PM',
        description: 'Full schedule to be announced on day of event. Perfect opportunity to find your dream team!',
        type: 'networking',
        icon: '🤝',
        tags: ['Team Building', 'Networking']
      },
      {
        id: '5',
        title: 'Lunchtime!',
        time: '1:00 PM - 2:00 PM',
        description: 'Full schedule to be announced on day of event. Perfect opportunity to find your dream team!',
        type: 'networking',
        icon: '🤝',
        tags: ['Food']
      },
      {
        id: '6',
        title: 'Beginner Coding Workshop',
        time: '2:00PM-3:00PM',
        description: 'Full schedule to be announced on day of event. Amazing workshops and delicious food await!',
        type: 'workshop',
        icon: '📚',
        tags: ['Learning']
      },
      {
        id: '7',
        title: 'Speaker Event',
        time: '4:00PM-5:00PM',
        description: 'Full schedule to be announced on day of event. Get guidance from industry experts!',
        type: 'networking',
        icon: '🧠',
        tags: ['Speaker', 'Help']
      },
      {
        id: '8',
        title: 'Dinner',
        time: '7:00PM-8:00PM',
        description: 'Full schedule to be announced on day of event. Learn about exciting career opportunities!',
        type: 'presentation',
        icon: '🏢',
        tags: ['Food']
      },
      {
        id: '9',
        title: 'Game Night',
        time: '8:00PM-9:00PM',
        description: 'CS students have fun too. Join for some games!',
        type: 'activities',
        icon: '🌙',
        tags: ['Activities']
      }
    ],
    day2: [
      {
        id: '9',
        title: 'Morning Kickoff & Breakfast',
        time: '10:00AM-11:00AM',
        description: 'Full schedule to be announced on day of event. Start your final day strong!',
        type: 'meal',
        icon: '☕',
        tags: ['Breakfast']
      },
      {
        id: '10',
        title: 'Hacking Ends!',
        time: '12:30PM',
        description: 'Full schedule to be announced on day of event. Last-minute tips and final development push!',
        type: 'workshop',
        icon: '⚡',
        tags: ['Final Sprint', 'Workshops']
      },
      {
        id: '11',
        title: 'Project Finalization',
        time: 'TBA',
        description: 'Full schedule to be announced on day of event. Put the finishing touches on your projects!',
        type: 'coding',
        icon: '🔧',
        tags: ['Finalization', 'Polish']
      },
      {
        id: '12',
        title: 'Project Demos',
        time: '12:45PM - 1:30PM',
        description: 'Full schedule to be announced on day of event. Submit your amazing creations!',
        type: 'presentation',
        icon: '📤',
        isRequired: true,
        tags: ['Submission', 'Deadline']
      },
      {
        id: '14',
        title: 'Judging & Deliberation',
        time: '1:30PM - 2:15PM',
        description: 'Full schedule to be announced on day of event. While judges deliberate, relax and network!',
        type: 'judging',
        icon: '⚖️',
        tags: ['Judging', 'Networking']
      },
      {
        id: '15',
        title: 'Awards Ceremony',
        time: '2:30PM',
        description: 'Full schedule to be announced on day of event. Celebrate winners and wrap up an amazing hackathon!',
        type: 'ceremony',
        icon: '🏆',
        isRequired: true,
        tags: ['Awards', 'Celebration']
      }
    ]
  };

  const getEventTypeLabel = (type: string) => {
    const labels = {
      ceremony: 'Ceremony',
      workshop: 'Workshop',
      meal: 'Food & Drink',
      networking: 'Networking',
      coding: 'Coding Time',
      presentation: 'Presentation',
      judging: 'Judging'
    };
    return labels[type as keyof typeof labels] || type;
  };

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
    <section className="min-h-screen bg-backgroundPurple py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-fontCream mb-6">
            Event{' '}
            <span className="bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] bg-clip-text text-transparent">
              Schedule
            </span>
          </h1>
          {/* <p className="text-lg sm:text-xl text-fontCream/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Get ready for an action-packed 24 hours of innovation, learning, and collaboration. 
            Detailed schedule and timing will be announced on the day of the event!
          </p> */}
          
          {/* Announcement Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-[var(--color-lightPink)]/20 to-[var(--color-lightPurple)]/20 backdrop-blur-lg rounded-xl p-6 border border-[var(--color-lightPink)]/30 max-w-2xl mx-auto"
          >
            <p className="text-fontCream/90 leading-relaxed">
              The complete event schedule with specific times, locations, and details will be shared with all 
              registered participants on the day of the event. Stay tuned for updates!
            </p>
          </motion.div>
        </motion.div>

        {/* Day Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[var(--color-lightPurple)]/20 backdrop-blur-lg rounded-xl p-2 border border-[var(--color-lightPurple)]/30">
            {[
              { key: 'day1', label: 'Day 1', date: 'Fall XX' },
              { key: 'day2', label: 'Day 2', date: 'Fall XX' }
            ].map((day) => (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key as 'day1' | 'day2')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDay === day.key
                    ? 'bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream'
                    : 'text-[var(--color-lightPurple)] hover:text-fontCream hover:bg-[var(--color-lightPurple)]/20'
                }`}
              >
                <div className="text-base font-bold">{day.label}</div>
                <div className="text-sm opacity-80">{day.date}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Schedule Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeDay}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-lightPink)] to-[var(--color-lightPurple)] opacity-30"></div>

          <div className="space-y-8">
            {events[activeDay].map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="relative flex items-start gap-6"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${eventTypeColors[event.type]} flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {event.icon}
                  </div>
                  {event.isRequired && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  )}
                </div>

                {/* Event Card */}
                <motion.div
                  className={`flex-1 bg-[var(--color-lightPurple)]/15 backdrop-blur-lg rounded-xl p-6 border border-[var(--color-lightPurple)]/30 hover:border-[var(--color-lightPink)]/50 transition-all duration-300 cursor-pointer ${
                    selectedEvent === event.id ? 'ring-2 ring-[var(--color-lightPink)]/50' : ''
                  }`}
                  onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-fontCream mb-2">{event.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="bg-[var(--color-lightPink)]/20 text-[var(--color-lightPink)] px-3 py-1 rounded-full font-medium">
                          {event.time}
                        </span>
                        <span className="bg-[var(--color-lightPurple)]/20 text-[var(--color-lightPurple)] px-3 py-1 rounded-full font-medium">
                          {getEventTypeLabel(event.type)}
                        </span>
                        {event.isRequired && (
                          <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full font-medium">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-fontCream/80 leading-relaxed mb-4">{event.description}</p>

                  {event.tags && (
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs bg-[var(--color-lightPurple)]/10 text-[var(--color-lightPurple)] px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Expand indicator */}
                  <div className="flex justify-center mt-4">
                    <motion.div
                      animate={{ rotate: selectedEvent === event.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[var(--color-lightPink)]"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {selectedEvent === event.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-[var(--color-lightPurple)]/20 pt-4 mt-4"
                      >
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 bg-[var(--color-lightPink)]/10 text-[var(--color-lightPink)] px-4 py-2 rounded-lg">
                            <span className="text-lg">ℹ️</span>
                            <span className="font-medium">More details coming soon!</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[var(--color-lightPurple)]/20 to-[var(--color-lightPink)]/20 backdrop-blur-lg rounded-2xl p-8 sm:p-12 border border-[var(--color-lightPurple)]/30">
            <h3 className="text-2xl sm:text-3xl font-bold text-fontCream mb-4">
              Ready to Join the Fun?
            </h3>
            <p className="text-fontCream/80 text-lg mb-8 max-w-2xl mx-auto">
              Don't miss out on this incredible experience! Register now to secure your spot 
              and get notified when the detailed schedule is released.
            </p>
            <motion.a
              href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[var(--color-lightPink)] to-[var(--color-lightPurple)] text-fontCream px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(224, 177, 203, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 transform -skew-x-20 transition-all duration-1000 ease-out group-hover:w-full"></span>
              <span className="relative z-10">🚀 Register for HTH 2025</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
