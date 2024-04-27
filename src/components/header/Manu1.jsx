import React from "react";
import { FaLaptopHouse } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { LiaAccessibleIcon } from "react-icons/lia";
const manu1 = () => {
  return (
    <div className="card">
      <div className=" bg-white ">
        <div className="row">
          <div className="mega-menu-bg col-md-4">
            <ul>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <GiSkills className="m-1 fs-5" />
                <p className="m-0">Soft skills</p>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <LiaAccessibleIcon className="m-1 fs-5" />
                <p className="m-0">Hard Skills</p>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <GrTechnology className="m-1 fs-5" />
                <p className="m-0">Technical Skills</p>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <FaLaptopHouse className="m-1 fs-5" />
                <p className="m-0">Houseful Skills</p>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <GiSkills className="m-1 fs-5" />
                <p className="m-0">Soft skills</p>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <LiaAccessibleIcon className="m-1 fs-5" />
                <p className="m-0">Hard Skills</p>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <GrTechnology className="m-1 fs-5" />
                <p className="m-0">Technical Skills</p>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <FaLaptopHouse className="m-1 fs-5" />
                <p className="m-0">Houseful Skills</p>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <GiSkills className="m-1 fs-5" />
                <p className="m-0">Soft skills</p>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <LiaAccessibleIcon className="m-1 fs-5" />
                <p className="m-0">Hard Skills</p>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <GrTechnology className="m-1 fs-5" />
                <p className="m-0">Technical Skills</p>
              </li>
              <li className="d-flex justify-items-center m-1 p-1 text-center">
                <FaLaptopHouse className="m-1 fs-5" />
                <p className="m-0">Houseful Skills</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default manu1;
