import React, { useState } from "react";
import Nav from "./Nav";
import logo from "../../assets/images/logo/logo12.png";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavBg);
  return (
    <nav
      className={
        navbar ? "navbar active-bg navbar-expand-lg" : "navbar navbar-expand-lg"
      }
    >
      <div className="container">
        <a className="navbar-brand logo" href="/">
          <img
            src={logo}
            className="img-fluid logo-img"
            alt="dream diver recruitment logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <Nav />
          <div className="right-widget ms-xl-5 order-lg-3">
            <ul className="d-flex justify-content-end style-none">
              <li>
                <Link to="/signin" className="fw-500 login-btn-two login">
                  Login
                </Link>
              </li>
              <li className=" d-lg-block ms-4">
                <Link className="btn-five" to="/signup">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
