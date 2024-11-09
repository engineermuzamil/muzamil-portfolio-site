import React from 'react';
import { Trophy, Star, CheckCircle } from 'lucide-react'; // Import icons as needed

const achievementsData = [
    {
        title: "Current / Recent Achievements",
        achievements: [
            "Got Internship of full stack developer at Devkind Melbourne, Australia due to my self-learning capability identified by the interviewer.",
            "Selected for a second apprenticeship in Product Owner role at Shispare, Karachi, as one of 22 out of 600 applicants.",
            "Currently working at Bank Alfalah as a SDET, hired through their techwiz trainee program where only 12 made it to the final.",
            "Cleared 5 rounds of JBS Grad Nest'24 program; CEO mentioned I was one of 67 candidates out of 3000.",
            "Cleared 1st round of interview for QA Internship at VentureDive but couldn't attend 2nd round due to sickness."
        ],
        icon: Trophy // Example icon
    },
    {
        title: "Past Achievements",
        achievements: [
            "Admitted to the software engineering program at NED University of Engineering & Technology, Karachi, with only 1 seat available for my division.",
            "Received Honorary Mention Award for presenting well at my first MUN attendance (OURMUN) in 2017.",
            "Awarded Best Library Reader during my 8th standard at IBA Public School Sukkur."
        ],
        icon: Star // Example icon
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">Achievements</h2>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    A summary of my professional and academic achievements that showcase my skills and dedication.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
                {achievementsData.map((section, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                        <div className="flex items-start gap-4">
                            {React.createElement(section.icon, { className: "text-blue-600 dark:text-blue-400 flex-shrink-0", size: 24 })}
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{section.title}</h3>
                                <ul className="space-y-1">
                                    {section.achievements.map((achievement, idx) => (
                                        <li key={idx} className="text-slate-600 dark:text-slate-300 text-sm">• {achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
