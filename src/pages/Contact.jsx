import React from "react";
//animations
import { motion } from "framer-motion";
import { PageAnim } from "../components/Animate/Anim";

const Contact = () => {
  return (
    <motion.div
      variants={PageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>Hello Contact Us</h1>
    </motion.div>
  );
};

export default Contact;
