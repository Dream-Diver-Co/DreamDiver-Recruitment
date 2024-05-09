import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row pt-3 justify-content-center">
          <div className="col col-md-4">
            <div className="footer__top--right-two">
              <h4>
                <Link className="text-white" to="/">
                  {" "}
                  About{" "}
                </Link>
              </h4>
              <p>
                <Link className="text-white" to="/">
                  About Us
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/">
                  How it Works
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/">
                  Security
                </Link>
              </p>
            </div>
          </div>
          <div className="col col-md-4">
            <div className="footer__top--right-three">
              <h4>Terms</h4>
              <p>
                {" "}
                <Link className="text-white" to="/">
                  Privacy
                </Link>
              </p>
              <p>
                {" "}
                <Link className="text-white" to="/">
                  Terms and Conditions
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/">
                  Copyright
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/">
                  {" "}
                  Code of Conduct{" "}
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/">
                  Fees and Charges
                </Link>
              </p>
            </div>
          </div>
          <div className="col col-md-4">
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
                <Link className="text-white m-2" to="/">
                  <FaFacebook />
                </Link>
                <Link className="text-white m-2" to="/">
                  <AiFillTwitterCircle />
                </Link>
                <Link className="text-white m-2" to="/">
                  <RiYoutubeFill />
                </Link>
                <Link className="text-white m-2" to="/">
                  <FaInstagram />
                </Link>
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
