import React from "react";
import "./jobs.css";
const Jobs = ({ title, img }) => {
  return (
    <div className="jobs">
      <img src={img} alt="arrow" />
      <h5>{title}</h5>
    </div>
  );
};

export default Jobs;
