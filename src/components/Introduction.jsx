import React from 'react';
import { TestTube2, Mail, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Introduction({ profileImage }) {
  return (
    <section id="introduction" className="container mx-auto px-4 mt-16 py-12 flex flex-col items-center text-center relative">
      <div className="text-center mb-12">
        <blockquote className="text-xl italic text-slate-600 dark:text-slate-300 mb-6">
          "Working throughout the night to bring the best ideas to light."
        </blockquote>
      </div>
      <div className="w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-8 overflow-hidden">
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
        <a href="mailto:muhammadmuzamilhussain5@gmail.com" className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-full flex items-center gap-2 text-white">
          <Mail size={18} />
          Contact Me
        </a>
        <a href="https://www.linkedin.com/in/muhammadmuzamilhussain/" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-3 py-2 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
          <Linkedin size={18} />
          Linkedin
        </a>
        <a href="https://github.com/muzamilmemon1" target="_blank" rel="noopener noreferrer" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition px-3 py-2 rounded-full flex items-center gap-2 text-slate-800 dark:text-white">
          <Github size={18} />
          GitHub
        </a>
      </div>
    </section>
  );
}