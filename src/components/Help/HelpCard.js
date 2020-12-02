import React from "react";
import Card from "react-bootstrap/Card";
const HelpCard = (props) => {
  const { description } = props.helpdata;
  return (
    <div className="helpcard col-md-4">
      <Card className="text-center border-0">
        <Card.Body>
          <Card.Title>
            <h6> {description}</h6>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HelpCard;
