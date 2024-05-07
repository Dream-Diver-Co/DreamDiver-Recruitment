import React from "react";
import "./jobs.css";
import { Link } from "react-router-dom";
const Jobs = ({ title, img }) => {
  return (
    <div className="jobs">
      <img src={img} alt="arrow" />
      <Link className="nav-link" to="/">
        <h5>{title}</h5>
      </Link>
    </div>
  );
};

export default Jobs;
