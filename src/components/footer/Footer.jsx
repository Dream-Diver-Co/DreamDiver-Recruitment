import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo/logo.webp";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";
import { MdOutlineLanguage } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top--left">
          <img className="img-fluid" src={logo} alt="logo" />
          <p>
            <MdOutlineLanguage /> &nbsp; US (International)/Engpsh
          </p>
          <p>
            <IoIosHelpCircleOutline /> &nbsp; Help & Support
          </p>
        </div>
        <div className="footer__top--right">
          <div className="footer__top--right-one">
            <h4>Freelancer</h4>
            <p>Categories</p>
            <p>Categories</p>
            <p>Projects</p>
            <p>Contests</p>
            <p>Freelancers</p>
            <p>Enterprise</p>
            <p>Preferred Freelancer</p>
            <p>Program</p>
            <p>Project Management</p>
            <p>Local Jobs</p>
            <p>Showcase</p>
            <p>API for Developers</p>
            <p>Get Verified</p>
          </div>
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
          <div className="footer__top--right-three">
            <h4>Terms</h4>
            <p>Privacy Popcy</p>
            <p>Terms and Conditions</p>
            <p>Copyright Popcy</p>
            <p>Code of Conduct</p>
            <p>Fees and Charges</p>
          </div>
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
      <hr />
      <div className="footer__bottom">
        <h6>
          47,595,510 <br /> Registered Users
        </h6>
        <h6>
          18,611,020 <br /> Total Jobs Posted
        </h6>
        <p>
          Freelancer ® is a registered Trademark of Freelancer Technology Pty
          pmited (ACN 141 959 042) <br />
          Copyright © 2020 Freelancer Technology Pty pmited (ACN 141 959 042)
        </p>
      </div>
    </div>
  );
};

export default Footer;
