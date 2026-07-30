import React, { useEffect, Suspense, lazy } from "react";
import Hero from "../../component/hero";
import About from "../../component/about";
import Seo from "../../component/seo";

const Services = lazy(() => import("../../component/services"));
const Experience = lazy(() => import("../../component/experience"));
const Education = lazy(() => import("../../component/education"));
const Projects = lazy(() => import("../../component/projects"));
const Testimonials = lazy(() => import("../../component/testimonials"));
const Contact = lazy(() => import("../../component/contact"));

export default function Home() {
  useEffect(() => {
    const path = window.location.pathname.replace('/', '');
    if (path) {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300); // Wait for components to mount and render
    }
  }, []);

  return (
    <>
      <Seo
        title="Vishal Sivhare | MERN Stack Developer"
        description="Welcome to Vishal Sivhare's portfolio website. Explore my projects, skills, and services as a MERN Stack Developer."
        keywords="Vishal Sivhare, portfolio, MERN stack developer, React developer, Node.js"
        image="https://vishalshivhare.netlify.app/assests/images/hero-img.jpg"
      />
      
      {/* Background Animated Elements — dark mode only */}
      <div className="hidden dark:block fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/30 to-pink-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-500/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
        <div id="particles-container"></div>
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-gray-500">Loading...</div>}>
          <Services />
          <Experience />
          <Education />
          <Projects />
          <Testimonials />
          <Contact />
        </Suspense>
      </div>
    </>
  );
}
