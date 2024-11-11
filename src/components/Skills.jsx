import React from 'react';
import { Code2, Terminal, GitBranch, Database } from 'lucide-react';

const skillsData = [
  {
    category: "Testing & QA",
    skills: [
      { name: "Manual Testing", level: 90, tools: ["JIRA", "TestRail"] },
      { name: "Exploratory Testing", level: 85, tools: ["Postman"] },
      { name: "Test Case Design", level: 80, tools: ["TestLink"] },
      { name: "Bug Tracking", level: 90, tools: ["Bugzilla", "JIRA"] },
      { name: "Cross-browser Testing", level: 75, tools: ["BrowserStack"] },
    ],
  },
  {
    category: "Automation",
    skills: [
      { name: "Cypress", level: 85, tools: ["Cypress.io"] },
      { name: "JavaScript", level: 90, tools: ["Node.js", "React"] },
      { name: "UI Automation", level: 80, tools: ["Selenium"] },
      { name: "API Testing", level: 90, tools: ["Postman", "Swagger"] },
      { name: "Test Frameworks", level: 75, tools: ["Mocha", "Jest"] },
    ],
  },
  {
    category: "Others",
    skills: [
      { name: "SQL", level: 80, tools: ["MySQL", "PostgreSQL"] },
      { name: "RESTful APIs", level: 85, tools: ["Postman"] },
      { name: "Database Testing", level: 75, tools: ["SQL Server"] },
      { name: "Web Technologies", level: 90, tools: ["HTML", "CSS", "JavaScript"] },
    ],
  },
  {
    category: "Tools & Methods",
    skills: [
      { name: "Azure DevOps", level: 80, tools: ["Azure"] },
      { name: "Agile/Scrum", level: 90, tools: ["JIRA", "Trello"] },
      { name: "Git Version Control", level: 85, tools: ["GitHub", "GitLab"] },
      { name: "Documentation", level: 75, tools: ["Confluence"] },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors hover:shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">{category.category}</h3>
            {category.skills.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">{skill.name}</span>
                  <span className="text-slate-600 dark:text-slate-300">{skill.level}%</span>
                </div>
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded">
                  <div className="absolute h-2 bg-blue-500 dark:bg-blue-400" style={{ width: `${skill.level}%` }}></div>
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-semibold">Tools:</span> {skill.tools.join(", ")}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;