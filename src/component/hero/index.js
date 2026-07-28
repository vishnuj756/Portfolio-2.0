import React, { useState, useEffect, useRef } from 'react';
import heroImage from "../../assests/images/pf-image.png";
const TITLES = [
  'MERN Stack Developer',
  'React.js Developer',
  'Node.js Developer',
  'Full Stack Developer',
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText((prev) => {
          const next = currentTitle.slice(0, prev.length + 1);
          if (next === currentTitle) {
            // Finished typing — pause then start deleting
            timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
          } else {
            timeoutRef.current = setTimeout(tick, 80);
          }
          return next;
        });
      } else {
        // Deleting
        setDisplayText((prev) => {
          const next = prev.slice(0, prev.length - 1);
          if (next === '') {
            // Finished deleting — move to next title
            setIsDeleting(false);
            setTitleIndex((i) => (i + 1) % TITLES.length);
          } else {
            timeoutRef.current = setTimeout(tick, 45);
          }
          return next;
        });
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? 45 : 120);
    return () => clearTimeout(timeoutRef.current);
  }, [titleIndex, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pt-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 glass-effect px-5 py-3 rounded-full text-sm font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span className="text-gray-700 dark:text-gray-300">Available for freelance work</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-black leading-tight">
                <span className="block text-gray-400 dark:text-gray-600 text-2xl sm:text-3xl lg:text-4xl font-light mb-2">Hey there! I'm</span>
                <span className="block whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">Vishal Sivhare</span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-3 text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="text-gray-700 dark:text-gray-300">I'm a</span>
                <span id="typed-text" className="text-gradient">{displayText}</span>
                <span className="typing-cursor text-indigo-500">|</span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              MERN Stack Developer with <strong>3 years of experience</strong> building scalable, high-performance full-stack web applications. Passionate about clean code, great UX, and modern JavaScript ecosystems.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="skill-orb px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer">MongoDB</span>
              <span className="skill-orb px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer">Express.js</span>
              <span className="skill-orb px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer">React.js</span>
              <span className="skill-orb px-4 py-2 bg-gradient-to-r from-green-600 to-lime-600 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer">Node.js</span>
              <span className="skill-orb px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer">JavaScript</span>
              <span className="skill-orb px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer">Redux</span>
              <span className="skill-orb px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer">Tailwind CSS</span>
              <span className="skill-orb px-4 py-2 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer">Firebase</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="group relative inline-flex items-center justify-center px-4 md:px-8 py-2 md:py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                View My Work
              </a>
              <a href="#contact" className="group relative inline-flex items-center justify-center px-4 md:px-8 py-2 md:py-4 text-lg font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-300 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:border-indigo-500">
                Let's Talk
              </a>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="hidden sm:block card-3d absolute top-0 right-0 sm:w-80 glass-effect rounded-2xl p-3 md:p-6 shadow-2xl animate-float z-20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-purple-500">const developer = {'{'}</div>
                  <div className="pl-4 text-blue-500">name: <span className="text-green-500">"Vishal"</span>,</div>
                  <div className="pl-4 text-blue-500">skills: <span className="text-yellow-500">["React", "Node"]</span>,</div>
                  <div className="pl-4 text-blue-500">passion: <span className="text-pink-500">&infin;</span></div>
                  <div className="text-purple-500">{'}'}</div>
                </div>
              </div>

              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10 flex items-center justify-center">
                {/* Morphing glow blob */}
                <div className="absolute inset-0 morphing-blob bg-gradient-to-br from-indigo-400 via-pink-500 to-purple-600 opacity-20 blur-2xl"></div>

                {/* Outer rotating ring — clockwise */}
                <div className="absolute inset-[-18px] rounded-full border-2 border-transparent"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #6366f1, #ec4899, #06b6d4, #6366f1) border-box',
                    animation: 'spin 8s linear infinite',
                  }}
                ></div>

                {/* Inner rotating ring — counter-clockwise, dashed */}
                <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-pink-400/60"
                  style={{ animation: 'spin 12s linear infinite reverse' }}
                ></div>

                {/* Profile circle */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 dark:border-gray-800/30 shadow-2xl animate-glow flex items-center justify-center bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-600">
                  {/* <span className="text-white text-6xl font-black">VS</span> */}
                  <img src={heroImage} alt="Hero" className='w-full h-full object-cover' />
                </div>

                {/* Orbiting icon dots on the outer ring */}
                <div className="absolute inset-[-18px] rounded-full" style={{ animation: 'spin 8s linear infinite' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18.178l-4.62 2.428 1.236-5.21-4.073-3.52 5.31-.453L12 6.272l2.147 5.151 5.31.453-4.073 3.52 1.236 5.21z" /></svg>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-lg flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </div>
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg shadow-lg flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                  </div>
                </div>
              </div>

              <div className="card-3d absolute bottom-0 left-0 glass-effect rounded-2xl p-3 md:p-6 shadow-2xl animate-float-delayed z-20">
                <div className="text-4xl font-bold text-gradient mb-2">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
              </div>

              <div className="card-3d absolute bottom-20 right-10 glass-effect rounded-2xl p-3 md:p-6 shadow-2xl animate-float z-20" style={{ animationDelay: '2s' }}>
                <div className="text-4xl font-bold text-gradient-2 mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
