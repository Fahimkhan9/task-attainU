import React from "react";
import "./GetStartedForm.css";
const GetStartedForm = () => {
  return (
    <div className="pt-5 ">
      <div className="container">
        <div className="flex-card bg-warning p-5 ">
          <h4 className="mr-5 mb-2">Ready to get started?</h4>
          <input type="text" placeholder="Email" className="mr-2 mb-2" />
          <input type="text" placeholder="Phone" className="mb-2" />
          <button className="btn btn-dark mx-3 mb-2">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedForm;
