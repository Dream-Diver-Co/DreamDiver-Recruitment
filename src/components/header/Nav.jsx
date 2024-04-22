import React, { useState } from "react";
import PropTypes from "prop-types";
import Manu0 from "./Manu0";
import Manu1 from "./Manu1.jsx";
import logo from "../../assets/images/logo/logo.png";
const Nav = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  // const [popoverHeight, setPopoverHeight] = useState(null);
  return (
    <nav onMouseLeave={() => setHovering(null)}>
      <div className="flex gap-5 justify-between items-center text-base tracking-wide whitespace-nowrap max-md:flex-wrap">
        <img
          loading="lazy"
          src={logo}
          className="shrink-0 self-stretch aspect-[2.04] w-[68px]"
          alt="lazy"
        />
        <a
          href="/"
          onMouseEnter={(event) => {
            setHovering(0);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          className="self-stretch my-auto text-center leading-[164%]"
        >
          Find Your Dream jobs
        </a>
        <a
          href="/"
          onMouseEnter={(event) => {
            setHovering(1);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          className="self-stretch my-auto text-center leading-[163%]"
        >
          Find Your Perfect employ
        </a>
        {typeof hovering === "number" && (
          <div
            style={{
              left: popoverLeft || 0,
            }}
            className="absolute shadow bg-white mt-20 p-5 rounded w-[600px] overflow-hidden transform-gpu shadow-lg transition-all duration-300"
          >
            {hovering === 0 ? <Manu0 /> : hovering === 1 ? <Manu1 /> : null}
          </div>
        )}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  hovering: PropTypes.number,
  popoverLeft: PropTypes.number,
  popoverHeight: PropTypes.number,
};

export default Nav;
