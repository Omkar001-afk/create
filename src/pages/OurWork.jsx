import React from "react";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
//animations
import { motion } from "framer-motion";
import { fade, imageAnim, lineAni, PageAnim } from "../components/Animate/Anim";
import { useScroll } from "../components/Animate/scroll/scroll";
import ScrollTop from "../components/Style/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={PageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAni} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={imageAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade} ref={element} initial="hidden" animate={controls}>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAni} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={imageAnim} src={theracer} alt="theracer" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        variants={fade}
        ref={element2}
        initial="hidden"
        animate={controls2}
      >
        <motion.h2 variants={fade}>Good times</motion.h2>
        <motion.div variants={lineAni} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img variants={imageAnim} src={goodtimes} alt="goodtimes" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default OurWork;
