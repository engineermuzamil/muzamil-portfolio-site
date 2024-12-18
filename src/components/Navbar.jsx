import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon } from 'lucide-react';
import logoImage from '../assets/mypic.PNG';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`py-4 px-8 fixed top-0 w-full z-50 shadow-md transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}`}>
      <div className="flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <img src={logoImage} alt="Muzamil's Pic" className="h-8 w-8 rounded-full" />
          <span className="font-bold text-lg">Muzamil</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8">
            <NavLink label="Introduction" to="introduction" />
            <NavLink label="Experience" to="experience" />
            <NavLink label="Projects" to="projects" />
            <NavLink label="Education" to="education" />
            <NavLink label="Skills" to="skills" />
            <NavLink label="Achievements" to="achievements" />
            <NavLink label="Competencies" to="competencies" />
            <NavLink label="Certifications" to="certifications" />

          </ul>
        </div>

        {/* Theme Toggle Button in Desktop Menu */}
        <div className="hidden md:flex">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4">
          <NavLink label="Introduction" to="introduction" closeMenu={toggleMobileMenu} />
          <NavLink label="Experience" to="experience" closeMenu={toggleMobileMenu} />
          <NavLink label="Projects" to="projects" closeMenu={toggleMobileMenu} />
          <NavLink label="Education" to="education" closeMenu={toggleMobileMenu} />
          <NavLink label="Skills" to="skills" closeMenu={toggleMobileMenu} />
          <NavLink label="Certifications" to="certifications" closeMenu={toggleMobileMenu} />
          <NavLink label="Competencies" to="competencies" closeMenu={toggleMobileMenu} />
          <NavLink label="Achievements" to="achievements" closeMenu={toggleMobileMenu} />
          <NavLink label="Research Interests" to="research-interests" closeMenu={toggleMobileMenu} />
          <NavLink label="AI Tools" to="ai-tools" closeMenu={toggleMobileMenu} />
          <NavLink label="Contact" to="contact" closeMenu={toggleMobileMenu} />

          {/* Theme Toggle Button in Mobile Menu */}
          <div className="flex justify-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ label, to, closeMenu }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    offset={-70}
    className="block cursor-pointer hover:text-blue-500"
    activeClass="text-blue-500"
    spy={true}
    onClick={closeMenu}
  >
    {label}
  </Link>
);

export default Navbar;
