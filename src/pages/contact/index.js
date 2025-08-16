import React from "react";
import Heading from "../../component/heading";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "../../component/button";
import color from "../../utils/color";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion"; // Import Framer Motion
import useResponsive from "../../utils/useResposnsive";

export default function Contact() {
  const{deviceType}=useResponsive()
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  const handleInputChange = (fieldName) => {
    trigger(fieldName);
  };

  const contactInformation = [
    {
      type: "Email",
      icon: "lucide:mail",
      value: "vishnuj756@mail.com",
    },
    {
      type: "Phone",
      icon: "lucide:phone",
      value: "+91 8871942880",
    },
    {
      type: "Address",
      icon: "lucide:map-pin",
      value: "Vijay Nagar, Indore, India",
    },
  ];

  // Animation Variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <>
      <Heading name="CONTACT" />
      <Container className="mb-3">
        <Row >
          <Col className="px-3" md={6} sm={12}>
            <motion.h2
              className="text-white mb-3"
              initial="hidden"
              whileInView="visible"
              variants={formVariants}
              viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the element is visible
            >
              Just say Hello
            </motion.h2>
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial="hidden"
              whileInView="visible"
              variants={formVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Name Field */}
              <div className="input-group" style={{ marginBottom: "2rem" }}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Your Name"
                  className={`custom-input shadow-none ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                    onChange: () => handleInputChange("name"),
                  })}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
              {/* Email Field */}
              <div className="input-group" style={{ marginBottom: "2rem" }}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Your Email"
                  className={`custom-input shadow-none ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                    onChange: () => handleInputChange("email"),
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
              {/* Phone Field */}
              <div className="input-group" style={{ marginBottom: "2rem" }}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Your Phone"
                  className={`custom-input shadow-none ${
                    errors.phone ? "is-invalid" : ""
                  }`}
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                    onChange: () => handleInputChange("phone"),
                  })}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone.message}</div>
                )}
              </div>
              {/* Message Field */}
              <div className="input-group" style={{ marginBottom: "2rem" }}>
                <Form.Control
                  size="lg"
                  as="textarea"
                  placeholder="Your Message"
                  className={`custom-input shadow-none ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  style={{ height: "100px" }}
                  id="message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters long",
                    },
                    onChange: () => handleInputChange("message"),
                  })}
                />
                {errors.message && (
                  <div className="invalid-feedback">
                    {errors.message.message}
                  </div>
                )}
              </div>
              <div className={`d-flex justify-content-start ${deviceType==="mobile" && 'mb-3'}`}>
                <Button
                  btnName="Send Message"
                  btnclass="rounded-pill py-3"
                  style={{ backgroundColor: color.primary }}
                  type="submit"
                />
              </div>
            </motion.form>
          </Col>
          <Col className="px-3"  md={6} sm={12}>
            <motion.h2
              className="text-white mb-4"
              initial="hidden"
              whileInView="visible"
              variants={formVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              Contact Info
            </motion.h2>
            <motion.h6
              className="mb-4"
              initial="hidden"
              whileInView="visible"
              variants={formVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ligula nulla tincidunt id faucibus sed suscipit feugiat.
            </motion.h6>
            {contactInformation.map((item, key) => {
              return (
                <motion.div
                  key={key}
                  className="mb-3 hover-animation"
                  initial="hidden"
                  whileInView="visible"
                  variants={contactInfoVariants}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Row>
                    <Col className="col-2">
                      <div
                        className="bg-black icon-container rounded-circle mx-auto d-flex align-items-center justify-content-center"
                        style={{
                          height: 50,
                          width: 50,
                          border: "1px solid transparent",
                        }}
                      >
                        <Icon icon={item.icon} className="fs-5 " />
                      </div>
                    </Col>
                    <Col className="col-10" style={{ cursor: "pointer" }}>
                      <h5 className={`text-white  mb-1 ${deviceType==="mobile"?"text-start":""}`}>{item.type}</h5>
                      <p className={deviceType==="mobile"?"text-start":""}>{item.value}</p>
                    </Col>
                  </Row>
                </motion.div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}
