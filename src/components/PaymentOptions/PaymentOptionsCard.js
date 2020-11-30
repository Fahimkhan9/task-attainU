import React from "react";
import Card from "react-bootstrap/Card";
const PaymentOptionsCard = (props) => {
  const { title, description, amountOfFee } = props.paymentoptionsdata;
  return (
    <div className="col-md-6 text-center">
      <h1>{title}</h1>
      <Card className="border-0">
        <Card.Body>
          <Card.Title>{amountOfFee}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PaymentOptionsCard;
