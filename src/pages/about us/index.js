import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import color from "../../utils/color";
import about from "../../assests/images/about.jpg";
import Button from "../../component/button";
import '../../assests/css/about.css'; // Custom CSS file
import useResponsive from "../../utils/useResposnsive";

export default function About(props) {
  const { deviceType } = useResponsive();
const {id}=props;
  const data = [
    { key: "D.O.B", value: "Feb 1, 2002", icon: "material-symbols:cake-outline" },
    { key: "Phone", value: "+91 8871942880", icon: "material-symbols:phone-outline" },
    { key: "Email", value: "vishnuj756@gmail.com", icon: "material-symbols:email-outline" },
    { key: "Language", value: "English, Hindi", icon: "material-symbols:language" },
    { key: "Freelance", value: "Available", icon: "material-symbols:work-outline" },
  ];



  const isMobile = deviceType === "mobile";

  // Enhanced Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      } 
    },
  };

  const textVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };



  return (

    <>
      <style jsx>{`
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
        }`}

      </style>
      <section className="about-section position-relative" id={id}>
      {/* Background Effects */}
      <div className="about-background-effects">
        <motion.div 
          className="about-blob about-blob-1"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="about-blob about-blob-2"
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <Container className="position-relative">
        {/* Enhanced Heading */}

         <motion.div
                    className="resume-header"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="resume-title">
                      About  <span style={{ color: color.primary }}>Me</span>
                    </h2>
                    <p className="resume-subtitle">
            Get to know more about who I am, what I do, and what I'm passionate about
                    </p>
                  </motion.div>
      

        <Row className="align-items-center ">
          {/* Image Column */}
          <Col lg={6} md={12} className={`mb-4 mb-lg-0 ${isMobile ? 'text-center' : ''}`}>
            <motion.div
              className="about-image-wrapper"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              {...floatingAnimation}
            >
              <div className="about-image-container">
                <motion.img
                  src={about}
                  alt="Vishal Shivhare - About"
                  className="about-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Image Overlays */}
                <div className="about-image-overlay" />
                <div className="about-image-frame" />
                
                {/* Decorative Elements */}
                <motion.div 
                  className="about-decoration-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="about-decoration-2"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </Col>

          {/* Content Column */}
          <Col lg={6} md={12}>
            <motion.div
              className="about-content"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Main Title */}
              <motion.div variants={textVariants} className="mb-4">
                <span className="about-title">
                  Hi There! I'm{" "}
            
                </span>
                      <motion.span
                    className="about-name about-title"
                    style={{ color: color.primary }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Vishal Shivhare
                  </motion.span>
                <motion.h5 
                  className="about-role"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: `linear-gradient(90deg, ${color.primary}, #ffffff, ${color.primary})`,
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Front End Developer
                </motion.h5>
              </motion.div>

              {/* Description */}
              <motion.div variants={textVariants} className="mb-4">
                <p className="about-description">
                  I am a passionate Front-End Developer with a strong focus on creating 
                  engaging and interactive user interfaces. My mission is to craft 
                  digital experiences that not only look stunning but also provide 
                  seamless functionality, guiding users through their journey and 
                  helping them achieve their goals with ease and satisfaction.
                </p>
              </motion.div>

              {/* Personal Details */}
              <motion.div variants={textVariants} className="about-details mb-4">
                {data.map((item, index) => (
                  <motion.div
                    key={item.key}
                    className="about-detail-item"
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="detail-icon">
                      <Icon icon={item.icon} />
                    </div>
                    <div className="detail-content">
                      <span className="detail-key">{item.key}:</span>
                      <span className="detail-value">{item.value}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Button */}
              <motion.div 
                variants={textVariants}
                className="about-actions"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    btnName="Download CV"
                    btnclass="about-cv-btn"
                  />
                </motion.div>
                
                <motion.button
                  className="about-contact-btn ms-3"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 25px ${color.primary}40`
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon="material-symbols:message" className="me-2" />
                  Let's Talk
                </motion.button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>



    
      </Container>
    </section>
    </>
    
  );
}