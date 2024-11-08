<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
>>>>>>> 7435920 (wip: fix navbar but still needs sections order to be fixed and mobile menu)

// const Navbar = () => {

//   const logoImage = "https://gitlab.com/engineermuzamil/barebone-system/-/raw/master/src/assets/mypic.PNG?ref_type=heads";


//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-slate-800 text-white py-4 px-8 fixed top-0 w-full z-50 shadow-md">
//       <div className="flex items-center justify-between">
//         {/* Logo and Name */}
//         <div className="flex items-center space-x-3">
//           <img src={logoImage} alt="Muzamil's Pic" className="h-8 w-8 rounded-full" />
//           <span className="font-bold text-lg">Muzamil</span>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-8"> {/* Increased space between links */}
//           <NavLink label="Introduction" to="introduction" />
//           <NavLink label="Projects" to="projects" />
//           <NavLink label="Certifications" to="certifications" />
//           <NavLink label="AI Tools" to="ai-tools" />
//           <NavLink label="Competencies" to="competencies" />
//           <NavLink label="Education" to="education" />
//           <NavLink label="Experience" to="experience" />
//           <NavLink label="Research Interests" to="research-interests" />
//           <NavLink label="Skills" to="skills" />
//           <NavLink label="Contact" to="contact" />
//           <NavLink label="Thank You" to="thank-you" />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMobileMenu} className="focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Links */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden mt-4 space-y-4">
//           <NavLink label="Introduction" to="introduction" closeMenu={toggleMobileMenu} />
//           <NavLink label="Projects" to="projects" closeMenu={toggleMobileMenu} />
//           <NavLink label="Certifications" to="certifications" closeMenu={toggleMobileMenu} />
//           <NavLink label="AI Tools" to="ai-tools" closeMenu={toggleMobileMenu} />
//           <NavLink label="Competencies" to="competencies" closeMenu={toggleMobileMenu} />
//           <NavLink label="Education" to="education" closeMenu={toggleMobileMenu} />
//           <NavLink label="Experience" to="experience" closeMenu={toggleMobileMenu} />
//           <NavLink label="Research Interests" to="research-interests" closeMenu={toggleMobileMenu} />
//           <NavLink label="Skills" to="skills" closeMenu={toggleMobileMenu} />
//           <NavLink label="Contact" to="contact" closeMenu={toggleMobileMenu} />
//           <NavLink label="Thank You" to="thank-you" closeMenu={toggleMobileMenu} />
//         </div>
//       )}
//     </nav>
//   );
// };

// // Reusable NavLink Component
// const NavLink = ({ label, to, closeMenu }) => (
//   <Link
//     to={to}
//     smooth={true}
//     duration={500}
//     offset={-70} // Adjust offset based on header height
//     className="block cursor-pointer hover:text-blue-500"
//     activeClass="text-blue-500"
//     spy={true}
//     onClick={closeMenu} // Close menu on click in mobile view
//   >
//     {label}
//   </Link>
// );

// export default Navbar;

=======
>>>>>>> 54a4e1c (fix: update id of every section)
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 45b1baa (fix: bring back toggle button)
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
<<<<<<< HEAD
}
>>>>>>> 6cf278c (wip: add navbar but fix it)
=======
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
>>>>>>> 7435920 (wip: fix navbar but still needs sections order to be fixed and mobile menu)
=======
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
=======
// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
>>>>>>> 7435920 (wip: fix navbar but still needs sections order to be fixed and mobile menu)

// const Navbar = () => {

//   const logoImage = "https://gitlab.com/engineermuzamil/barebone-system/-/raw/master/src/assets/mypic.PNG?ref_type=heads";


//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-slate-800 text-white py-4 px-8 fixed top-0 w-full z-50 shadow-md">
//       <div className="flex items-center justify-between">
//         {/* Logo and Name */}
//         <div className="flex items-center space-x-3">
//           <img src={logoImage} alt="Muzamil's Pic" className="h-8 w-8 rounded-full" />
//           <span className="font-bold text-lg">Muzamil</span>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-8"> {/* Increased space between links */}
//           <NavLink label="Introduction" to="introduction" />
//           <NavLink label="Projects" to="projects" />
//           <NavLink label="Certifications" to="certifications" />
//           <NavLink label="AI Tools" to="ai-tools" />
//           <NavLink label="Competencies" to="competencies" />
//           <NavLink label="Education" to="education" />
//           <NavLink label="Experience" to="experience" />
//           <NavLink label="Research Interests" to="research-interests" />
//           <NavLink label="Skills" to="skills" />
//           <NavLink label="Contact" to="contact" />
//           <NavLink label="Thank You" to="thank-you" />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMobileMenu} className="focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Links */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden mt-4 space-y-4">
//           <NavLink label="Introduction" to="introduction" closeMenu={toggleMobileMenu} />
//           <NavLink label="Projects" to="projects" closeMenu={toggleMobileMenu} />
//           <NavLink label="Certifications" to="certifications" closeMenu={toggleMobileMenu} />
//           <NavLink label="AI Tools" to="ai-tools" closeMenu={toggleMobileMenu} />
//           <NavLink label="Competencies" to="competencies" closeMenu={toggleMobileMenu} />
//           <NavLink label="Education" to="education" closeMenu={toggleMobileMenu} />
//           <NavLink label="Experience" to="experience" closeMenu={toggleMobileMenu} />
//           <NavLink label="Research Interests" to="research-interests" closeMenu={toggleMobileMenu} />
//           <NavLink label="Skills" to="skills" closeMenu={toggleMobileMenu} />
//           <NavLink label="Contact" to="contact" closeMenu={toggleMobileMenu} />
//           <NavLink label="Thank You" to="thank-you" closeMenu={toggleMobileMenu} />
//         </div>
//       )}
//     </nav>
//   );
// };

// // Reusable NavLink Component
// const NavLink = ({ label, to, closeMenu }) => (
//   <Link
//     to={to}
//     smooth={true}
//     duration={500}
//     offset={-70} // Adjust offset based on header height
//     className="block cursor-pointer hover:text-blue-500"
//     activeClass="text-blue-500"
//     spy={true}
//     onClick={closeMenu} // Close menu on click in mobile view
//   >
//     {label}
//   </Link>
// );

// export default Navbar;

=======
>>>>>>> 54a4e1c (fix: update id of every section)
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 45b1baa (fix: bring back toggle button)
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
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="md:hidden mt-4 flex flex-col bg-slate-800 space-y-4 p-4 rounded-lg">
=======
        <div className="md:hidden mt-4 space-y-4">
>>>>>>> 54a4e1c (fix: update id of every section)
=======
        <div className={`md:hidden mt-4 space-y-4 transition-colors ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}`}>
>>>>>>> 45b1baa (fix: bring back toggle button)
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
<<<<<<< HEAD
<<<<<<< HEAD
          <NavLink label="Thank You" to="thank-you" closeMenu={toggleMobileMenu} />
=======
          {/* <NavLink label="Thank You" to="thank-you" closeMenu={toggleMobileMenu} /> */}
>>>>>>> 54a4e1c (fix: update id of every section)
=======
>>>>>>> 45b1baa (fix: bring back toggle button)
        </div>
      )}
    </nav>
  );
<<<<<<< HEAD
}
>>>>>>> 6cf278c (wip: add navbar but fix it)
=======
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
>>>>>>> 7435920 (wip: fix navbar but still needs sections order to be fixed and mobile menu)
