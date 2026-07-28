import React from 'react';

const Services = () => {
  return (
    <section id="services" className="relative py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-semibold mb-4">Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">What I <span className="text-gradient">Offer</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Comprehensive web development services tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
          <div className="group">
            <div className="relative h-full p-4 md:p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover-lift overflow-hidden">
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-6 leading-relaxed">Building responsive, performant websites using modern frameworks and best practices.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-4 transition-all">Learn More →</a>
            </div>
          </div>
          <div className="group">
            <div className="relative h-full p-4 md:p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover-lift overflow-hidden">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-6 leading-relaxed">Creating intuitive and beautiful user interfaces that provide exceptional user experiences.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-4 transition-all">Learn More →</a>
            </div>
          </div>
          <div className="group">
            <div className="relative h-full p-4 md:p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover-lift overflow-hidden">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-6 leading-relaxed">Robust and scalable server-side solutions with RESTful APIs and cloud integrations.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:gap-4 transition-all">Learn More →</a>
            </div>
          </div>
          <div className="group">
            <div className="relative h-full p-4 md:p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover-lift overflow-hidden">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">Mobile Apps</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-6 leading-relaxed">Cross-platform mobile applications with native performance using React Native.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold hover:gap-4 transition-all">Learn More →</a>
            </div>
          </div>
          <div className="group">
            <div className="relative h-full p-4 md:p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover-lift overflow-hidden">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-6 leading-relaxed">Deploy and manage applications on cloud platforms with CI/CD pipelines.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-4 transition-all">Learn More →</a>
            </div>
          </div>
          <div className="group">
            <div className="relative h-full p-4 md:p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover-lift overflow-hidden">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">Performance Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-6 leading-relaxed">Make your website lightning fast with advanced optimization techniques.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-semibold hover:gap-4 transition-all">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
