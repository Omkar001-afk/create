import React from "react";
import About from "../components/About/Ab/About";
import Faq from "../components/About/Faq/Faq";
import Services from "../components/About/Services/Services";
//animations
import { motion } from "framer-motion";
import { PageAnim } from "../components/Animate/Anim";

const AboutUs = () => {
  return (
    <motion.div variants={PageAnim} initial="hidden" animate="show" exit="exit">
      <About />
      <Services />
      <Faq />
    </motion.div>
  );
};

export default AboutUs;
