import React from "react";
import Card from "react-bootstrap/Card";
const WhoitisforCard = (props) => {
  const { title } = props.WhoIsItFordata;
  return (
    <div className="col-md-6  bg-white text-dark">
      <Card
        className="m-2"
        style={{ boxShadow: "rgba(16, 60, 105, 0.12) 0px 16px 32px 0px" }}
      >
        <Card.Body>
          <Card.Title>
            <h5>{title}</h5>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WhoitisforCard;
