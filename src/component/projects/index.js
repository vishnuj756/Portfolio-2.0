import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'DeftRank',
    subtitle: 'Real-Time Evaluation Platform',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    category: 'EdTech',
    accentBg: 'bg-indigo-100 dark:bg-indigo-900/30',
    accentText: 'text-indigo-600 dark:text-indigo-400',
    linkColor: 'text-indigo-600 dark:text-indigo-400',
    tech: ['Preact.js', 'Firebase', 'JavaScript', 'Jest', 'CSS3'],
    techColors: [
      'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    ],
    metrics: [
      { value: '60%', label: 'Bundle Size Reduced' },
      { value: '40%', label: 'DOM Speed Improved' },
      { value: '90%+', label: 'Test Coverage' },
    ],
    bullets: [
      'Built a real-time student ranking dashboard using Preact.js, Firebase, JavaScript, HTML5, and CSS3, reducing bundle size by 60% vs React.',
      'Implemented real-time data synchronization and performance-focused rendering, improving DOM interaction speed by 40%.',
      'Added unit testing with Jest and achieved 90%+ code coverage for core ranking logic.',
    ],
    link: '#',
  },
  {
    id: 2,
    title: 'Ilollo Learn',
    subtitle: 'Global EdTech Platform',
    gradient: 'from-emerald-400 via-cyan-500 to-blue-600',
    category: 'EdTech',
    accentBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    linkColor: 'text-emerald-600 dark:text-emerald-400',
    tech: ['Angular', 'JavaScript', 'MySQL', 'HTML5', 'CSS3'],
    techColors: [
      'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    ],
    metrics: [
      { value: '3+', label: 'Regions Supported' },
      { value: 'i18n', label: 'Multilingual' },
      { value: 'A11y', label: 'Accessible' },
    ],
    bullets: [
      'Developed a multilingual education platform using Angular, JavaScript, MySQL, HTML5, and CSS3 with i18n support for users across 3+ regions.',
      'Improved SEO through semantic HTML, metadata optimization, and structured frontend content, increasing platform discoverability.',
      'Designed responsive, mobile-first interfaces using CSS Grid and Flexbox while maintaining accessibility best practices.',
    ],
    link: '#',
  },
  {
    id: 3,
    title: 'Rented Wheels',
    subtitle: 'Car Renting Application',
    gradient: 'from-orange-400 via-red-500 to-rose-600',
    category: 'Rental Platform',
    accentBg: 'bg-orange-100 dark:bg-orange-900/30',
    accentText: 'text-orange-600 dark:text-orange-400',
    linkColor: 'text-orange-600 dark:text-orange-400',
    tech: ['React', 'Firebase', 'Redux', 'Material UI'],
    techColors: [
      'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
      'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    ],
    metrics: [
      { value: 'Real-Time', label: 'Availability' },
      { value: '3rd Party', label: 'APIs Integrated' },
      { value: 'Smooth', label: 'Booking UX' },
    ],
    bullets: [
      'Managed the frontend development using React, Firebase, Redux, and Material UI for a car and bike rental platform, enabling users to browse, book, and manage vehicle rentals easily.',
      'Integrated third-party APIs for real-time vehicle availability, booking management, and payment processing to ensure a smooth and responsive rental experience.',
    ],
    link: '#',
  },
  {
    id: 4,
    title: 'QtPet',
    subtitle: 'Pet Care System',
    gradient: 'from-pink-400 via-fuchsia-500 to-violet-600',
    category: 'Pet Care',
    accentBg: 'bg-pink-100 dark:bg-pink-900/30',
    accentText: 'text-pink-600 dark:text-pink-400',
    linkColor: 'text-pink-600 dark:text-pink-400',
    tech: ['React', 'Shadcn UI', 'Tailwind CSS', 'Google Maps API'],
    techColors: [
      'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
      'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
      'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
      'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    ],
    metrics: [
      { value: 'Live', label: 'GPS Tracking' },
      { value: 'Maps', label: 'API Integrated' },
      { value: 'Mobile', label: 'First Design' },
    ],
    bullets: [
      'Developed the frontend using React, Shadcn UI, Tailwind CSS, and Google Maps API for a pet care and transportation platform, allowing pet owners to book, track, and manage pet services easily.',
      'Integrated Google Maps API to enable real-time tracking of pet transportation and service provider locations, improving user trust and convenience.',
    ],
    link: '#',
  },
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Banner */}
      <div className={`relative h-52 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-2 px-6`}>
        {/* Decorative circles */}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute bottom-2 left-4 w-14 h-14 rounded-full bg-white/10 blur-lg"></div>

        <h3 className="text-3xl font-black text-white drop-shadow-lg z-10">{project.title}</h3>
        <p className="text-white/80 text-sm font-medium z-10">{project.subtitle}</p>

        {/* Metric badges */}
        <div className="flex gap-2 mt-1 z-10 flex-wrap justify-center">
          {project.metrics.map((m, i) => (
            <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1 text-center">
              <div className="text-white font-black text-base leading-tight">{m.value}</div>
              <div className="text-white/80 text-[10px] leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Category + Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.accentBg} ${project.accentText}`}>
            {project.category}
          </span>
          {project.tech.map((t, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${project.techColors[i] || project.techColors[0]}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Bullet highlights */}
        <ul className="space-y-2 flex-1">
          {project.bullets.slice(0, expanded ? project.bullets.length : 1).map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <span className={`mt-1 shrink-0 w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient}`}></span>
              {b}
            </li>
          ))}
        </ul>

        {project.bullets.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={`mt-3 text-xs font-semibold ${project.linkColor} hover:underline text-left`}
          >
            {expanded ? '▲ Show less' : `▼ +${project.bullets.length - 1} more highlights`}
          </button>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 mt-3 border-t border-gray-200 dark:border-gray-700">
          <a
            href={project.link}
            className={`inline-flex items-center gap-1.5 font-semibold text-sm ${project.linkColor} hover:gap-3 transition-all`}
          >
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs text-gray-400 dark:text-gray-500">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world platforms I've built — focused on performance, scalability, and great user experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
