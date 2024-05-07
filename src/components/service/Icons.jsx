import React from "react";
import "./icons.css";
import { Link } from "react-router-dom";
const Icons = ({ src, title }) => {
  return (
    <div className="icons">
      <img src={src} alt="icons" />
      <Link className="nav-link" to="/">
        <h6>{title}</h6>
      </Link>
    </div>
  );
};

export default Icons;
