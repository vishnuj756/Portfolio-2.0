import React from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CEO at TechSolutions",
    image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=6366f1&color=fff",
    content: "Vishal is an exceptional MERN Stack Developer. He completely transformed our legacy dashboard into a lightning-fast React application. His deep understanding of Node.js and MongoDB also helped us scale our backend API effortlessly. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Desai",
    role: "Product Manager, FinTech Startup",
    image: "https://ui-avatars.com/api/?name=Priya+Desai&background=ec4899&color=fff",
    content: "Working with Vishal was a breeze. He took ownership of the frontend architecture and delivered pixel-perfect UI with Tailwind CSS. His ability to integrate complex Redux state management for our financial tracking app was extremely impressive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Founder, EduLearn Platform",
    image: "https://ui-avatars.com/api/?name=Amit+Patel&background=14b8a6&color=fff",
    content: "We hired Vishal to build our global EdTech platform, and he exceeded all expectations. His code is clean, modular, and performant. He handled everything from the Express.js backend to the React frontend flawlessly.",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 md:mb-6">What <span className="text-gradient">Clients Say</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Don't just take my word for it. Here is what my clients and colleagues have to say about my work.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 shadow-xl hover-lift border border-gray-100 dark:border-gray-800 relative group">
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-200 dark:text-gray-800 group-hover:text-indigo-100 dark:group-hover:text-indigo-900/50 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full ring-4 ring-indigo-50 dark:ring-gray-800" loading="lazy" width="64" height="64" />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
