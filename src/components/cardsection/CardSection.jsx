import React from "react";
import "./cardSection.css";
import card1 from "../../assets/images/Jobs/1.png";
import card2 from "../../assets/images/Jobs/2.png";
import card3 from "../../assets/images/Jobs/3.png";
import card4 from "../../assets/images/Jobs/4.png";
import card5 from "../../assets/images/Jobs/5.png";
const CardSection = () => {
  const makeYourDreamCard = [
    {
      title: "AI generated art.",
      price: "$200 USD in 7 days",
      image: card1,
      link: "/",
    },
    {
      title: "AI generated art.",
      price: "$200 USD in 7 days",
      image: card2,
      link: "/",
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
    <section id="buyer">
      <div className="container">
        <h1 className="py-3" style={{ color: "#005025" }}>
          Make your dreams a reality
        </h1>
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

export default CardSection;
