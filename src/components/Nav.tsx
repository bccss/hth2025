import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Hack the Heights</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="/schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</Link>
          <Link to="/sponsors" className="text-gray-300 hover:text-white transition-colors">Sponsors</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 