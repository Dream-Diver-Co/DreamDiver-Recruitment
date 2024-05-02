import React from "react";
import "./manu.css";
import { AiFillCode } from "react-icons/ai";
import { FaBusinessTime, FaLaptopHouse } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
const Manu0 = () => {
  return (
    <div className="card">
      <div className="bg-dark">
        <div className="row">
          <div className="mega-menu-bg col-md-4">
            <ul className="mega-menu-category">
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <AiFillCode className="m-1 fs-5" />
                <a className="text-white mega-menu-active" href="/">
                  Soft Jobs
                </a>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <FaBusinessTime className="m-1 fs-5" />
                <a className="text-white " href="/">
                  Hard Jobs
                </a>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <GrTechnology className="m-1 fs-5" />
                <a className="text-white " href="/">
                  Technical Jobs
                </a>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <FaLaptopHouse className="m-1 fs-5" />
                <a className="text-white " href="/">
                  House hold Jobs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-8 sub-mega-menu mega-show">
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
          {/* heard job */}
          <div className="col-md-8 mega-hidden">
            <div className="row">
              <div className="col-md-6">
                <ul>
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
          {/* technical hold jobs */}
          <div className="col-md-8 mega-hidden">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li className="d-flex justify-items-center m-1 p-1 text-left">
                    <AiFillCode className="m-1 fs-5" />
                    <a className="text-white" href="/">
                      Cashier
                    </a>
                  </li>
                  <li className="d-flex justify-items-center m-1 p-1 text-left">
                    <FaBusinessTime className="m-1 fs-5" />
                    <a className="text-white" href="/">
                      Order picker
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
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
            </div>
          </div>
          {/* house hold jobs */}
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
        </div>
      </div>
    </div>
  );
};

export default Manu0;
