import React, { useState } from "react";
import PropTypes from "prop-types";
import Manu0 from "./Manu0";
import Manu2 from "./Manu2";
import Manu3 from "./Manu3";
import Manu1 from "./Manu1.jsx";

const Nav = () => {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  const [popoverHeight, setPopoverHeight] = useState(null);
  return (
    <nav onMouseLeave={() => setHovering(null)}>
      <div className="flex gap-5 justify-between items-center text-base tracking-wide whitespace-nowrap max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c53ef78e2fed7597be0e5c14ad7a0a6beb2a15176528ef902c111211111cd9?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&"
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
          Products
        </a>
        <a
          href="/"
          onMouseEnter={(event) => {
            setHovering(1);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          className="self-stretch my-auto text-center leading-[163%]"
        >
          Solutions
        </a>
        <a
          href="/"
          onMouseEnter={(event) => {
            setHovering(2);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          className="self-stretch my-auto text-center leading-[163%]"
        >
          Developers
        </a>
        <a
          href="/"
          onMouseEnter={(event) => {
            setHovering(3);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          className="self-stretch my-auto text-center leading-[165%]"
        >
          Resources
        </a>
        <a
          href="/"
          onMouseEnter={(event) => {
            setHovering(4);
            setPopoverLeft(event.currentTarget.offsetLeft);
          }}
          className="self-stretch my-auto leading-[160%]"
        >
          Pricing
        </a>
        {typeof hovering === "number" && (
          <div
            style={{
              left: popoverLeft || 0,
            }}
            className="absolute shadow bg-white mt-20 p-5 rounded w-[600px] overflow-hidden transform-gpu shadow-lg transition-all duration-300"
          >
            {hovering === 0 ? (
              <Manu0 />
            ) : hovering === 1 ? (
              <Manu1 />
            ) : hovering === 2 ? (
              <Manu2 />
            ) : hovering === 3 ? (
              <Manu3 />
            ) : null}
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
