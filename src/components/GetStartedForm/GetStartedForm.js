import React from "react";
import "./GetStartedForm.css";
const GetStartedForm = () => {
  return (
    <div className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Ready to get started?</h4>
          </div>
          <div className="col-md-4 flex-input">
            <input type="text" />
            <input type="text" />
          </div>
          <div className="col-md-4">
            <button className="btn btn-dark">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedForm;
