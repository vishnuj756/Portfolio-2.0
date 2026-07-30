import React from 'react';
import heroImage from "../../assests/images/pf-image.png";
import Experience from "../experience/index";
import Education from "../education/index"
const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold mb-4">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 md:mb-6">Know More <span className="text-gradient">About Me</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">A passionate developer with a love for creating beautiful and functional web applications</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-[300px] md:h-[500px] bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-600 flex items-center justify-center">
                <img src={heroImage} alt="Hero" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            <div className="absolute bottom-0 lg:-bottom-6 left-0 lg:-left-6 bg-white dark:bg-gray-800 rounded-2xl p-3 lg:p-6 shadow-2xl hover-lift">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 lg:-top-6 right-0 lg:-right-6 bg-white dark:bg-gray-800 rounded-2xl p-3 lg:p-6 shadow-2xl hover-lift">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Fast</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Delivery</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">I'm Vishal Sivhare, a <span className="text-gradient">MERN Stack Developer</span></h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">With <strong>3 years of hands-on experience</strong> in full-stack web development, I specialize in building scalable, production-ready applications using MongoDB, Express.js, React.js, and Node.js.</p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">I've worked across EdTech, FinTech, and SaaS domains — delivering clean code, optimized performance, and intuitive user experiences that make an impact.</p>

            <div className="space-y-6 pt-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">React.js / Frontend</span>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">92%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Node.js / Express.js</span>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">85%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">MongoDB / Databases</span>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">82%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Redux / State Management</span>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">88%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">REST APIs / Integration</span>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">90%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contact" className="inline-flex items-center gap-2 px-4 md:px-8 py-2 md:py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all">Hire Me</a>
              <a href="/Vishal_Shivhare_Resume_Updated.pdf" download="Vishal_Shivhare_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 md:px-8 py-2 md:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-indigo-500 hover:scale-105 transition-all">Download CV</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 lg:mt-20">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">4+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Built</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Happy Clients</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      <Experience />
      <Education />
    </section>
  );
};

export default About;
