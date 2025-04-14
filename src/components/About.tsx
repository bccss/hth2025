import '../index.css'

function About() {
   return (
      <>
         <div className="flex flex-col items-center">
            <h1 className='text-4xl font-bold text-white text-center my-4'>About</h1>
            {/** chatgpt cooked */}
            <p className="text-center w-1/3">
               Hack the Heights is Boston College's annual hackathon, where innovation meets community. Open to students of all skill levels and backgrounds, the event is a 24-hour coding sprint that brings together creative minds to build tech solutions, learn new skills, and collaborate on impactful projects. Hosted by the Computer Science Society, Hack the Heights fosters a welcoming environment for beginners and seasoned hackers alike, offering workshops, mentorship, prizes, and the chance to make something awesome.
            </p>
         </div>
         
         <div className="flex flex-col items-center">
            <h1 className='text-4xl font-bold text-white text-center my-4'>FAQ</h1>
            {/** todo: implement. will be done this week */}
         </div>
      </>
   )
}

export default About;