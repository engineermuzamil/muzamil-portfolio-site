<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const logoImage = "https://gitlab.com/engineermuzamil/barebone-system/-/raw/master/src/assets/mypic.PNG?ref_type=heads";

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Apply the initial theme based on the system or saved preference
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
        <div className="hidden md:flex space-x-8">
          <NavLink label="Introduction" to="introduction" />
          <NavLink label="Projects" to="projects" />
          <NavLink label="Certifications" to="certifications" />
          <NavLink label="AI Tools" to="ai-tools" />
          <NavLink label="Competencies" to="competencies" />
          <NavLink label="Education" to="education" />
          <NavLink label="Experience" to="experience" />
          <NavLink label="Research Interests" to="research-interests" />
          <NavLink label="Skills" to="skills" />
          <NavLink label="Contact" to="contact" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Theme Toggle Icon */}
        <div className="hidden md:flex items-center ml-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className={`md:hidden mt-4 space-y-4 transition-colors ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}`}>
          <NavLink label="Introduction" to="introduction" closeMenu={toggleMobileMenu} />
          <NavLink label="Projects" to="projects" closeMenu={toggleMobileMenu} />
          <NavLink label="Certifications" to="certifications" closeMenu={toggleMobileMenu} />
          <NavLink label="AI Tools" to="ai-tools" closeMenu={toggleMobileMenu} />
          <NavLink label="Competencies" to="competencies" closeMenu={toggleMobileMenu} />
          <NavLink label="Education" to="education" closeMenu={toggleMobileMenu} />
          <NavLink label="Experience" to="experience" closeMenu={toggleMobileMenu} />
          <NavLink label="Research Interests" to="research-interests" closeMenu={toggleMobileMenu} />
          <NavLink label="Skills" to="skills" closeMenu={toggleMobileMenu} />
          <NavLink label="Contact" to="contact" closeMenu={toggleMobileMenu} />
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
=======
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const profileImage = "https://gitlab.com/engineermuzamil/barebone-system/-/raw/master/src/assets/mypic.PNG?ref_type=heads";
  
  // Toggle mobile menu visibility
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="#introduction" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={profileImage} alt="Muzamil " className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Your Logo</span>
        </a>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          onClick={handleMobileMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Menu items */}
        <div className={`hidden w-full md:block md:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li><a href="#introduction" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Introduction</a></li>
            <li><a href="#projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a></li>
            <li><a href="#certifications" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Certifications</a></li>
            <li><a href="#aitools" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AI Tools</a></li>
            <li><a href="#competencies" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Competencies</a></li>
            <li><a href="#education" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Education</a></li>
            <li><a href="#experience" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experience</a></li>
            <li><a href="#researchinterests" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Research Interests</a></li>
            <li><a href="#skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a></li>
            <li><a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a></li>
            <li><a href="#thankyou" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Thank You</a></li>
          </ul>
        </div>
      </div>
      
      {/* Theme Toggle Icon */}
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
>>>>>>> 6cf278c (wip: add navbar but fix it)
