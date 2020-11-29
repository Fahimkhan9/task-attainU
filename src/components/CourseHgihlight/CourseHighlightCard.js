import React from "react";
import Card from "react-bootstrap/Card";
const CourseHighlightCard = (props) => {
  const { number, description } = props.CourseHighlightdata;
  return (
    <div className="CourseHighlightCard col-md-3">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{number}</Card.Title>

          <Card.Text>
            <pre>{description}</pre>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseHighlightCard;
