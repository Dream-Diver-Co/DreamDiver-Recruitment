import React from "react";
import { AiFillCode } from "react-icons/ai";
import { FaBusinessTime, FaLaptopHouse } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const HeardJobs = () => {
  return (
    <div className="col-md-8 sub-mega-menu my-4">
      <div className="row">
        <div className="col-md-6">
          <ul className="p-0">
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <AiFillCode className="m-1 fs-5" />
              <a className="text-white" href="/">
                Waiter / waitress
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaBusinessTime className="m-1 fs-5" />
              <a className="text-white" href="/">
                All-round warehouse employee
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <GrTechnology className="m-1 fs-5" />
              <a className="text-white" href="/">
                All-round store employee
              </a>
            </li>
            <li className="d-flex justify-items-center m-1 p-1 text-left">
              <FaLaptopHouse className="m-1 fs-5" />
              <a className="text-white" href="/">
                All-round warehouse employee
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeardJobs;
