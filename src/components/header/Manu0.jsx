import React, { useState } from "react";
import "./manu.css";
import { AiFillCode } from "react-icons/ai";
import { FaBusinessTime, FaLaptopHouse } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { Link } from "react-router-dom";
import SoftJobs from "./SoftJobs";
import HeardJobs from "./HeardJobs";
import TecnicalJobs from "./TecnicalJobs";
import HouseHoldjobs from "./HouseHoldjobs";
const Manu0 = () => {
  const [hoverData, setHoverData] = useState(null);

  return (
    <div className="card">
      <div className="bg-dark">
        <div className="row">
          <div className="mega-menu-bg col-md-4">
            <ul className="mega-menu-category">
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <AiFillCode className="m-1 fs-5" />
                <Link
                  className="text-white mega-menu-active"
                  to="/"
                  onMouseEnter={() => setHoverData(0)}
                >
                  Soft Jobs
                </Link>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <FaBusinessTime className="m-1 fs-5" />
                <a
                  className="text-white "
                  href="/"
                  onMouseEnter={() => setHoverData(1)}
                >
                  Hard Jobs
                </a>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <GrTechnology className="m-1 fs-5" />
                <a
                  className="text-white "
                  href="/"
                  onMouseEnter={() => setHoverData(2)}
                >
                  Technical Jobs
                </a>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <FaLaptopHouse className="m-1 fs-5" />
                <a
                  className="text-white "
                  href="/"
                  onMouseEnter={() => setHoverData(3)}
                >
                  House hold Jobs
                </a>
              </li>
            </ul>
          </div>
          {hoverData === 0 ? (
            <SoftJobs />
          ) : hoverData === 1 ? (
            <HeardJobs />
          ) : hoverData === 2 ? (
            <TecnicalJobs />
          ) : hoverData === 3 ? (
            <HouseHoldjobs />
          ) : (
            <SoftJobs />
          )}
        </div>
      </div>
    </div>
  );
};

export default Manu0;
