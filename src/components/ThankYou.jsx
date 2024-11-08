import React from 'react';
import { Heart, Mail, Github, Linkedin } from 'lucide-react';

export default function ThankYou() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <section id="thank-you" className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <Heart className="text-red-500 dark:text-red-400 hover:fill-red-700 dark:hover:fill-red-400 transition-colors fill-red-500" size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Thank You for Visiting</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          I appreciate you taking the time to explore my portfolio. Let's connect and discuss potential collaborations or opportunities.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:contact@example.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
=======
    <section className="container mx-auto px-4 py-16 text-center">
=======
    <section id="thank-you" className="container mx-auto px-4 py-16 text-center">
>>>>>>> 54a4e1c (fix: update id of every section)
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <Heart className="text-red-500 dark:text-red-400 hover:fill-red-700 dark:hover:fill-red-400 transition-colors fill-red-500" size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Thank You for Visiting</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          I appreciate you taking the time to explore my portfolio. Let's connect and discuss potential collaborations or opportunities.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:contact@example.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
<<<<<<< HEAD
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
>>>>>>> b6f3ed2 (initial commit)
=======
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
>>>>>>> 451c72e (fix: light bg issues)
=======
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <Heart className="text-red-500 dark:text-red-400 hover:fill-red-500 dark:hover:fill-red-400 transition-colors" size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Thank You for Visiting</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          I appreciate you taking the time to explore my portfolio. Let's connect and discuss potential collaborations or opportunities.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:contact@example.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
<<<<<<< HEAD
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
>>>>>>> b6f3ed2 (initial commit)
=======
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
>>>>>>> 451c72e (fix: light bg issues)
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}