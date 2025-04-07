import '../index.css'
import cat from '../assets/catcatcat.gif'
function Landing() {
  return (
    <>
      <div className="bg-backgroundPurple justify-between w-full min-h-screen flex flex-col items-center">
        {/*i could not figure out how to do this ngl this works tho*/}
        <div>
          <p> </p>
        </div>
        <div className="align-middle flex flex-col justify-between items-center">
          {/*placeholder*/}
          <img src={cat}></img>
          <h1 className="text-4xl md:text-6xl lg:text-8xl">Hack the Heights 2025</h1>
          <p className="text-lg md:text-xl lg:text-2xl">Notify me when more information comes out!</p>
          <form className="flex mt-4">
            <input type="email" placeholder="your email here" required className="bg-backgroundCream mx-5 px-2 text-fontPurple rounded-xl" />
            <button type="submit" className="bg-backgroundCream text-fontPurple mx-2 px-2 rounded-xl">send</button>
          </form>
        </div>
        <footer className="flex align-bottom justify-between w-full px-8 mb-4 text-sm md:text-base lg:text-lg">
          <p>bccss.co</p>
          <p>Interested in sponsoring us? Reach out to us bccss@gmail.com</p>
        </footer>
      </div>
    </>
  )
}

export default Landing
