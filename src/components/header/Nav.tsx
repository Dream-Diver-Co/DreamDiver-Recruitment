import React, { useState } from "react";

const Nav = () => {
  const [hovering, setHovering] = useState<number | null>(null); // Corrected syntax
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null); // Corrected syntax
  const [popoverHeight, setPopoverHeight] = useState<number | null>(null); // Corrected syntax
  return (
    <nav onMouseEnter={() => setHovering(null)}>
      <div className="flex gap-5 justify-between items-center text-base tracking-wide whitespace-nowrap max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c53ef78e2fed7597be0e5c14ad7a0a6beb2a15176528ef902c111211111cd9?apiKey=c99fc9926eb64a38b9282bc6d1dcfb9b&"
          className="shrink-0 self-stretch aspect-[2.04] w-[68px]"
          alt="lazy"
        />
        <a
          href="/"
          onMouseEnter={() => setHovering(0)}
          className="self-stretch my-auto text-center leading-[164%]"
        >
          Products
        </a>
        <a
          href="/"
          onMouseEnter={() => setHovering(1)}
          className="self-stretch my-auto text-center leading-[163%]"
        >
          Solutions
        </a>
        <div
          onMouseEnter={() => setHovering(2)}
          className="self-stretch my-auto text-center leading-[163%]"
        >
          Developers
        </div>
        <a
          href="/"
          onMouseEnter={() => setHovering(3)}
          className="self-stretch my-auto text-center leading-[165%]"
        >
          Resources
        </a>
        <a
          href="/"
          onMouseEnter={() => setHovering(4)}
          className="self-stretch my-auto leading-[160%]"
        >
          Pricing
        </a>
        {typeof hovering === "number" && (
          <div className="absolute  bg-white ">{/* Our popover */}</div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
