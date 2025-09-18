import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = (props) => {
    const {id}=props;

  const [activeTab, setActiveTab] = useState('education');

  // Your theme colors
  const color = {
    primary: '#00D4AA',
    white: '#ffffff',
    dark: '#070D1B'
  };

  const education = [
    {
      degree: "Master of Computer Application",
      year: "2022-2024",
      institution: "Acropolis Institute of Technology",
      description: "Gained in-depth knowledge of software development, data structures, and modern web technologies. Focused on building scalable front-end applications using React, Redux, and advanced JavaScript concepts.",
      icon: "🎓",
      status: "Completed"
    },
    {
      degree: "Bachelor of Computer Application",
      year: "2019-2022",
      institution: "Victor Institute of Professional Studies",
      description: "Developed a strong foundation in computer science principles, web development, and programming. Worked on multiple front-end projects, enhancing my skills in HTML, CSS, JavaScript, and React.",
      icon: "🎓",
      status: "Completed"
    },
    {
      degree: "Higher Secondary (Commerce)",
      year: "2019",
      institution: "Sarojani Higher Secondary School",
      description: "Studied commerce subjects, including accounting and business studies, while developing a keen interest in technology and web development, which led me to pursue a career in software engineering.",
      icon: "📚",
      status: "Completed"
    }
  ];

  const experience = [
    {
      position: "Junior Software Engineer",
      year: "April 2024 - August 2025",
      company: "Expertinasia Pvt Ltd",
      description: "Expertinasia is a private IT solutions company specializing in cutting-edge software development and digital transformation. I am currently working here as a React Developer, contributing to building scalable and high-performance web applications using modern front-end technologies.",
      icon: "💼",
      status: "Current",
      skills: ["React.js", "JavaScript", "Next.js", "Tailwind CSS", "API Integration"]
    }
  ];

  const skills = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "Next.js", level: 80, category: "Framework" },
    { name: "Tailwind CSS", level: 88, category: "Styling" },
    { name: "Redux", level: 75, category: "State Management" },
    { name: "API Integration", level: 82, category: "Backend" },
    { name: "Firebase", level: 70, category: "Backend" },
    { name: "Git/GitHub", level: 85, category: "Tools" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <style jsx>{`
        .resume-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          min-height: 100vh;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }

        .resume-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .resume-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .resume-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, ${color.primary}, #00B4A6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .resume-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .tab-navigation {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .tab-button {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          padding: 1rem 2rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tab-button.active {
          background: linear-gradient(135deg, ${color.primary}, #00B4A6);
          border-color: transparent;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 170, 0.3);
        }

        .tab-button:hover:not(.active) {
          background: rgba(0, 212, 170, 0.1);
          border-color: rgba(0, 212, 170, 0.3);
          color: ${color.primary};
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .timeline-container {
          position: relative;
        }

        .timeline {
          position: relative;
          padding-left: 3rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 1.5rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, ${color.primary}, transparent);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s ease;
        }

        .timeline-item:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 212, 170, 0.4);
          box-shadow: 0 15px 40px rgba(0, 212, 170, 0.1);
          background: rgba(255, 255, 255, 0.08);
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -3.5rem;
          top: 2rem;
          width: 20px;
          height: 20px;
          background: ${color.primary};
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 212, 170, 0.5);
          z-index: 3;
        }

        .timeline-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, ${color.primary}, #00B4A6);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .timeline-title {
          color: ${color.primary};
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .timeline-year {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          padding: 0.3rem 1rem;
          background: rgba(0, 212, 170, 0.1);
          border-radius: 20px;
          border: 1px solid rgba(0, 212, 170, 0.2);
        }

        .timeline-institution {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .timeline-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .skill-tag {
          background: rgba(0, 212, 170, 0.2);
          color: ${color.primary};
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(0, 212, 170, 0.3);
        }

        .skills-section {
          margin-top: 3rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          border-color: rgba(0, 212, 170, 0.3);
          background: rgba(0, 212, 170, 0.05);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skill-name {
          color: white;
          font-weight: 600;
          font-size: 1rem;
        }

        .skill-level {
          color: ${color.primary};
          font-weight: 700;
          font-size: 0.9rem;
        }

        .skill-category {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .skill-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, ${color.primary}, #00B4A6);
          border-radius: 3px;
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0, 212, 170, 0.05), rgba(0, 212, 170, 0.02));
          animation: float 8s ease-in-out infinite;
        }

        .floating-circle:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-circle:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 60%;
          right: 15%;
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.6; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .resume-section {
            padding: 3rem 0;
          }

          .resume-container {
            padding: 0 1rem;
          }

          .resume-title {
            font-size: 2.5rem;
          }

          .tab-navigation {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .tab-button {
            width: 200px;
            justify-content: center;
          }

          .timeline {
            padding-left: 2rem;
          }

          .timeline::before {
            left: 1rem;
          }

          .timeline-item::before {
            left: -2.5rem;
          }

          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="resume-section" id={id}>
        {/* Floating Background Elements */}
        <div className="floating-elements">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>

        <div className="resume-container">
          {/* Header */}
          <motion.div
            className="resume-header"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="resume-title">
              My <span style={{ color: color.primary }}>Resume</span>
            </h2>
            <p className="resume-subtitle">
              A journey through my educational background, professional experience, and technical expertise
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            className="tab-navigation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <span>🎓</span>
              Education
            </button>
            <button
              className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <span>💼</span>
              Experience
            </button>
            <button
              className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <span>⚡</span>
              Skills
            </button>
          </motion.div>

          {/* Content */}
          <div className="content-grid">
            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div
                className="timeline-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="timeline">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className="timeline-icon">
                        {item.icon}
                      </div>
                      <div className="timeline-header">
                        <div>
                          <h3 className="timeline-title">{item.degree}</h3>
                          <h4 className="timeline-institution">{item.institution}</h4>
                        </div>
                        <span className="timeline-year">{item.year}</span>
                      </div>
                      <p className="timeline-description">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div
                className="timeline-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="timeline">
                  {experience.map((item, index) => (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <div className="timeline-icon">
                        {item.icon}
                      </div>
                      <div className="timeline-header">
                        <div>
                          <h3 className="timeline-title">{item.position}</h3>
                          <h4 className="timeline-institution">{item.company}</h4>
                        </div>
                        <span className="timeline-year">{item.year}</span>
                      </div>
                      <p className="timeline-description">{item.description}</p>
                      <div className="skills-tags">
                        {item.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <motion.div
                className="skills-section"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="skill-category">{skill.category}</div>
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          variants={skillBarVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;