import React from "react";
import Heading from "../../component/heading";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import color from "../../utils/color";
import { motion } from "framer-motion"; // Importing Framer Motion

export default function Resume() {
  const education = [
    {
      degree: "Master of Computer Application",
      year: "2022-2024",
      institution: "Acropolis Institute of Technology",
    },
    {
      degree: "Bachelor of Computer Application",
      year: "2019-2022",
      institution: "Victor Institute of Professional Studies",
    },
    {
      degree: "Higher Secondary",
      year: "2019",
      institution: "Sarojani Higher Secondary School",
    },
  ];

  // Animation Variants
  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Start hidden and slightly to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } }, // Animate to visible with a slight slide-in
  };

  return (
    <>
      <Heading name="RESUME" />
      <Container>
        <div className="row mb-4">
          {/* Education Section */}
          <div className="col-md-6  col-sm-12">
            <div className="d-flex gap-4 align-items-center">
              <Icon icon="icon-park-outline:toolkit" className="fs-1" />
              <h1 className="text-white" style={{ fontWeight: 300 }}>
                Education
              </h1>
            </div>
            <div className="border-start ps-4 ms-4">
              {education.map((item, index) => (
                <motion.div
                  className="mt-4 hover-eductation"
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of element is in view
                >
                  <div>
                    <h3 style={{ color: color.primary }}>{item.degree}</h3>
                    <h6 className="mt-2">{item.year}</h6>
                  </div>
                  <h3 className="my-3 text-white">{item.institution}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Error laboriosam nulla atque aspernatur? Suscipit consequatur
                    corrupti amet harum officia, commodi soluta odit eveniet quos
                    tenetur totam quaerat omnis obcaecati. Nihil.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="col-md-6 col-lg-12 mt-sm-4 mt-md-0">
            <div className="d-flex gap-4 align-items-center">
              <Icon icon="game-icons:graduate-cap" className="fs-1" />
              <h1 className="text-white" style={{ fontWeight: 300 }}>
                Experience
              </h1>
            </div>
            <div className="border-start ps-4 ms-4">
              <motion.div
                className="mt-4 hover-eductation"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Trigger animation on scroll
              >
                <div>
                  <h3 style={{ color: color.primary }}>Junior Software Engineer</h3>
                  <h6 className="mt-2">April 2024 - Present</h6>
                </div>
                <h3 className="my-3 text-white">Expertinasia Pvt Ltd</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
                  laboriosam nulla atque aspernatur? Suscipit consequatur corrupti
                  amet harum officia, commodi soluta odit eveniet quos tenetur
                  totam quaerat omnis obcaecati. Nihil.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
