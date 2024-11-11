import React from 'react';
import { Trophy, Star } from 'lucide-react'; // Import icons as needed

// Define your achievements data
const achievementsData = [
    {
        title: "Current / Recent Achievements",
        achievements: [
            {
                text: "Secured a full-stack developer internship with Devkind in Melbourne, Australia, for my self-learning skills.",
                icon: Trophy
            },
            {
                text: "Chosen for an apprenticeship as a Product Owner at Shispare, Karachi, among the top 22 out of 600 applicants.",
                icon: Trophy
            },
            {
                text: "Currently working as an SDET at Bank Alfalah, selected through their Techwiz trainee program with only 12 hires.",
                icon: Trophy
            },
            {
                text: "Passed 5 stages of JBS Grad Nest '24, among 67 out of 3000 candidates interviewed by the CEO.",
                icon: Trophy
            },
            {
                text: "Passed the first round for a QA Internship at VentureDive but couldn’t attend the second due to illness.",
                icon: Trophy
            }
        ]
    },
    {
        title: "Past Achievements",
        achievements: [
            {
                text: "Admitted to Software Engineering at NED University with only 1 seat for my division.",
                icon: Star
            },
            {
                text: "Received Honorary Mention at OURMUN 2017 for presentation skills.",
                icon: Star
            },
            {
                text: "Named Best Library Reader during 8th grade at IBA Public School Sukkur.",
                icon: Star
            }
        ]
    }
];

// Achievements component
const Achievements = () => {
    return (
        <section id="achievements" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">Achievements</h2>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    A snapshot of my professional and academic achievements that showcase my growth and dedication.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-12">
                {achievementsData.map((section, index) => (
                    <div key={index}>
                        {/* Section title */}
                        <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
                            {section.title}
                        </h3>

                        {/* Achievement cards */}
                        <div className="space-y-8 border-l-4 border-blue-500 pl-6">
                            {section.achievements.map((achievement, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 
                                                transition-transform transform hover:scale-105 flex items-center gap-4"
                                >
                                    {/* Icon for each achievement */}
                                    {React.createElement(achievement.icon, { className: "text-blue-600 dark:text-blue-400 flex-shrink-0", size: 24 })}

                                    {/* Achievement text */}
                                    <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">{achievement.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;