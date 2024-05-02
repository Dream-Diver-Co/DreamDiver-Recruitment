import React from "react";
import { AiFillCode } from "react-icons/ai";
import { FaBusinessTime, FaLaptopHouse } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const HouseHoldjobs = () => {
  return (
    <div className="col-md-8 mega-hidden">
      <div className="row">
        <div className="col-md-6">
          <ul>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <AiFillCode className="m-1 fs-5" />
              <a className="text-white" href="/">
                Cook
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaBusinessTime className="m-1 fs-5" />
              <a className="text-white" href="/">
                Kitchen porter
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <GrTechnology className="m-1 fs-5" />
              <a className="text-white" href="/">
                Kitchen Aid
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <GrTechnology className="m-1 fs-5" />
              <a className="text-white" href="/">
                Cleaning work
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <GrTechnology className="m-1 fs-5" />
              <a className="text-white" href="/">
                Cashier
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaLaptopHouse className="m-1 fs-5" />
              <a className="text-white" href="/">
                Cleaner
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaLaptopHouse className="m-1 fs-5" />
              <a className="text-white" href="/">
                Housekeeping
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaLaptopHouse className="m-1 fs-5" />
              <a className="text-white" href="/">
                Host/Hostess
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseHoldjobs;
