import React from "react";
import { AiFillCode } from "react-icons/ai";
import { FaBusinessTime, FaLaptopHouse } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const SoftJobs = () => {
  return (
    <div className="col-md-8 sub-mega-menu ">
      <div className="row">
        <div className="col-md-6">
          <ul>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <AiFillCode className="m-1 fs-5" />
              <a className="text-white" href="/">
                Product IT Support
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaBusinessTime className="m-1 fs-5" />
              <a className="text-white" href="/">
                Sales Employee
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <GrTechnology className="m-1 fs-5" />
              <a className="text-white" href="/">
                IT Support
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaLaptopHouse className="m-1 fs-5" />
              <a className="text-white" href="/">
                Sales Employee
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaLaptopHouse className="m-1 fs-5" />
              <a className="text-white" href="/">
                Administrative assistant
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaLaptopHouse className="m-1 fs-5" />
              <a className="text-white" href="/">
                Customer Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoftJobs;
