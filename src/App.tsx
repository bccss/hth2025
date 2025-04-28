import Landing from "./components/Landing.tsx";
import Schedule from "./components/Schedule.tsx";
import About from "./components/About.tsx";
import Nav from "./components/Nav.tsx";
import Sponsors from "./components/Sponsors.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-backgroundPurple">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
