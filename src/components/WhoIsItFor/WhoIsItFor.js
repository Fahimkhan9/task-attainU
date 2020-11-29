import React from "react";
import WhoitisforCard from "./WhoitisforCard";

const WhoIsItFordata = [
  {
    title: "College Final Year",
  },
  {
    title: "Job Switcher",
  },
  {
    title: "Job Seeker",
  },
  {
    title: "12th Complete",
  },
];

const WhoIsItFor = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <h3>Who it is for</h3>
            <hr />
          </div>
          <div className="col-md-6">
            <div className="row">
              {WhoIsItFordata.map((WhoIsItFordata) => (
                <WhoitisforCard WhoIsItFordata={WhoIsItFordata} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsItFor;
