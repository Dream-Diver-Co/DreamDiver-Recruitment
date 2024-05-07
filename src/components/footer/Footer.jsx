import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-md-3">
            <div className="footer__top--right-one">
              <h4>Freelancer</h4>
              <p>Categories</p>
              <p>Projects</p>
              <p>Contests</p>
              <p>Enterprise</p>
              <p>Local Jobs</p>
              <p>Get Verified</p>
            </div>
          </div>
          <div className="col col-md-3">
            <div className="footer__top--right-two">
              <h4>About</h4>
              <p>About Us</p>
              <p>How it Works</p>
              <p>Security</p>
              <p>Investor</p>
              <p>Sitemap</p>
              <p>Quotes</p>
              <p>News</p>
            </div>
          </div>
          <div className="col col-md-3">
            <div className="footer__top--right-three">
              <h4>Terms</h4>
              <p>Privacy </p>
              <p>Terms and Conditions</p>
              <p>Copyright</p>
              <p>Code of Conduct</p>
              <p>Fees and Charges</p>
            </div>
          </div>
          <div className="col col-md-3">
            <div className="footer__top--right-four">
              <h4>Apps</h4>
              <img
                src="https://damassets.autodesk.net/content/dam/autodesk/www/products/autocad-mobile/fy18/general/appstore-google.png"
                alt="apple"
              />
              <br />
              <img
                src="https://damassets.autodesk.net/content/dam/autodesk/www/products/autocad-mobile/fy18/general/appstore-itunes.png"
                alt="apple"
              />
              <p>
                <FaFacebook />
                <AiFillTwitterCircle />
                <RiYoutubeFill />
                <FaInstagram />
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="dream-diver" className=" w-100 text-white py-2">
        <div className="container">
          <p className="text-end mb-0">
            Developed
            <a
              style={{ cursor: "default" }}
              target="blank"
              href="https://www.linkedin.com/in/sakib6619/"
              className="text-light cursor-none"
            >
              {" "}
              by
            </a>{" "}
            <a
              href="https://dreamdiver.nl/"
              rel="noreferrer"
              target="blank"
              className="text-dreamDiver"
            >
              DREAM DIVER
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
