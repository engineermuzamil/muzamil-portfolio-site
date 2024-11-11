import React from 'react';
import nedUniversityLogo from '../../src/assets/ned.png'; // Update with actual logo path

const educationData = [
  {
    institution: "NED University of Engineering & Technology, Karachi",
    degree: "Bachelor of Engineering in Software Engineering",
    date: "2019 - 2023",
    logo: nedUniversityLogo,
    description: "Software Development, Testing, and Project Management.",
    honors: "GPA: 2.94/4.0"
  },
  // },
  // {
  //   institution: "High School Name",
  //   degree: "High School Diploma",
  //   date: "2015 - 2019",
  //   logo: highSchoolLogo,
  //   description: "Major in Computer Science with a minor in Mathematics.",
  //   honors: "Graduated with Honors",
  // },
];

const Education = () => {
  return (
    <section id="education" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors hover:shadow-lg relative">
            <div className="flex items-start gap-4">
              <img src={edu.logo} alt={`${edu.institution} logo`} className="w-12 h-12 flex-shrink-0" />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{edu.degree}</h3>
                <p className="text-blue-500 dark:text-blue-400">{edu.institution}</p>
                <p className="text-slate-600 dark:text-slate-300">{edu.date}</p>
                <p className="text-slate-600 dark:text-slate-300 mb-2 pt-2 ">Relevant Courses: </p>

                <p className="text-slate-600 dark:text-slate-300 pl-4 mb-2">{edu.description}</p>
                {edu.honors && <span className="bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300 px-2 py-1 rounded-full text-sm mt-2">{edu.honors}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;