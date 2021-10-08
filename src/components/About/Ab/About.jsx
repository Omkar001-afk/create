import React from "react";
import home1 from "../../../img/home1.png";
import { Ab, Desc, Hide, Img } from "../../Style/style_compo";
import { motion } from "framer-motion";
import { fade, imageAnim, titleAnim } from "../../Animate/Anim";
import Wave from "../../Animate/Wave";

const About = () => {
  //framer motion

  return (
    <Ab>
      <Desc>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photograhy or videography ideas. We have
          professionals with amazing skills.{" "}
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>{" "}
      </Desc>
      <Img>
        <motion.img variants={imageAnim} src={home1} alt="Camera-man" />
      </Img>
      <Wave />
    </Ab>
  );
};

export default About;
