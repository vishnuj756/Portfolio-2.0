import { Container } from "react-bootstrap";
import { motion } from "framer-motion"; // Importing Framer Motion
import Heading from "../../component/heading";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Service() {
  const data = [
    {
      name: "React",
      description:
        "A powerful JavaScript library for building user interfaces with reusable components and state management.",
      src: "teenyicons:react-outline",
    },
    {
      name: "Redux",
      description:
        "A state management library for JavaScript applications, commonly used with React to manage complex state efficiently.",
      src: "simple-icons:redux",
    },
    {
      name: "API Integration",
      description:
        "Experience in handling API requests using Axios and Fetch to interact with RESTful services and enhance application functionality.",
      src: "carbon:api",
    },
    {
      name: "Firebase",
      description:
        "A backend-as-a-service (BaaS) platform by Google, offering authentication, real-time database, and hosting solutions for web and mobile applications.",
      src: "mdi:firebase",
    },
    {
      name: "Angular",
      description:
        "A comprehensive framework for building dynamic single-page applications with TypeScript and modular architecture.",
      src: "teenyicons:angular-outline",
    },
    {
      name: "Material UI",
      description:
        "A popular React UI framework offering modern and customizable components based on Google's Material Design.",
      src: "devicon-plain:materialui",
    },
    {
      name: "Bootstrap",
      description:
        "A responsive CSS framework that simplifies web design with pre-styled components and grid systems.",
      src: "bi:bootstrap",
    },
    {
      name: "Framer Motion",
      description:
        "An animation library for React, enabling smooth and complex animations with simple syntax.",
      src: "tabler:brand-framer-motion",
    },
  ];
  
  

  // Variants for the container (for staggering)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of child elements
      },
    },
  };

  // Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 1.2 }, // Start from below and fade in
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <Container>
      <Heading name="SERVICE" className="my-3" />
      <motion.div
        className="row"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
         whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map((item, key) => (
          <motion.div
            className="col-lg-4 col-md-6"
            key={key}
            variants={itemVariants}
     
           
          >
            <div className="bg-dark mb-4 rounded-2 border-2 border-secondary hover-animation pt-4">
              <h2 className="text-white text-center mb-4">{item.name}</h2>
              <ul
                className="bg-dark p-4 pt-0"
                style={{
                  transition: "clip-path 0.1s ease",
                  listStyle: "none",
                }}
              >
                <li className="d-flex justify-content-center flex-column mb-2 hover-animation">
                  <div
                    className="bg-black rounded-circle mx-auto d-flex align-items-center justify-content-center icon-container"
                    style={{
                      height: 70,
                      width: 70,
                      border: "2px solid transparent",
                    }}
                  >
                    <Icon icon={item.src} className="fs-1 icon-text" />
                  </div>
                </li>
                <li>
                  <span className="mt-2 fs-6 text-center text-overflow">
                    {item.description}
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
