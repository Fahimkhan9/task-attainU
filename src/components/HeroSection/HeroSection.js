import React from "react";

import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="pt-5">
      <div className="herosection ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="color-yellow pb-4">Attain your dream career</h1>
              <h3 className="pb-3 color-white">
                Your College Alternative to a Premium <br /> Software
                Engineering Career
              </h3>
              <p className="color-white">Enroll Today</p>
              <ul>
                <li className="p-1 color-white ">
                  Full-Stack Web Development Course
                </li>
                <li className="p-1 color-white">
                  No Coding Background Required
                </li>
                <li className="p-1 color-white">
                  Pay only when you get placed*
                </li>
                <li className="p-1 color-white">
                  Live-Online Interactive Classes
                </li>
                <li className="p-1 color-white">Flexible Evening Classes</li>
              </ul>
              <p className="color-white">
                Next Batch Starts: <b> December 22, 2020</b>{" "}
              </p>
              <p className="color-white">20 Days, 05h : 22m : 26s</p>
              <button className="btn m-2 btn-warning text-white">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
