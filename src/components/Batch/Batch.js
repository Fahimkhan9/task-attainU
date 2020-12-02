import React from "react";
import BatchCard from "./BatchCard";

const batchdata = [
  {
    title: "Enrolled Students",
    number: "1030+",
    description: "Over 1,00,000 Student Applications",
    fromwhere: "Primary Selection Criteria - Commitment",
  },
  {
    title: "Placement Partners",
    number: "185+",
    description: "Looking for Skills over Degrees",
    fromwhere: "From Early Stage to Unicorn Startups",
  },
  {
    title: "Absolute Beginners",
    number: "390+",
    description: "Beginner to Entry Level Course",
    fromwhere: "Switch Career to Software Engineering",
  },
];

const Batch = () => {
  return (
    <div className="batch pt-5">
      <div className="container">
        <h4 className="w-100 bg-warning text-white text-center">
          Next Batch: 22nd December
        </h4>
        <div className="row">
          {batchdata.map((batchdata) => (
            <BatchCard batchdata={batchdata} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Batch;
