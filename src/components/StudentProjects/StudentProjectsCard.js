import React from "react";
import { ListGroup } from "react-bootstrap";

const StudentProjectsCard = (props) => {
  const { title, description, videolink } = props.projectsdata;
  const { changeembedvideolink } = props;
  return (
    <ListGroup.Item
      style={{ cursor: "pointer" }}
      className="my-2"
      onClick={() => changeembedvideolink(videolink)}
    >
      {title}
      <br />
      {description}
    </ListGroup.Item>
  );
};

export default StudentProjectsCard;
