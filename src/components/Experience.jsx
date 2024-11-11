import React from 'react';
import { Building2, Globe } from 'lucide-react';
import bankLogo from '../../src/assets/bank-alfalah.png';
import devkindLogo from '../../src/assets/devkind.jpg';

const experiences = [
  {
    title: "Software QA Engineer (SDET)",
    company: "Bank Alfalah",
    date: "Aug 2024 - Present",
    logo: bankLogo,
    description: "Performing comprehensive manual and exploratory testing of web applications.",
    skills: ["Cypress", "JavaScript", "API Testing", "SQL"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Devkind",
    date: "Sep 2023 - Dec 2023",
    logo: devkindLogo,
    description: "Developed and tested frontend components using JavaScript.",
    skills: ["VueJS", "ReactJS", "JavaScript", "UAT", "Agile"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Professional Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors hover:shadow-lg relative">
            <div className="flex items-start gap-4">
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-32 h-24 flex-shrink-0" />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{exp.title}</h3>
                <p className="text-blue-500 dark:text-blue-400">{exp.company}</p>
                <p className="text-slate-600 dark:text-slate-300">{exp.date}</p>
                <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}