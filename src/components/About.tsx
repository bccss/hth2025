import '../index.css'
import { useState } from 'react'

function About() {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <>
         <div className="flex flex-col items-center">
            <h1 className='text-4xl font-bold text-white text-center my-4'>About</h1>
            {/** chatgpt cooked */}
            <p className="text-center w-3/5">
               Hack the Heights is Boston College's annual hackathon, where innovation meets community. Open to students of all skill levels and backgrounds, the event is a 24-hour coding sprint that brings together creative minds to build tech solutions, learn new skills, and collaborate on impactful projects. Hosted by the Computer Science Society, Hack the Heights fosters a welcoming environment for beginners and seasoned hackers alike, offering workshops, mentorship, prizes, and the chance to make something awesome.
            </p>
         </div>
         
         <div className="flex flex-col items-center mt-8">
            <h1 className='text-4xl font-bold text-white text-center my-4'>FAQ</h1>
            <div className="grid grid-cols-2 gap-8 w-3/5">
               {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-colors">
                     <div 
                        className="flex justify-between items-center"
                        onClick={() => toggleAnswer(index)}
                     >
                        <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                        <span className="text-white text-2xl">
                           {openIndex === index ? '−' : '+'}
                        </span>
                     </div>
                     {openIndex === index && (
                        <p className="text-white mt-4 text-sm">
                           {faq.answer}
                        </p>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </>
   )
}

export default About;