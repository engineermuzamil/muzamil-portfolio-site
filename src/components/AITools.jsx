import React from 'react';
import { Wand2, Sparkles, Cpu, Workflow } from 'lucide-react';

export default function AITools() {
  const tools = [
    {
      icon: <Wand2 className="text-purple-600 dark:text-purple-400 flex-shrink-0" size={24} />,
      name: "Functionize",
      description: "AI-powered testing platform that transforms natural language into automated tests, enabling rapid test creation and maintenance.",
      features: ["Natural Language Processing", "Self-healing Tests", "Visual Testing", "Cross-browser Testing"]
    },
    {
      icon: <Sparkles className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />,
      name: "Testim",
      description: "Smart test automation tool using AI to create stable tests that automatically adapt to application changes.",
      features: ["AI-based Element Detection", "Smart Test Recording", "Root Cause Analysis", "CI/CD Integration"]
    },
    {
      icon: <Cpu className="text-green-600 dark:text-green-400 flex-shrink-0" size={24} />,
      name: "Applitools",
      description: "Visual AI testing tool that ensures your application looks perfect across all devices and browsers.",
      features: ["Visual AI Engine", "Layout Testing", "Cross-device Testing", "Automated Maintenance"]
    },
    {
      icon: <Workflow className="text-rose-600 dark:text-rose-400 flex-shrink-0" size={24} />,
      name: "Test.ai",
      description: "AI-driven testing platform that autonomously explores and tests applications like a human would.",
      features: ["Autonomous Testing", "Behavioral Testing", "Real Device Testing", "AI-powered Analytics"]
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <section id="ai-tools" className="container mx-auto px-4 py-16">
=======
    <section className="container mx-auto px-4 py-16">
>>>>>>> b6f3ed2 (initial commit)
=======
    <section id="ai-tools" className="container mx-auto px-4 py-16">
>>>>>>> 54a4e1c (fix: update id of every section)
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">Favorite AI Tools</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Exploring and leveraging cutting-edge AI-powered tools that revolutionize software testing and automation.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 
              hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
          >
            <div className="flex items-start gap-4">
              {tool.icon}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{tool.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {tool.description}
                </p>
                <ul className="space-y-1">
                  {tool.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="text-slate-600 dark:text-slate-300 text-sm"
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
// import React from 'react';
// import { Wand2, Sparkles, Cpu, Workflow } from 'lucide-react';

// export default function AITools() {
//   const tools = [
//     {
//       icon: <Wand2 className="text-purple-600 dark:text-purple-400 flex-shrink-0" size={24} />,
//       name: "Functionize",
//       description: "AI-powered testing platform that transforms natural language into automated tests, enabling rapid test creation and maintenance.",
//       features: ["Natural Language Processing", "Self-healing Tests", "Visual Testing", "Cross-browser Testing"]
//     },
//     {
//       icon: <Sparkles className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />,
//       name: "Testim",
//       description: "Smart test automation tool using AI to create stable tests that automatically adapt to application changes.",
//       features: ["AI-based Element Detection", "Smart Test Recording", "Root Cause Analysis", "CI/CD Integration"]
//     },
//     {
//       icon: <Cpu className="text-green-600 dark:text-green-400 flex-shrink-0" size={24} />,
//       name: "Applitools",
//       description: "Visual AI testing tool that ensures your application looks perfect across all devices and browsers.",
//       features: ["Visual AI Engine", "Layout Testing", "Cross-device Testing", "Automated Maintenance"]
//     },
//     {
//       icon: <Workflow className="text-rose-600 dark:text-rose-400 flex-shrink-0" size={24} />,
//       name: "Test.ai",
//       description: "AI-driven testing platform that autonomously explores and tests applications like a human would.",
//       features: ["Autonomous Testing", "Behavioral Testing", "Real Device Testing", "AI-powered Analytics"]
//     }
//   ];

//   return (
//     <section className="container mx-auto px-4 py-16">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
//           Favorite AI Tools
//         </h2>
//         <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
//           Exploring and leveraging cutting-edge AI-powered tools that revolutionize software testing and automation.
//         </p>
//       </div>

//       <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
//         {tools.map((tool, index) => (
//           <div 
//             key={index}
//             className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl 
//               hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
//           >
//             <div className="flex items-start gap-4">
//               {tool.icon}
//               <div>
//                 <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{tool.name}</h3>
//                 <p className="text-slate-700 dark:text-slate-300 mb-4">
//                   {tool.description}
//                 </p>
//                 <ul className="space-y-1">
//                   {tool.features.map((feature, featureIndex) => (
//                     <li 
//                       key={featureIndex}
//                       className="text-slate-700 dark:text-slate-300 text-sm"
//                     >
//                       • {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
>>>>>>> b6f3ed2 (initial commit)
=======
}
>>>>>>> 54a4e1c (fix: update id of every section)
