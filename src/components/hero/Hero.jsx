import React from "react";
// import partner1 from "../../assets/images/partner/partner1.webp";
// import partner2 from "../../assets/images/partner/partner2.webp";
// import partner3 from "../../assets/images/partner/partner3.webp";
// import bannerVideo from "../../assets/images/heroBaner/Recruitment_Hero.mp4";
import logo from "../../assets/images/logo/FindJob.webp";
import "./hero.css";
const Hero = () => {
  return (
    <div className=" hero ">
      <div className="video">
        {/* <video autoPlay muted loop id="myVideo">
          <source src={bannerVideo} type="video/mp4" />
        </video> */}
        <img src={logo} className="img-fluid" alt="" />
      </div>
      {/* <div className="content">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div
                  className="slogan fw-500 mb-5 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h3>Online Marketplace</h3>
                </div>
                <h1 className="wow text-5xl fadeInUp" data-wow-delay="0.4s">
                  Find the talents <br /> for any job.
                </h1>
                <p
                  className="text-lg mt-35 md-mt-30 mb-30 md-mb-20 pe-xl-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  Find your quality jobs &amp;earn from world leading brands
                  &amp;co.
                </p>
                <a
                  className="btn-five wow fadeInUp "
                  data-wow-delay="0.6s"
                  href="/register"
                >
                  Post a Job
                </a>
                <div
                  className="d-flex flex-wrap align-items-center mt-70 lg-mt-50 md-mt-40 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="partner-title">Trusted by:</div>
                  <img
                    alt="media-img"
                    loading="lazy"
                    width="108"
                    height="34"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img ms-2 me-4"
                    src={partner1}
                  />
                  <img
                    alt="media-img"
                    loading="lazy"
                    width="23"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img me-4"
                    src={partner2}
                  />
                  <img
                    alt="media-img"
                    loading="lazy"
                    width="83"
                    height="22"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    src={partner3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
