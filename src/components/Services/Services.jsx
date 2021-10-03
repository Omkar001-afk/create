import React from "react";
import home2 from "../../img/home2.png";
import clock from "../../img/clock.svg";
import diaph from "../../img/diaphragm.svg";
import money from "../../img/money.svg";
import tw from "../../img/teamwork.svg";
const Services = () => {
  return (
    <div className="services">
      <div className="desc">
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h2>Efficent</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>{" "}
          <div className="card">
            <div className="icon">
              <img src={diaph} alt="diaph" />
              <h2>Diaphragm</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>{" "}
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h2>Affordable</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>{" "}
          <div className="card">
            <div className="icon">
              <img src={tw} alt="tw" />
              <h2>TeamWork</h2>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={home2} alt="" />
      </div>
    </div>
  );
};

export default Services;
