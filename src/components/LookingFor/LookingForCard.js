import React from "react";
import Card from "react-bootstrap/Card";
const LookingForCard = (props) => {
  const { description } = props.whatwearelookingfordata;
  return (
    <div className="col-md-4 ">
      <Card className="text-center p-3">
        <Card.Body>
          <Card.Title>{description}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LookingForCard;
