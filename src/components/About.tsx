import '../index.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function About() {
   const [openIndexes, setOpenIndexes] = useState<boolean[]>([false, false, false, false]);

   const faqs = [
      {
         question: "QUESTION?",
         answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
         question: "QUESTION?",
         answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
         question: "QUESTION?",
         answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
         question: "QUESTION?",
         answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
   ];

   const toggleAnswer = (index: number) => {
      setOpenIndexes(prev => {
         const newState = [...prev];
         newState[index] = !newState[index];
         return newState;
      });
   };

   return (
      <div className="min-h-screen bg-backgroundPurple py-12 px-4 sm:px-6">
         <div className="max-w-4xl mx-auto">
            <motion.div 
               className="flex flex-col items-center"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
            >
               <h1 className='text-4xl font-bold text-fontCream text-center my-4'>About</h1>
               <p className="text-center w-full md:w-4/5 lg:w-3/4 text-fontCream mx-auto">
                  Hack the Heights is Boston College's annual hackathon, where innovation meets community. Open to students of all skill levels and backgrounds, the event is a 24-hour coding sprint that brings together creative minds to build tech solutions, learn new skills, and collaborate on impactful projects. Hosted by the Computer Science Society, Hack the Heights fosters a welcoming environment for beginners and seasoned hackers alike, offering workshops, mentorship, prizes, and the chance to make something awesome.
               </p>
            </motion.div>
            
            <motion.div 
               className="flex flex-col items-center mt-12"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
            >
               <h1 className='text-4xl font-bold text-fontCream text-center mb-8'>FAQ</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full md:w-4/5 lg:w-full max-w-4xl mx-auto">
                  {faqs.map((faq, index) => (
                     <motion.div 
                        key={index} 
                        className="bg-[var(--color-lightPurple)]/20 rounded-lg p-4 cursor-pointer hover:bg-[var(--color-lightPurple)]/30 transition-colors shadow-md"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                     >
                        <div 
                           className="flex justify-between items-center"
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
                           <h3 className="text-xl font-semibold text-fontCream">{faq.question}</h3>
                           <motion.span 
                              className="text-fontCream text-2xl"
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
                                 <p className="text-fontCream mt-4 text-sm">
                                    {faq.answer}
                                 </p>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </div>
   )
}

export default About;