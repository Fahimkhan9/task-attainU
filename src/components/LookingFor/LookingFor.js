import React from "react";
import LookingForCard from "./LookingForCard";

const whatwearelookingfordata = [
  {
    description: "Spoken and Written English Proficiency",
  },

  {
    description: "Min. Education - 12th Grade or equivalent",
  },
  {
    description: "Amenities - Laptop, Internet, Electricity",
  },
  {
    description: "4-5 hours Commitment (Mon - Fri)",
  },
  {
    description:
      "Self Study - Should be able to put the minimum required Efforts",
  },
  {
    description: "Looking for Job Immediately after Course Completion",
  },
];

const LookingFor = () => {
  return (
    <div className="pt-5 ">
      <div className="container">
        <h5 className="text-center">What We Are Looking For</h5>
        <div className="row">
          {whatwearelookingfordata.map((whatwearelookingfordata) => (
            <LookingForCard whatwearelookingfordata={whatwearelookingfordata} />
          ))}
        </div>
        {/* <button className="btn btn-warning text-center">Get started</button> */}
      </div>
    </div>
  );
};

export default LookingFor;
