import React from "react";
import "./cardSection.css";
import card1 from "../../assets/images/1817900-medicare.jpg";
const CardSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid-card">
          <div className="card-one">
            <img className="img-fluid" src={card1} alt="" />
          </div>
          <div className="card-tow">
            <img className="img-fluid" src={card1} alt="" />
          </div>
          <div className="card-there">
            <img className="img-fluid" src={card1} alt="" />
          </div>
          <div className="card-for">
            <img className="img-fluid" src={card1} alt="" />
          </div>
          <div className="card-five">
            <img className="img-fluid" src={card1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
