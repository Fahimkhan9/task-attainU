import React from "react";
import { Button, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <Navbar className="navigationbar " expand="lg">
      <Navbar.Brand href="#home" className="text-white ml-5  ">
        AttainU
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5">
          {/* course dropdown */}
          <NavDropdown
            title="Course"
            className="text-white"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              Course Details
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Live Batches</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              student Projects
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.4">FAQ</NavDropdown.Item>
          </NavDropdown>
          {/* placement dropdown */}
          <NavDropdown
            className="text-white"
            title="Placement"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              Placement Details
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Placement Stories
            </NavDropdown.Item>
          </NavDropdown>
          {/* hire dropdown */}
          <NavDropdown
            title="Hire"
            className="text-white"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              Hire from AttainU
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Verify student Status
            </NavDropdown.Item>
          </NavDropdown>
          <Button variant="outline-warning">Apply Now</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
