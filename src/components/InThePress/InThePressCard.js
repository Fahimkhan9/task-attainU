import React from "react";
import Card from "react-bootstrap/Card";

const InThePressCard = (props) => {
  const { imglink, description } = props.inthepressdata;
  return (
    <div className="col-md-3">
      <Card>
        <Card.Img variant="top" src={imglink} />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InThePressCard;
