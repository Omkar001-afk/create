import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Ab } from "../../Style/style_compo";
import Toggle from "../../Toggle/Toggle";
import { scrollAni } from "../../Animate/Anim";
import { useScroll } from "../../Animate/scroll/scroll";
const Faq = () => {
  const [element, controls] = useScroll();
  return (
    <FAQ variants={scrollAni} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any questions?<span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i Start?">
          <div className="ans">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="ans">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
        <Toggle title="Differrent Payment Methods">
          <div className="ans">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
        <Toggle title="Dail Schedule">
          <div className="ans">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};
const FAQ = styled(Ab)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .ans {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Faq;
