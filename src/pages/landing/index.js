import React from "react";
import { Container } from "react-bootstrap";
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
import useResponsive from "../../utils/useResposnsive";

export default function Home() {
  const {deviceType}=useResponsive();
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts slightly below and faded out
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };
  return (
    <>
      <section className="bg-sky mb-5 overflow-hidden">
        <div className="d-flex position-relative">
          <div
            className="position-absolute"
            style={{ left: "12.2rem", top: "47rem" }}
          >
            <Container>
              <div
                className="d-flex gap-4 h-25 p-2 bg-dark radius social-link"
                style={{ minWidth: "32rem" }}
              >
                <div
                  className="bg-black rounded-circle d-flex justify-content-center align-items-center"
                  style={{ height: 70 }}
                >
                  <Icon icon="ion:social-linkedin" className="fs-1" />
                  <span className="icon-text"></span>
                </div>

                <div
                  className="bg-black rounded-circle d-flex justify-content-center align-items-center"
                  style={{ height: 70 }}
                >
                  <Icon icon="fe:instagram" className="fs-1 icon-text" />
                  <span className="icon-text"></span>
                </div>

                <div
                  className="bg-black rounded-circle d-flex justify-content-center align-items-center"
                  style={{ height: 70 }}
                >
                  <Icon icon="icon-park-outline:github" className="fs-1 icon-text" />
                  <span className="icon-text"></span>
                </div>
              </div>
            </Container>
          </div>
          <motion.img
            src={ProfileImage}
            alt=""
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5 }}
            style={{ width: 570, height: 850, objectFit: "cover" }}
            className={`position-absolute end-0 ${deviceType==="mobile"?"d-none":"d-md-none d-lg-block"}`}
          />
        </div>
        <Container
          className="d-flex align-items-center"
          style={{ height: deviceType==="mobile"?"auto":850 }}
        >
          <div className="d-flex flex-column align-item-center">
            <motion.h3
             variants={itemVariants}
          whileInView="visible" 
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
              style={{ color: color.primary }}
              className="nameHeading animate__backInLeft"
            >
              Hello, I’m
            </motion.h3>

            <motion.h1
              className="text-white name"
            
              variants={itemVariants}
            
          whileInView="visible" 
            initial="hidden"
            
            viewport={{ once: true, amount: 0.2 }}
            >
              Vishal <br />
              Shivhare
            </motion.h1>
            <h3 className="mt-2">Front End Developer</h3>
            <Button
              btnName="Hire Me"
              btnclass={`fs-6 border-0 rounded-5  mt-5 text-black ${deviceType==="mobile"?"w-auto":"w-25"}`}
              style={{ background: color.primary }}
            />
          </div>
        </Container>
      </section>
      {/* <About/>
      <Service/>
      <Skill/>
      <Resume/>
      <Contact/> */}
    </>
  );
}
