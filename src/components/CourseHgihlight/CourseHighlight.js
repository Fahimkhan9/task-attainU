import React from "react";
import CourseHighlightCard from "./CourseHighlightCard";

const CourseHighlightdata = [
  {
    description: `
Months Long
Evening Classes
Mon - Fri (6pm to 11pm)
`,
    number: 12,
  },
  {
    description: `
Industry Relevant
Projects
        `,
    number: 3,
  },

  {
    description: `
Peer Based
Mock Interviews`,
    number: 30,
  },
  {
    description: `
Placement Preparation
Tests`,
    number: 19,
  },
];

const CourseHighlight = () => {
  return (
    <div className="CourseHighlight pt-5">
      <div className="container">
        <h4>Course Highlights</h4>
        <hr />
        <div className="row">
          {CourseHighlightdata.map((CourseHighlightdata) => (
            <CourseHighlightCard CourseHighlightdata={CourseHighlightdata} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseHighlight;
