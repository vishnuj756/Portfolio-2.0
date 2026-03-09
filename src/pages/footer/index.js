import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Your theme colors
  const color = {
    primary: '#00D4AA',
    white: '#ffffff',
    dark: '#070D1B'
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐱',
      url: 'https://github.com/vishal',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/vishal',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/vishal',
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/vishal',
      color: '#E4405F'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:vishnuj756@mail.com',
      color: '#EA4335'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  const skills = [
    'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 
    'Tailwind CSS', 'Bootstrap', 'MongoDB', 'Firebase', 'API Integration'
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <>
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #070D1B 0%, #0a0a0a 50%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(0, 212, 170, 0.1);
        }

        .footer-main {
          padding: 4rem 0 2rem;
          position: relative;
          z-index: 2;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          text-decoration: none;
        }

        .logo-img {
          width: 50px;
          height: 45px;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 212, 170, 0.2);
        }

        .brand-text {
          display: flex;
          align-items: center;
        }

        .brand-v {
          font-size: 2rem;
          font-weight: 800;
          color: ${color.primary};
          margin-right: 2px;
        }

        .brand-name {
          font-size: 2rem;
          font-weight: 800;
          color: ${color.white};
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1.3rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, ${color.primary}, #00B4A6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .social-link:hover::before {
          opacity: 1;
        }

        .social-link:hover {
          transform: translateY(-5px);
          border-color: ${color.primary};
          box-shadow: 0 10px 30px rgba(0, 212, 170, 0.3);
        }

        .social-link span {
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .social-link:hover span {
          transform: scale(1.2);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          color: ${color.primary};
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(135deg, ${color.primary}, #00B4A6);
          border-radius: 1px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          padding: 0.3rem 0;
          position: relative;
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          color: ${color.primary};
          transition: all 0.3s ease;
          transform: translateX(-10px);
        }

        .footer-link:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        .footer-link:hover {
          color: ${color.primary};
          padding-left: 15px;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: rgba(0, 212, 170, 0.1);
          border: 1px solid rgba(0, 212, 170, 0.2);
          color: ${color.primary};
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .skill-tag:hover {
          background: rgba(0, 212, 170, 0.2);
          border-color: ${color.primary};
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 212, 170, 0.2);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          color: ${color.primary};
          transform: translateX(5px);
        }

        .contact-icon {
          font-size: 1.1rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
          text-align: center;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        .footer-nav {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-nav a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-nav a:hover {
          color: ${color.primary};
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

        .floating-shape {
          position: absolute;
          background: linear-gradient(135deg, rgba(0, 212, 170, 0.03), rgba(0, 212, 170, 0.01));
          border-radius: 50%;
          animation: float 10s ease-in-out infinite;
        }

        .floating-shape:nth-child(1) {
          width: 120px;
          height: 120px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-shape:nth-child(2) {
          width: 80px;
          height: 80px;
          top: 60%;
          right: 15%;
          animation-delay: 5s;
        }

        .floating-shape:nth-child(3) {
          width: 60px;
          height: 60px;
          bottom: 30%;
          left: 30%;
          animation-delay: 8s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.4; }
        }

        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, ${color.primary}, #00B4A6);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);
        }

        .back-to-top:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 30px rgba(0, 212, 170, 0.4);
        }

        .back-to-top span {
          font-size: 1.2rem;
          transform: rotate(-90deg);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-brand {
            max-width: none;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 0 1rem;
          }

          .footer-main {
            padding: 3rem 0 1.5rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-brand {
            text-align: center;
            margin-bottom: 1rem;
          }

          .social-links {
            justify-content: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .footer-nav {
            justify-content: center;
          }

          .back-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            padding: 2rem 0 1rem;
          }

          .brand-v, .brand-name {
            font-size: 1.6rem;
          }

          .social-links {
            gap: 0.8rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
          }

          .skills-grid {
            justify-content: center;
          }

          .footer-nav {
            gap: 1rem;
          }

          .footer-nav a {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <footer className="footer">
        {/* Floating Background Elements */}
        <div className="floating-elements">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-container">
            <motion.div
              className="footer-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Brand Section */}
              <motion.div className="footer-brand" variants={itemVariants}>
                <a href="/" className="brand-logo">
                  <img 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=50&h=50&fit=crop" 
                    alt="Logo" 
                    className="logo-img"
                  />
                  <div className="brand-text">
                    <span className="brand-v">V</span>
                    <span className="brand-name">ishal</span>
                  </div>
                </a>
                
                <p className="footer-description">
                  A passionate full-stack developer creating modern, responsive, and user-friendly 
                  web applications. Let's build something amazing together.
                </p>

                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      variants={socialVariants}
                      whileHover={{ scale: 1.1, y: -5 }}
                      onHoverStart={() => setHoveredSocial(index)}
                      onHoverEnd={() => setHoveredSocial(null)}
                      title={social.name}
                    >
                      <span>{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div className="footer-section" variants={itemVariants}>
                <h4 className="footer-title">Quick Links</h4>
                <div className="footer-links">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.path}
                      className="footer-link"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div className="footer-section" variants={itemVariants}>
                <h4 className="footer-title">Technologies</h4>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div className="footer-section" variants={itemVariants}>
                <h4 className="footer-title">Get In Touch</h4>
                <div className="contact-info">
                  <motion.div className="contact-item" whileHover={{ x: 5 }}>
                    <span className="contact-icon">📧</span>
                    <span>vishnuj756@mail.com</span>
                  </motion.div>
                  <motion.div className="contact-item" whileHover={{ x: 5 }}>
                    <span className="contact-icon">📱</span>
                    <span>+91 8871942880</span>
                  </motion.div>
                  <motion.div className="contact-item" whileHover={{ x: 5 }}>
                    <span className="contact-icon">📍</span>
                    <span>Vijay Nagar, Indore, India</span>
                  </motion.div>
                  <motion.div className="contact-item" whileHover={{ x: 5 }}>
                    <span className="contact-icon">🕐</span>
                    <span>Available 24/7</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="footer-container">
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2024 Vishal Shivhare. All rights reserved. Made with ❤️
              </p>
              <nav className="footer-nav">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/sitemap.xml">Sitemap</a>
              </nav>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span>→</span>
        </motion.button>
      </footer>
    </>
  );
};

export default Footer;