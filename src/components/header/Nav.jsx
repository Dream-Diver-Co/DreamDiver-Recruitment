import React, { useState } from "react";
import PropTypes from "prop-types";
import Manu0 from "./Manu0";
import Manu1 from "./Manu1.jsx";
import "./nav.css";
const Nav = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  // const [popoverHeight, setPopoverHeight] = useState(null);
  return (
    <ul
      className="navbar-nav m-auto mb-2 mb-lg-0"
      onMouseLeave={() => setHovering(null)}
    >
      <li className="nav-item">
        <a
          className="nav-link active"
          href="/"
          onMouseEnter={(event) => {
            setHovering(0);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          aria-current="page"
        >
          Find Your Dream jobs
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/"
          onMouseEnter={(event) => {
            setHovering(1);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          className="nav-link"
        >
          Find Your Perfect employ
        </a>
      </li>
      {typeof hovering === "number" && (
        <div
          style={{
            left: popoverLeft || 0,
          }}
          className="position-absolute SiteMenu SiteHeader__menu"
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
