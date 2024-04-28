import React from "react";
import "./aboutus.css";
const AboutUs = () => {
  const AboutUs = [
    {
      title: "Browse portfolios",
      src: "https://www.f-cdn.com/assets/main/en/assets/home/benefits/browse-portfolios-v2.svg",
      descriptions:
        "Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.",
    },
    {
      title: "View bids",
      src: "https://www.f-cdn.com/assets/main/en/assets/home/benefits/view-bids-v2.svg",
      descriptions:
        "Receive free bids from our talented freelancers within seconds.",
    },
    {
      title: "Live chat",
      src: "https://www.f-cdn.com/assets/main/en/assets/home/benefits/live-chat-v2.svg",
      descriptions:
        "You can live chat with your freelancers to get constant updates on the progress of your work.",
    },
    {
      title: "24/7 support",
      src: "https://www.f-cdn.com/assets/main/en/assets/home/benefits/support-v2.svg",
      descriptions:
        "We're always here to help. Our support consists of real people who are available 24/7.",
    },
  ];
  return (
    <section id="About-Us">
      <div className="container">
        <div className="row">
          <div className="about-content">
            <div className="content__heading">
              <h1>What's great about it?</h1>
            </div>
            <div className="content__single">
              {AboutUs.map((data, index) => (
                <div key={index} className="single">
                  <div className="single__top">
                    <img src={data.src} alt="single" />
                    <h3>{data.title}</h3>
                  </div>
                  <div className="single__bottom">
                    <p>{data.descriptions}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
