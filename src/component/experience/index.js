import React from 'react';

const EXPERIENCES = [
  {
    id: 1,
    company: "BridgeFix Technology Private Limited",
    role: "MERN Stack / React Developer",
    duration: "Sep 2025 - Present",
    description: [
      "Developed a hospital management system with React & TypeScript, handling 1,000+ monthly appointments.",
      "Implemented JWT authentication and role-based access control (RBAC) for secure healthcare workflows.",
      "Built responsive dashboard modules, reducing staff administrative effort by 25%.",
      "Integrated Flask backend services for reliable real-time data synchronization."
    ]
  },
  {
    id: 2,
    company: "ExpertInAsia Private Limited",
    role: "MERN Stack / Frontend Developer",
    duration: "Jul 2022 - Aug 2025",
    description: [
      "Built high-traffic web apps using Next.js & React, boosting performance scores by 35%.",
      "Architected Micro Frontend solutions via Webpack Module Federation for independent deployments.",
      "Integrated backend proxy layers to secure and streamline complex API communications.",
      "Implemented Redux Toolkit state management, achieving sub-100ms UI response times."
    ]
  },
  {
    id: 3,
    company: "Self-Employed (Remote)",
    role: "Freelance MERN Stack Developer",
    duration: "Feb 2022 - Mar 2024",
    description: [
      "Delivered end-to-end MERN stack solutions for e-commerce, education, and service clients.",
      "Built highly responsive, mobile-first web applications optimized for performance.",
      "Integrated robust third-party APIs and secure payment gateways.",
      "Independently managed full project lifecycles from UI design to final deployment."
    ]
  }
];

const Experience = () => {
  return (
    <div className="relative pt-16 mt-16 md:mt-24 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold mb-4">My Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">A timeline of my professional experience, companies I've worked with, and the impact I've made.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full transform md:-translate-x-1/2 opacity-20"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-indigo-500 transform -translate-x-[6px] md:-translate-x-1/2 mt-6 md:mt-8 group-hover:scale-150 group-hover:border-pink-500 transition-all duration-300 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                
                {/* Content Box */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`p-6 md:p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl hover-lift border border-gray-100 dark:border-gray-700 relative 
                    ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}
                  >
                    {/* Connecting Line for Desktop */}
                    <div className={`hidden md:block absolute top-8 w-12 h-1 bg-gray-200 dark:bg-gray-700 
                      ${index % 2 === 0 ? '-left-12' : '-right-12'}`}
                    ></div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                      <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-bold whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-6">
                      {exp.role}
                    </h4>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                          <svg className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
