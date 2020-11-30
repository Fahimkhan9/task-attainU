import React from "react";
import { ListGroup } from "react-bootstrap";
import PaymentOptionsCard from "./PaymentOptionsCard";

const paymentoptionsdata = [
  {
    title: "Option 1",
    amountOfFee: "2,60,000/-",
    description: "Pay After Placement",
  },
  {
    title: "Option 2",
    amountOfFee: "1,25,000/-",
    description: "Upfront Fee Payment",
  },
];
const paymentoptionsdescription = [
  {
    title: " Total Fee",
    number: "2.60 Lakhs",
  },
  {
    title: "Registration Fee Portion",
    number: "60,000 ",
  },
  {
    title: "Tuition Fee Portion",
    number: "2 Lakhs",
  },
  {
    title: "Tuition Fee EMI Options",
    number: "24 Months ",
  },
  {
    title: " ISA Breach Recovery Cheque",
    number: "50,000 ",
  },
];

const PaymentOptions = () => {
  return (
    <div>
      <div className="container">
        <h3 className="text-center">Fee Payment Options</h3>
        <hr />
        <div className="row d-flex justify-content-center">
          {paymentoptionsdata.map((paymentoptionsdata) => (
            <PaymentOptionsCard paymentoptionsdata={paymentoptionsdata} />
          ))}
          <div className="col-md-6">
            <ListGroup>
              {paymentoptionsdescription.map(
                (paymentoptionsdescriptiondata) => (
                  <ListGroup.Item>
                    {paymentoptionsdescriptiondata.title}
                    <br />
                    {paymentoptionsdescriptiondata.number}
                  </ListGroup.Item>
                )
              )}
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
