import React from 'react';

const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    major: "Computer Applications",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    duration: "CGPA: 7.6/10",
    description: "Advanced coursework in software engineering, database architectures, and full-stack web development."
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    major: "Computer Applications",
    institution: "Makhanlal Chaturvedi National University",
    duration: "CGPA: 7.8/10",
    description: "Strong foundational studies in programming, algorithms, data structures, and computer networks."
  }
];

const Education = () => {
  return (
    <div className="relative pt-16 mt-16 md:mt-24 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-semibold mb-4">Academic Background</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">My <span className="text-gradient">Education</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">A look at my academic qualifications and educational journey.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl h-full hover-lift">
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-gray-800 flex items-center justify-center text-indigo-500 shrink-0 shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                  </div>
                  <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-bold shadow-sm">
                    {edu.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-4">{edu.major}</h4>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
