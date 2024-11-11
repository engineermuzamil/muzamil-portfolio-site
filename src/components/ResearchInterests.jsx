import React from 'react';
import { Brain, Bot, Briefcase, Lightbulb } from 'lucide-react';

const researchInterestsData = [
  {
    title: "Advanced Research Focus",
    description: "Pursuing cutting-edge research in Computer Science, specializing in AI-driven solutions and next-generation automation technologies.",
    tags: ["Deep Learning", "Automation", "AI"],
    icon: <Brain className="text-blue-600 dark:text-blue-400" size={80} />,
  },
  {
    title: "AI & Automation Innovation",
    description: "Developing intelligent testing frameworks that leverage AI to revolutionize software quality assurance processes.",
    tags: ["AI Testing", "Automation", "Quality Assurance"],
    icon: <Bot className="text-blue-600 dark:text-blue-400" size={80} />,
  },
  {
    title: "Strategic Product Leadership",
    description: "Combining technical expertise with product strategy to create innovative solutions that address real-world challenges.",
    tags: ["Product Strategy", "Agile", "Leadership"],
    icon: <Briefcase className="text-blue-600 dark:text-blue-400" size={80} />,
  }
];

export default function ResearchInterests() {
  return (
    <section id="research-interests" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">Research & Professional Interests</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Actively exploring emerging technologies and methodologies to drive innovation in software development and product management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchInterestsData.map((interest, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-start gap-4 ">
              {interest.icon}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{interest.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{interest.description}</p>
                <div className="flex flex-wrap gap-2">
                  {interest.tags.map((tag, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 px-3 py-1 rounded-full text-sm">{tag}</span>
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
