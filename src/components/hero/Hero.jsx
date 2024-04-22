import React from "react";
import banner1 from "../../assets/images/banner/banner1.svg";
import banner2 from "../../assets/images/banner/banner2.svg";
import banner3 from "../../assets/images/banner/banner3.svg";
import partner1 from "../../assets/images/partner/partner1.webp";
import partner2 from "../../assets/images/partner/partner2.webp";
import partner3 from "../../assets/images/partner/partner3.webp";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-banner-three position-relative pt-120 md-pt-80 xs-pt-40 pb-80 lg-pb-20">
      <div className="img-box">
        <img
          alt="main-img"
          loading="lazy"
          width="730"
          height="613"
          decoding="async"
          data-nimg="1"
          className="lazy-img main-img"
          src={banner1}
        />
        <img
          alt="shape"
          loading="lazy"
          width="720"
          height="342"
          decoding="async"
          data-nimg="1"
          className="lazy-img shapes screen_01"
          src={banner2}
        />
        <img
          alt="tree_img"
          loading="lazy"
          width="203"
          height="177"
          decoding="async"
          data-nimg="1"
          className="lazy-img shapes screen_02 wow fadeInLeft"
          src={banner3}
        />
      </div>
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div
                className="slogan fw-500 mb-5 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                #1 Online Marketplace
              </div>
              <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                Find the talents for any job.
              </h1>
              <p
                className="text-lg mt-35 md-mt-30 mb-30 md-mb-20 pe-xl-5 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                Unlock your potential with quality job &amp;earn from world
                leading brands &amp;co.
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
    </div>
  );
};

export default Hero;
