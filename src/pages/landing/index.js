import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import color from "../../utils/color";
import ProfileImage from "../../assests/images/hero-img.jpg";
import Button from "../../component/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import About from "../about us";
import Service from "../service";
import Skill from "../skill";
import Resume from "../resume";
import Contact from "../contact";

import '../../assests/css/home.css'; // Custom CSS file
import useResponsive from "../../utils/useResposnsive";

export default function Home() {
  const { deviceType } = useResponsive();

  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      } 
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1, 
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.2 
      } 
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1, 
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.4 
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100 
      } 
    },
    hover: { 
      scale: 1.2, 
      y: -5,
      transition: { duration: 0.2 } 
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Social media links data
  const socialLinks = [
    {
      icon: "ion:social-linkedin",
      href: "#",
      label: "LinkedIn",
      color: "#0077B5",
      bgGradient: "linear-gradient(135deg, #0077B5, #00A0DC)"
    },
    {
      icon: "fe:instagram", 
      href: "#",
      label: "Instagram",
      color: "#E4405F",
      bgGradient: "linear-gradient(135deg, #E4405F, #F77737)"
    },
    {
      icon: "icon-park-outline:github",
      href: "#", 
      label: "GitHub",
      color: "#333",
      bgGradient: "linear-gradient(135deg, #333, #555)"
    },
    {
      icon: "ion:social-twitter",
      href: "#",
      label: "Twitter", 
      color: "#1DA1F2",
      bgGradient: "linear-gradient(135deg, #1DA1F2, #14A1F0)"
    }
  ];

  const isDesktop = deviceType !== "mobile" && deviceType !== "tablet";
  const isTablet = deviceType === "tablet";
  const isMobile = deviceType === "mobile";

  return (
    <>
      <section className="hero-section position-relative overflow-hidden" style={{height:"fit-content"}}>
        {/* Enhanced Background Elements */}
        <div className="background-effects">
          <motion.div 
            className="bg-blob blob-1"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="bg-blob blob-2"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="bg-blob blob-3"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Particle Effects */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <Container className="hero-container">
          <Row className="align-items-center min-vh-100 ">
            {/* Content Column */}
            <Col 
              xl={6} 
              lg={6} 
              md={12} 
              className={`order-2 order-lg-1 ${isMobile ? 'text-center' : ''}`}
            >
                <motion.div 
                  className="hero-content"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Greeting with enhanced animation */}
                  <motion.div
                    variants={fadeInUp}
                    className="greeting-section mb-3"
                  >
                    <motion.span
                      className="wave-emoji d-inline-block"
                      animate={{
                        rotate: [0, 14, -8, 14, -4, 10, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
               
                    </motion.span>
                    <h3 className="greeting-text" style={{ color: color.primary }}>
                      Hello, I'm
                    </h3>
                  </motion.div>

                  {/* Name with typewriter effect */}
                  <motion.div variants={fadeInLeft} className="name-section mb-4">
                    <h1 className="hero-name">
                      <motion.span 
                        className="first-name text-white"
                  
                        whileHover={{ scale: 1.05 }}
                      >
                        Vishal
                      </motion.span>
                      <br />
                      <motion.span 
                        className="last-name text-white"
                        whileHover={{ scale: 1.05 }}
                      >
                        Shivhare
                      </motion.span>
                    </h1>
                  </motion.div>

                  {/* Enhanced Role Section */}
                  <motion.div
                    variants={fadeInUp}
                    className="role-section mb-4"
                  >
                    <motion.div 
                      className="role-badge"
                      {...pulseAnimation}
                    >
                      <h3 className="role-title">
                        <motion.span
                          animate={{ 
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          style={{
                            background: `linear-gradient(90deg, ${color.primary}, #fff, ${color.primary})`,
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          Front End Developer
                        </motion.span>
                      </h3>
                    </motion.div>
                    
                    <motion.div 
                      className="location-info"
                      whileHover={{ x: 5 }}
                    >
                      <Icon icon="material-symbols:location-on" className="location-icon" />
                      <span>Available for remote work</span>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Action Buttons */}
                  <motion.div
                    variants={fadeInUp}
                    className="action-buttons"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        btnName="Hire Me"
                        btnclass="hire-btn"
                      />
                    </motion.div>
                    
                    <motion.button
                      className="cv-btn"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: `0 10px 25px ${color.primary}40`
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon icon="material-symbols:download" className="me-2" />
                      Download CV
                    </motion.button>
                  </motion.div>

                
                </motion.div>
            </Col>

            {/* Image Column - Enhanced */}
            <Col 
              xl={6} 
              lg={6} 
              md={12} 
              className="order-1 order-lg-2 position-relative"
            >
              <motion.div
                className="image-container"
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                {...floatingAnimation}
              >
                <div className="image-wrapper">
                  <motion.div
                    className="image-frame"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={ProfileImage}
                      alt="Vishal Shivhare - Front End Developer"
                      className="profile-image"
                    />
                    
                    {/* Enhanced image overlays */}
                    <div className="image-overlay-1" />
                    <div className="image-overlay-2" />
                    
                    {/* Decorative elements */}
                    <motion.div 
                      className="decoration-ring-1"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                      className="decoration-ring-2"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Icon icon="material-symbols:keyboard-arrow-down" />
        </motion.div>
      </section>

     
      <About/>
      <Service/>
      <Skill/>
      <Resume/>
      <Contact/>
    </>
  );
}