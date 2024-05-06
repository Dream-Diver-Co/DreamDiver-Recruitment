import React, { useState } from "react";
import logo1 from "../../assets/images/logo/FindJob.webp";
import logo2 from "../../assets/images/logo/FindEmployee.webp";
import logo3 from "../../assets/images/logo/Welcome.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const [slides] = useState([
    { id: "0", image: logo1, title: "no" },
    { id: "1", image: logo2, title: "no" },
    { id: "2", image: logo3, title: "no" },
  ]);

  return (
    <div className="hero">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img className="img-fluid w-100" src={slide.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
