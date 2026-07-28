import React, { useState, useEffect } from "react";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            // Optionally update URL smoothly (without jumping) on scroll
            if (window.location.pathname !== `/${section === 'home' ? '' : section}`) {
              window.history.replaceState(null, '', `/${section === 'home' ? '' : section}`);
            }
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(targetId);
    
    // Update URL without hash jump
    window.history.pushState(null, '', `/${targetId === 'home' ? '' : targetId}`);

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <nav id="navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm" : ""}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="group flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-lg transition-all duration-300">
                <span className="text-2xl font-black text-white">VS</span>
              </div>
              <div className="hidden xl:block">
                <div className="text-xl font-black text-gray-900 dark:text-white group-hover:text-gradient transition-all">Vishal Sivhare</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">MERN Stack Developer</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {['home', 'about', 'services', 'projects', 'testimonials', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`/${item === 'home' ? '' : item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-4 py-2 font-medium transition-all capitalize ${
                    activeSection === item 
                      ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="flex w-10 h-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 group cursor-pointer" aria-label="Toggle theme">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>

              <a href="/contact" onClick={(e) => handleNavClick(e, "contact")} className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Hire Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-indigo-500 transition-colors cursor-pointer" aria-label="Toggle menu">
                <span className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"></span>
                <span className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"></span>
                <span className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-[999] transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 min-h-screen overflow-y-auto`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <a href="/" onClick={(e) => handleNavClick(e, "home")} className="group flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black text-white">VS</span>
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900 dark:text-white">Vishal Sivhare</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">MERN Stack Developer</div>
                </div>
              </a>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-red-500 transition-colors cursor-pointer" aria-label="Close menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 flex flex-col gap-2 p-6 overflow-y-auto">
              {['home', 'about', 'services', 'projects', 'testimonials', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`/${item === 'home' ? '' : item}`} 
                  onClick={(e) => handleNavClick(e, item)}
                  className={`mobile-nav-link px-6 py-4 text-lg font-semibold rounded-xl transition-all capitalize ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <a href="/contact" onClick={(e) => handleNavClick(e, "contact")} className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl transition-all">
                Hire Me Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;