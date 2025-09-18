import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Service = (props) => {
  const {id}=props;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Mock data - replace with your actual data
  const color = {
    primary: "#00D4AA",
    white: "#ffffff",
    dark: "#070D1B",
  };

  const data = [
    {
      name: "React",
      description:
        "A powerful JavaScript library for building user interfaces with reusable components and state management.",
      src: "⚛️",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "#61DAFB",
    },
    {
      name: "Angular",
      description:
        "A comprehensive framework for building dynamic single-page applications with TypeScript and modular architecture.",
      src: "🅰️",
      gradient: "from-red-500 to-pink-500",
      bgColor: "#DD0031",
    },
    {
      name: "Next.js",
      description:
        "A powerful React framework for building fast, SEO-friendly web applications with server-side rendering, static site generation, and API routes.",
      src: "⚡",
      gradient: "from-gray-800 to-gray-600",
      bgColor: "#000000",
    },
    {
      name: "Redux",
      description:
        "A state management library for JavaScript applications, commonly used with React to manage complex state efficiently.",
      src: "🔄",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "#764ABC",
    },
    {
      name: "API Integration",
      description:
        "Experience in handling API requests using Axios and Fetch to interact with RESTful services and enhance application functionality.",
      src: "🔗",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "#4CAF50",
    },
    {
      name: "Firebase",
      description:
        "A backend-as-a-service (BaaS) platform by Google, offering authentication, real-time database, and hosting solutions for web and mobile applications.",
      src: "🔥",
      gradient: "from-orange-500 to-red-500",
      bgColor: "#FF9800",
    },

    {
      name: "Material UI",
      description:
        "A popular React UI framework offering modern and customizable components based on Google's Material Design.",
      src: "🎨",
      gradient: "from-blue-600 to-indigo-600",
      bgColor: "#2196F3",
    },
    {
      name: "Bootstrap",
      description:
        "A responsive CSS framework that simplifies web design with pre-styled components and grid systems.",
      src: "🅱️",
      gradient: "from-purple-600 to-blue-600",
      bgColor: "#7952B3",
    },
    {
      name: "Framer Motion",
      description:
        "An animation library for React, enabling smooth and complex animations with simple syntax.",
      src: "🎭",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "#FF0055",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <>
      <style jsx>{`
        .services-section {
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a1a2e 50%,
            #16213e 100%
          );
          min-height: 100vh;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .services-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .services-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, ${color.primary}, #00b4a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            transparent,
            rgba(0, 212, 170, 0.05)
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 212, 170, 0.4);
          box-shadow: 0 20px 60px rgba(0, 212, 170, 0.15);
          background: rgba(255, 255, 255, 0.08);
        }

        .service-icon-container {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, ${color.primary}, #00b4a6);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          position: relative;
          transition: all 0.4s ease;
        }

        .service-card:hover .service-icon-container {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 30px rgba(0, 212, 170, 0.3);
        }

        .service-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .service-title {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-align: center;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-title {
          color: ${color.primary};
        }

        .service-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.6;
          text-align: center;
          flex-grow: 1;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-description {
          color: rgba(255, 255, 255, 0.9);
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
          background: linear-gradient(
            135deg,
            rgba(0, 212, 170, 0.1),
            rgba(0, 212, 170, 0.05)
          );
          animation: float 6s ease-in-out infinite;
        }

        .floating-circle:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .floating-circle:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 70%;
          right: 10%;
          animation-delay: 2s;
        }

        .floating-circle:nth-child(3) {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 10%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }

        .service-number {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 30px;
          height: 30px;
          background: rgba(0, 212, 170, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${color.primary};
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-number {
          background: ${color.primary};
          color: #000;
          transform: scale(1.2);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .services-section {
            padding: 3rem 0;
          }

          .services-container {
            padding: 0 1rem;
          }

          .services-title {
            font-size: 2.5rem;
          }

          .services-subtitle {
            font-size: 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 2rem 1.5rem;
          }

          .service-icon-container {
            width: 70px;
            height: 70px;
          }

          .service-icon {
            font-size: 2rem;
          }

          .service-title {
            font-size: 1.3rem;
          }

          .service-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 2rem;
          }

          .service-card {
            padding: 1.5rem 1rem;
          }

          .service-icon-container {
            width: 60px;
            height: 60px;
            margin-bottom: 1.5rem;
          }

          .service-icon {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <section className="services-section" id={id}>
        {/* Floating Background Elements */}
        <div className="floating-elements">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>

        <div className="services-container">
          {/* Header */}
          <motion.div
            className="services-header"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="services-title">
              My <span style={{ color: color.primary }}>Services</span>
            </h2>
            <p className="services-subtitle">
              I offer a comprehensive range of modern web development services,
              from frontend frameworks to backend solutions
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {data.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="service-card"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Icon */}
                <motion.div
                  className="service-icon-container"
                  variants={iconVariants}
                  animate={
                    hoveredIndex === index
                      ? {
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  <div className="service-icon">{service.src}</div>
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="service-title"
                  animate={
                    hoveredIndex === index
                      ? {
                          scale: [1, 1.05, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                >
                  {service.name}
                </motion.h3>

                <motion.p
                  className="service-description"
                  animate={
                    hoveredIndex === index
                      ? {
                          y: [0, -5, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.4 }}
                >
                  {service.description}
                </motion.p>

                {/* Hover Effect Overlay */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        width: "20px",
                        height: "20px",
                        background: color.primary,
                        borderRadius: "50%",
                        boxShadow: `0 0 20px ${color.primary}`,
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Service;
