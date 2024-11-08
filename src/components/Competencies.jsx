import React from 'react';
import { Brain, Users, Clock, Search, HeartHandshake, Rocket, Wrench, ListTodo, Puzzle, PenTool } from 'lucide-react';

export default function Competencies() {
  const competencies = [
    { icon: <Puzzle size={24} />, title: 'Problem Solving', description: 'Strong analytical and problem-solving capabilities' },
    { icon: <Users size={24} />, title: 'Communication', description: 'Excellent verbal and written communication skills' },
    { icon: <Clock size={24} />, title: 'Work Under Pressure', description: 'Ability to maintain performance under tight deadlines' },
    { icon: <Search size={24} />, title: 'Attention to Detail', description: 'Meticulous approach to quality assurance' },
    { icon: <HeartHandshake size={24} />, title: 'Customer Focus', description: 'Strong customer service mindset' },
    { icon: <Rocket size={24} />, title: 'Action Oriented', description: 'Proactive approach to challenges' },
    { icon: <Wrench size={24} />, title: 'Technical Skills', description: 'Strong functional and technical capabilities' },
    { icon: <ListTodo size={24} />, title: 'Priority Setting', description: 'Effective task prioritization and management' },
    { icon: <Brain size={24} />, title: 'Problem Analysis', description: 'Thorough analytical thinking' },
    { icon: <PenTool size={24} />, title: 'Written Communication', description: 'Clear and effective documentation' }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 54a4e1c (fix: update id of every section)
    <section id="competencies" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Core Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {competencies.map((competency, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-4"
          >
            <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">
              {competency.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">{competency.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">{competency.description}</p>
=======
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Core Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {competencies.map((competency, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-start gap-4"
          >
            <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">
              {competency.icon}
            </div>
            <div>
<<<<<<< HEAD
              <h3 className="text-lg font-semibold mb-2">{competency.title}</h3>
              <p className="text-slate-300 text-sm">{competency.description}</p>
>>>>>>> b6f3ed2 (initial commit)
=======
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">{competency.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">{competency.description}</p>
>>>>>>> 451c72e (fix: light bg issues)
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}