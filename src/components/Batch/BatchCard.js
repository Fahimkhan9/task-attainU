import React from "react";
import Card from "react-bootstrap/Card";
const BatchCard = (props) => {
  const { title, number, description, fromwhere } = props.batchdata;
  return (
    <div className="col-md-4">
      <Card className="text-center border-0">
        <Card.Body>
          <Card.Title className="display-3">{number}</Card.Title>
          <Card.Title className="mb-2  text-brand">{title}</Card.Title>
          <Card.Text>
            {description}
            {fromwhere}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BatchCard;
