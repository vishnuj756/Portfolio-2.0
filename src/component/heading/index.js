import React from "react";
import color from "../../utils/color";
import { motion } from "framer-motion"; // Importing Framer Motion
import useResponsive from "../../utils/useResposnsive";
const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and slightly to the left
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }, // Animate to visible with a slight slide-in
};
export default function Heading(props) {
  const {deviceType}=useResponsive()
  const { name } = props;
  return (
    <motion.div
      className="position-relative text-center"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className="mt-5 mb-3" style={{ fontSize: deviceType==="mobile"?50:100, opacity: 0.1 }}>
        {name}
      </h1>
      <div
        className="position-absolute child-heading"
        style={{ top: deviceType==="mobile"?"0rem":"1rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <h2 style={{ color: color.primary }}>{name}</h2>
      </div>
    </motion.div>
  );
}
