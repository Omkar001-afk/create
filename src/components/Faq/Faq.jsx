import React from "react";
import styled from "styled-components";
import { Ab } from "../Style/style_compo";
const Faq = () => {
  return (
    <FAQ>
      <h2>
        Any questions?<span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i Start?</h4>
        <div className="ans">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products do you offer?</h4>
        <div className="ans">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>{" "}
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Differrent Payment Methods</h4>
        <div className="ans">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>{" "}
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Dail Schedule</h4>
        <div className="ans">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>{" "}
        <div className="faq-line"></div>
      </div>
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
