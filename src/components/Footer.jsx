import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* <div className="flex gap-6 mb-4">
          <a href="https://www.linkedin.com/in/muhammadmuzamilhussain/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/muzamilmemon1" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
            <Github size={24} />
          </a>
          <a href="mailto:muhammadmuzamilhussain5@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
            <Mail size={24} />
          </a>
        </div> */}
        <p className="text-slate-600 dark:text-slate-400">© 2024 Muhammad Muzamil Hussain. All rights reserved.</p>
      </div>
    </footer>
  );
}