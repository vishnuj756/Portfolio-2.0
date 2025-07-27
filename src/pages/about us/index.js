import React from "react";
import { Container } from "react-bootstrap";
import color from "../../utils/color";
import about from "../../assests/images/about.jpg";
import Button from "../../component/button";
import Heading from "../../component/heading";
import { motion } from "framer-motion"; // Importing Framer Motion

export default function About() {
  const data = [
    { key: "D.O.B", value: "Aug 17, 2000" },
    { key: "Phone", value: "+91 8871942880" },
    { key: "Email", value: "vishnuj@gmail.com" },
    { key: "From", value: "121 Morena, Madhya Pradesh India" },
    { key: "Language", value: "English, Hindi" },
    { key: "Freelance", value: "Available" },
  ];

  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <Container>
      <Heading name="ABOUT ME" />
      <div className="row pb-3">
        <motion.div
          className="col-lg-6 col-md-12"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        >
          <motion.img
            src={about}
            alt="About"
            style={{ width: "100%" }}
            variants={imageVariants}
          />
        </motion.div>
        <motion.div
          className="col-lg-6 col-md-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        >
          <div className="ps-4">
            <h2
              style={{ fontSize: 34, fontWeight: 400 }}
              className="text-white text-start"
            >
              Hi There! I'm Vishal Shivhare
            </h2>
            <h5 className="mt-2 text-start" style={{ color: color.primary }}>
              Front End Developer
            </h5>
            <p className="text-start mt-3">
              I am a Front-End Developer with a strong focus on creating
              engaging and interactive user interfaces. Front-end development
              aims to attract, inspire, and guide users through a seamless
              digital experience, motivating them to interact with the content
              and achieve their goals, ultimately making a positive impact.
            </p>
            {data.map((item) => (
              <motion.div
                className="row"
                key={item.key}
                initial="hidden"
                whileInView="visible" // Trigger animation when in view
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="col-3 text-start">
                  <p>{item.key}</p>
                </div>
                <div className="col-1">:</div>
                <div className="col-8 text-start">{item.value}</div>
              </motion.div>
            ))}
            <div className="d-flex mt-3">
              <Button
                btnName="Download Cv"
                btnclass="rounded-pill"
                style={{ backgroundColor: color.primary }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
