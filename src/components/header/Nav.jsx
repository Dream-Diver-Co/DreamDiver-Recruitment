import React, { useState } from "react";
import PropTypes from "prop-types";
import Manu0 from "./Manu0";
import Manu1 from "./Manu1.jsx";
import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  // const [popoverHeight, setPopoverHeight] = useState(null);
  return (
    <ul
      className="navbar-nav  mb-2 mb-lg-0"
      onMouseLeave={() => setHovering(null)}
    >
      <li className="nav-item">
        <Link
          className="nav-link "
          to="/employ"
          onMouseEnter={(event) => {
            setHovering(0);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          aria-current="page"
        >
          Find Your Dream jobs
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/recruiter"
          onMouseEnter={(event) => {
            setHovering(1);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          className="nav-link"
        >
          Find Your Perfect employ
        </Link>
      </li>
      {typeof hovering === "number" && (
        <div
          style={{
            left: popoverLeft || 0,
          }}
          className="SiteMenu SiteHeader__menu"
        >
          {hovering === 0 ? <Manu0 /> : hovering === 1 ? <Manu1 /> : null}
        </div>
      )}
    </ul>
  );
};

Nav.propTypes = {
  hovering: PropTypes.number,
  popoverLeft: PropTypes.number,
  popoverHeight: PropTypes.number,
};

export default Nav;
