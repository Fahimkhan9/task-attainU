import React from "react";

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
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <ListGroup>
              <ListGroup.Item className="mx-auto border-0">
                <h4> Student Projects</h4>
              </ListGroup.Item>
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
