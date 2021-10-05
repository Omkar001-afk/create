import React from "react";
import home1 from "../../img/home1.png";
import { Ab, Desc, Hide, Img } from "../Style/style_compo";

const About = () => {
  return (
    <Ab>
      <Desc>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photograhy or videography ideas. We have
          professionals with amazing skills.{" "}
        </p>
        <button>Contact Us</button>{" "}
      </Desc>
      <Img>
        <img src={home1} alt="Camera-man" />
      </Img>
    </Ab>
  );
};

export default About;
