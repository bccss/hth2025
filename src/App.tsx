import Landing from "./components/Landing.tsx";
import Schedule from "./components/Schedule.tsx";
import Nav from "./components/Nav.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
