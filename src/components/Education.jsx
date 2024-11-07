import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
<<<<<<< HEAD
    <section id="education" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Education</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
          <div className="flex items-start gap-4">
            <GraduationCap className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Bachelor of Engineering in Software Engineering</h3>
                <span className="text-blue-600 dark:text-blue-400">2019 - 2023</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">NED University of Engineering & Technology • Karachi, Pakistan</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300 text-sm">
=======
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-slate-800/50 p-8 rounded-xl">
          <div className="flex items-start gap-4">
            <GraduationCap className="text-blue-400 flex-shrink-0" size={24} />
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-semibold">Bachelor of Engineering in Software Engineering</h3>
                <span className="text-blue-400">2019 - 2023</span>
              </div>
              <p className="text-slate-300">NED University of Engineering & Technology • Karachi, Pakistan</p>
              <ul className="mt-4 space-y-2 text-slate-300">
>>>>>>> b6f3ed2 (initial commit)
                <li>• Major: Software Engineering</li>
                <li>• Relevant Coursework: Software Testing, Web Development, Database Systems</li>
                <li>• GPA: 2.94/4.0</li>
              </ul>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
          <div className="flex items-start gap-4">
            <Award className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">High School Diploma</h3>
                <span className="text-blue-600 dark:text-blue-400">2015 - 2019</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">School Name • City, Country</p>
              <p className="mt-4 text-slate-600 dark:text-slate-300">Computer Science Major • Mathematics Minor</p>
=======
        {/* <div className="bg-slate-800/50 p-8 rounded-xl">
          <div className="flex items-start gap-4">
            <Award className="text-blue-400 flex-shrink-0" size={24} />
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-semibold">High School Diploma</h3>
                <span className="text-blue-400">2015 - 2019</span>
              </div>
              <p className="text-slate-300">School Name • City, Country</p>
              <p className="mt-4 text-slate-300">Computer Science Major • Mathematics Minor</p>
>>>>>>> b6f3ed2 (initial commit)
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}