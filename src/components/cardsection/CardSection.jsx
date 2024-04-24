import React from "react";
import "./cardSection.css";
import card1 from "../../assets/images/1817900-medicare.jpg";
const CardSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid-card">
          <div className="card card-one">
            <img className="img-fluid" src={card1} alt="" />
            <div className="card-hover">
              <div className="row justify-content-center align-items-center">
                <div className="col">
                  <h6>AI generated art.</h6>
                  <p>$200 USD in 7 days</p>
                </div>
                <div className="col">
                  <a
                    className="btn-five p-2 wow fadeInUp"
                    data-wow-delay="0.6s"
                    href="/register"
                  >
                    Visit more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-tow">
            <img className="img-fluid" src={card1} alt="" />
            <div className="card-hover">
              <div className="row justify-content-center align-items-center">
                <div className="col">
                  <h6>AI generated art.</h6>
                  <p>$200 USD in 7 days</p>
                </div>
                <div className="col">
                  <a
                    className="btn-five p-2 wow fadeInUp"
                    data-wow-delay="0.6s"
                    href="/register"
                  >
                    Visit more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-there">
            <img className="img-fluid" src={card1} alt="" />
            <div className="card-hover">
              <div className="row justify-content-center align-items-center">
                <div className="col">
                  <h6>AI generated art.</h6>
                  <p>$200 USD in 7 days</p>
                </div>
                <div className="col">
                  <a
                    className="btn-five p-2 wow fadeInUp"
                    data-wow-delay="0.6s"
                    href="/register"
                  >
                    Visit more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-for">
            <img className="img-fluid" src={card1} alt="" />
            <div className="card-hover">
              <div className="row justify-content-center align-items-center">
                <div className="col">
                  <h6>AI generated art.</h6>
                  <p>$200 USD in 7 days</p>
                </div>
                <div className="col">
                  <a
                    className="btn-five p-2 wow fadeInUp"
                    data-wow-delay="0.6s"
                    href="/register"
                  >
                    Visit more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-five">
            <img className="img-fluid" src={card1} alt="" />
            <div className="card-hover">
              <div className="row justify-content-center align-items-center">
                <div className="col">
                  <h6>AI generated art.</h6>
                  <p>$200 USD in 7 days</p>
                </div>
                <div className="col">
                  <a
                    className="btn-five p-2 wow fadeInUp"
                    data-wow-delay="0.6s"
                    href="/register"
                  >
                    Visit more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
