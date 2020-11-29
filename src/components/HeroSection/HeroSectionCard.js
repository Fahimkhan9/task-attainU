import React from "react";
import Card from "react-bootstrap/Card";
import "./HeroSection.css";
const HeroSectionCard = () => {
  return (
    <Card className=" herosection_card ">
      <div className="row d-flex align-items-center ">
        <div className="col-md-6">
          <h4>
            Part Time - Evening Classes <sup>New</sup>{" "}
          </h4>
        </div>
        <div className="col-md-6">
          <p>Schedule | Mon - Fri (6 pm - 11 pm)</p>
          <p>Live & Online Classes</p>
          <p>12 Months Highly Engaging Curriculum</p>
        </div>
      </div>
    </Card>
  );
};

export default HeroSectionCard;
