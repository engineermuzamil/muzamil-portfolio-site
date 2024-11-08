import React from 'react';
import { TestTube2, Mail, Github, Linkedin } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export default function Introduction({ profileImage }) {
  return (
    <section 
      id="introduction" 
      className="w-full max-w-screen-md px-4 mt-16 py-16 flex flex-col items-center text-center relative mx-auto"
    >
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6cf278c (wip: add navbar but fix it)
import { useTheme } from '../context/ThemeContext';

export default function Introduction({ profileImage }) {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col items-center text-center relative">
<<<<<<< HEAD
>>>>>>> 6cf278c (wip: add navbar but fix it)
=======

export default function Introduction({ profileImage }) {
  return (
<<<<<<< HEAD
    <section className="container mx-auto px-4 mt-16 py-16 flex flex-col items-center text-center relative">
>>>>>>> 7435920 (wip: fix navbar but still needs sections order to be fixed and mobile menu)
=======
    <section id="introduction" className="container mx-auto px-4 mt-16 py-16 flex flex-col items-center text-center relative">
>>>>>>> 54a4e1c (fix: update id of every section)
<<<<<<< HEAD
=======
>>>>>>> 976b262 (fix: icons sizes in intro section and responsiveness)
=======
>>>>>>> 6cf278c (wip: add navbar but fix it)
=======

export default function Introduction({ profileImage }) {
  return (
<<<<<<< HEAD
    <section className="container mx-auto px-4 mt-16 py-16 flex flex-col items-center text-center relative">
>>>>>>> 7435920 (wip: fix navbar but still needs sections order to be fixed and mobile menu)
=======
    <section id="introduction" className="container mx-auto px-4 mt-16 py-16 flex flex-col items-center text-center relative">
>>>>>>> 54a4e1c (fix: update id of every section)
=======
>>>>>>> 976b262 (fix: icons sizes in intro section and responsiveness)
=======
>>>>>>> 0b99632 (fix: update id of every section)
      <div className="w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-8 overflow-hidden">
        {profileImage ? (
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <TestTube2 size={48} className="text-blue-500 dark:text-blue-400" />
        )}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">Muhammad Muzamil Hussain</h1>
      <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-6">Software Development Engineer in Test (SDET)</h2>
      <p className="max-w-2xl text-slate-600 dark:text-slate-300 mb-8">
        Detail-oriented SDET with a strong focus on both manual and automated testing. 
        Experienced in JavaScript with a growing expertise in Cypress and API testing. 
        Passionate about ensuring software quality through comprehensive testing strategies 
        and user-centric approach.
      </p>
      <div className="flex gap-4 mb-8">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d70ea79 (fix: bring back toggle button)
        <a href="mailto:muhammadmuzamilhussain5@gmail.com" className="bg-blue-500 hover:bg-blue-600 transition px-6 py-1  rounded-full flex items-center gap-2 text-white">
          <Mail size={18} />
          Contact Me
        </a>
        <a href="https://www.linkedin.com/in/muhammadmuzamilhussain/" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-3 py-1 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
          <Linkedin size={18} />
          Linkedin
        </a>
        <a href="https://github.com/muzamilmemon1" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-3 py-1 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
=======
        <a href="mailto:muhammadmuzamilhussain5@gmail.com" className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-full flex items-center gap-2 text-white">
=======
        <a href="mailto:muhammadmuzamilhussain5@gmail.com" className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-full flex items-center gap-2 text-white">
>>>>>>> 45b1baa (fix: bring back toggle button)
<<<<<<< HEAD
=======
        <a href="mailto:muhammadmuzamilhussain5@gmail.com" className="bg-blue-500 hover:bg-blue-600 transition px-6 py-1  rounded-full flex items-center gap-2 text-white">
>>>>>>> 976b262 (fix: icons sizes in intro section and responsiveness)
          <Mail size={18} />
          Contact Me
        </a>
        <a href="https://www.linkedin.com/in/muhammadmuzamilhussain/" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-3 py-1 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
=======
          <Mail size={18} />
          Contact Me
        </a>
        <a href="https://www.linkedin.com/in/muhammadmuzamilhussain/" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-4 py-2 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
>>>>>>> d70ea79 (fix: bring back toggle button)
          <Linkedin size={18} />
          Linkedin
        </a>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d70ea79 (fix: bring back toggle button)
        <a href="https://github.com/muzamilmemon1" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-6 py-2 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
>>>>>>> 6cf278c (wip: add navbar but fix it)
=======
        <a href="https://github.com/muzamilmemon1" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-4 py-2 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
>>>>>>> 45b1baa (fix: bring back toggle button)
<<<<<<< HEAD
=======
        <a href="https://github.com/muzamilmemon1" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-3 py-1 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
>>>>>>> 976b262 (fix: icons sizes in intro section and responsiveness)
=======
        <a href="mailto:muhammadmuzamilhussain5@gmail.com" className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-full flex items-center gap-2 text-white">
=======
        <a href="mailto:muhammadmuzamilhussain5@gmail.com" className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-full flex items-center gap-2 text-white">
>>>>>>> 45b1baa (fix: bring back toggle button)
=======
        <a href="mailto:muhammadmuzamilhussain5@gmail.com" className="bg-blue-500 hover:bg-blue-600 transition px-6 py-1  rounded-full flex items-center gap-2 text-white">
>>>>>>> 976b262 (fix: icons sizes in intro section and responsiveness)
          <Mail size={18} />
          Contact Me
        </a>
        <a href="https://www.linkedin.com/in/muhammadmuzamilhussain/" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-3 py-1 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
          <Linkedin size={18} />
          Linkedin
        </a>
<<<<<<< HEAD
<<<<<<< HEAD
        <a href="https://github.com/muzamilmemon1" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-6 py-2 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
>>>>>>> 6cf278c (wip: add navbar but fix it)
=======
        <a href="https://github.com/muzamilmemon1" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-4 py-2 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
>>>>>>> 45b1baa (fix: bring back toggle button)
=======
        <a href="https://github.com/muzamilmemon1" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-3 py-1 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
>>>>>>> 976b262 (fix: icons sizes in intro section and responsiveness)
=======
>>>>>>> d70ea79 (fix: bring back toggle button)
          <Github size={18} />
          GitHub
        </a>
      </div>
    </section>
  );
}