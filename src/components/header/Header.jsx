import React from "react";
import Nav from "./Nav";
import logo from "../../assets/images/logo/logo.webp";
import "./header.css";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container">
        <a class="navbar-brand logo" href="/">
          <img
            src={logo}
            className="img-fluid"
            alt="dream diver recruitment logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav />
          <div className="">
            <a href="/"> login </a>
            <span>|</span>
            <a href="/"> register </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
