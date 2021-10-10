import React from "react";
import home2 from "../../../img/home2.png";
import clock from "../../../img/clock.svg";
import diaph from "../../../img/diaphragm.svg";
import money from "../../../img/money.svg";
import tw from "../../../img/teamwork.svg";
import { Ab, Desc, Img } from "../../Style/style_compo";
import styled from "styled-components";
import { fade } from "../../Animate/Anim";
import { useScroll } from "../../Animate/scroll/scroll";
const Services = () => {
  const [element, controls] = useScroll();
  return (
    <Service variants={fade} animate={controls} initials="hidden" ref={element}>
      <Desc>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>{" "}
          <Card>
            <div className="icon">
              <img src={diaph} alt="diaph" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>{" "}
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>{" "}
          <Card>
            <div className="icon">
              <img src={tw} alt="tw" />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Desc>
      <Img>
        <img src={home2} alt="" />
      </Img>
    </Service>
  );
};
const Service = styled(Ab)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default Services;
