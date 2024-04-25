import React from "react";
import "./icons.css";
const Icons = ({ src, title }) => {
  return (
    <div className="icons">
      <img src={src} alt="icons" />
      <h6>{title}</h6>
    </div>
  );
};

export default Icons;
