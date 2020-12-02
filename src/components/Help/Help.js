import React from "react";
import HelpCard from "./HelpCard";

const helpdata = [
  {
    description: "Out of 90 lakhs only 15% get direct jobs rest are unemployed",
  },
  {
    description:
      "Quality and the Industry alignment are the biggest concerns with college & offline course",
  },
  {
    description:
      "Online self paced courses, have approx. 5% completion rates due to low engagement",
  },
];

const Help = () => {
  return (
    <div className="help pt-5">
      <div className="container">
        <h2 className="text-center">How does AttainU Help?</h2>
        <hr />
        <p className="text-center">
          With AttainU you can completely re-write your career. No prior coding
          knowledge needed. Only willingness to put in efforts is required.
          Learn in-depth Software Development besides interview preparation. We
          prioritize on teaching excellence above all else.
        </p>
        <div className="row">
          {helpdata.map((helpdata) => (
            <HelpCard helpdata={helpdata} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
