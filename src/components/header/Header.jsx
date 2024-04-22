import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="bg-gray-800">
      <div className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex relative gap-5 py-5 justify-between items-start w-full font-medium text-white">
            <Nav />
            <div className="flex gap-2.5 items-center">
              <div className="flex gap-2.5 self-stretch px-3.5 py-2.5 text-base leading-6 rounded-2xl bg-white bg-opacity-20">
                Register
              </div>
              <div className="flex gap-2.5 self-stretch px-3.5 py-2.5 text-base leading-6 rounded-2xl bg-white bg-opacity-20">
                <div className="grow self-stretch my-auto text-sm leading-6">
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
