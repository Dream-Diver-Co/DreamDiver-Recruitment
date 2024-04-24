import React from "react";
import "./cardSection.css";
import card1 from "../../assets/images/1817900-medicare.jpg";
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
      image: card1,
      link: "/",
    },
    {
      title: "AI generated art.",
      price: "$200 USD in 7 days",
      image: card1,
      link: "/",
    },
    {
      title: "AI generated art.",
      price: "$200 USD in 7 days",
      image: card1,
      link: "/",
    },
    {
      title: "AI generated art.",
      price: "$200 USD in 7 days",
      image: card1,
      link: "/",
    },
  ];
  return (
    <section>
      <div className="container">
        <h1 style={{ color: "#005025" }}>Make your dreams a reality</h1>
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
