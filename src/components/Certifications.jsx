import React from 'react';
import { Award } from 'lucide-react';

const certificationsData = [
  {
    title: "Cypress Modern Web Automation Testing",
    issuer: "Udemy",
    date: "In Progress",
    description: "End-to-end testing with Cypress, JavaScript automation frameworks, Test automation best practices.",
    skills: ["Cypress", "JavaScript", "Automation Testing"],
  },
  {
    title: "API Testing Masterclass",
    issuer: "Postman",
    date: "In Progress",
    description: "RESTful API testing fundamentals, API automation with Postman, Test collection management.",
    skills: ["API Testing", "Postman", "Automation"],
  },
  {
    title: "Agile Software Testing",
    issuer: "LinkedIn Learning",
    date: "Completed",
    description: "Agile testing methodologies, Test planning and execution, Quality assurance best practices.",
    skills: ["Agile", "Testing", "Quality Assurance"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Certifications & Training</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md transition-colors hover:shadow-lg">
            <div className="flex items-center mb-4">
              <Award size={24} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{cert.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{cert.issuer} - {cert.date}</p>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  <span className="font-semibold">Description:</span> {cert.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
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