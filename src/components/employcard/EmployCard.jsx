import React from "react";
import card1 from "../../assets/images/Employee/Employee1.png";
import card2 from "../../assets/images/Employee/employee2.png";
import card3 from "../../assets/images/Employee/employee3.png";
import card4 from "../../assets/images/Employee/employee4.png";
import card5 from "../../assets/images/Employee/employee5.png";
import "./empoycard.css";
const EmployCard = () => {
  const makeYourDreamCard = [
    {
      title: "Hire Our Chef",
      price: "Negociable",
      image: card1,
      link: "https://foody-moody-restaurant.web.app/shef",
    },
    {
      title: "Web Designer",
      price: "$200 USD in 7 days",
      image: card2,
      link: "https://dreamdiver.nl/web_design",
    },
    {
      title: "AI generated art.",
      price: "$200 USD in 7 days",
      image: card3,
      link: "/",
    },
    {
      title: "AI generated art.",
      price: "$200 USD in 7 days",
      image: card4,
      link: "/",
    },
    {
      title: "AI generated art.",
      price: "$200 USD in 7 days",
      image: card5,
      link: "/",
    },
  ];
  return (
    <section id="employ">
      <div className="container">
        <h1 style={{ color: "#005025" }}>Find Your perfect Employ</h1>
        <div className="grid-card">
          {makeYourDreamCard.map((data, index) => (
            <div key={index} className={`card card${index}`}>
              <img className="img-fluid" src={data.image} alt="" />
              <div className="card-hover">
                <div className="row justify-content-center align-items-center">
                  <div className="col">
                    <h6>{data.title}</h6>
                    <p>{data.price}</p>
                  </div>
                  <div className="col">
                    <a
                      className="btn-five p-2 wow fadeInUp"
                      data-wow-delay="0.6s"
                      href={data.link}
                    >
                      Visit more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default EmployCard;
