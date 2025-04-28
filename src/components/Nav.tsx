import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-fontCream text-xl font-bold">Hack the Heights</Link>
        <div className="space-x-4">
          <Link to="/" className="text-[var(--color-lightPurple)] hover:text-fontCream transition-colors">Home</Link>
          <Link to="/schedule" className="text-[var(--color-lightPurple)] hover:text-fontCream transition-colors">Schedule</Link>
          <Link to="/about" className="text-[var(--color-lightPurple)] hover:text-fontCream transition-colors">About</Link>
          <Link to="/sponsors" className="text-[var(--color-lightPurple)] hover:text-fontCream transition-colors">Sponsors</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 