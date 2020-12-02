import React from "react";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { ListGroup } from "react-bootstrap";
import StudentProjectsCard from "./StudentProjectsCard";
import { useState } from "react";

const projectsdata = [
  {
    title: "AGRICOM",
    description: "Direct to Farm",
    videolink: "https://www.youtube.com/embed/XfdBt90vD4Q",
  },
  {
    title: "BOOKWORM",
    description: "Book ordering web app",
    videolink: "https://www.youtube.com/embed/Dg7dj79hDLY",
  },
  {
    title: "SOCIALNETWORK",
    description: "Networking for Professionals",
    videolink: "https://youtube.com/embed/WrAtOAsq9s0",
  },
  {
    title: "EASYATTEND",
    description: "Employee Attendance Trackiing",
    videolink: "https://www.youtube.com/embed/SbhzLd55lic",
  },
];

const StudentProjects = () => {
  const [embedVideoLink, setEmbedVideoLink] = useState(
    "https://www.youtube.com/embed/XfdBt90vD4Q"
  );
  const changeembedvideolink = (link) => {
    setEmbedVideoLink(link);
  };
  return (
    <div className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Student Projects</p>
            <ListGroup>
              {projectsdata.map((projectsdata) => (
                <StudentProjectsCard
                  projectsdata={projectsdata}
                  changeembedvideolink={changeembedvideolink}
                />
              ))}
            </ListGroup>
          </div>
          <div className="col-md-6">
            <iframe
              style={{ width: "100%" }}
              height="315"
              src={embedVideoLink}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProjects;
