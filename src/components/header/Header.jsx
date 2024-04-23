import React from "react";
import Nav from "./Nav";
import logo from "../../assets/images/logo/logo.webp";
import "./header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand logo" href="/">
          <img
            src={logo}
            className="img-fluid"
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav />
          <div className="right-widget ms-auto ms-xl-5 order-lg-3">
            <ul className="d-flex align-items-center style-none">
              <li>
                <a
                  href="/"
                  className="fw-500 login-btn-two"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </a>
              </li>
              <li className="d-none d-lg-block ms-4">
                <a className="btn-five" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
