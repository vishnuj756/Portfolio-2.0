import React from "react";
import Heading from "../../component/heading";
import { Container } from "react-bootstrap";
import color from "../../utils/color";
import { motion } from "framer-motion"; // Importing Framer Motion

export default function Skill() {
  const skills = [
    { name: "HTML", percentage: "95%" },
    { name: "CSS", percentage: "99%" },
    { name: "JavaScript", percentage: "96%" },
    { name: "React", percentage: "97%" },
    { name: "Material UI", percentage: "98%" },
    { name: "Bootstrap", percentage: "100%" },
    { name: "Framer Motion", percentage: "80%" },
    { name: "Python", percentage: "70%" },
  ];

  // Animation Variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts slightly below and faded out
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <Heading name="SKILLS" />
      <Container>
        <div className="row pb-3">
        <div className="col-lg-6 col-md-12 px-3">
  <h1 className="text-white mb-5">
    Skills & Technologies I Work With
  </h1>
  <p>
    I specialize in front-end development, building dynamic and interactive user interfaces using modern technologies. 
    My expertise includes React, Redux, API integration, and UI frameworks like Material UI and Bootstrap. 
    I have experience working with Firebase for authentication and database management, as well as using Framer Motion for smooth animations. 
    My goal is to create seamless, responsive, and high-performance web applications that enhance user experiences.
  </p>
</div>


          <div className="col-lg-6 col-md-12 px-3 mt-md-0 mt-sm-3">
            {skills.map((item, index) => (
              <motion.div
                className="row pb-1 mb-3 border-color mx-0"
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible" // Trigger animation on scroll
                viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
              >
                <div className="col-6 ps-0">
                  <h5 className="text-start text-white fs-6">{item.name}</h5>
                </div>
                <div className="col-6 pe-0">
                  <h5 className="text-end fs-6" style={{ color: color.primary }}>
                    {item.percentage}
                  </h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
