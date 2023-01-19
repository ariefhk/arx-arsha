import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./NavbarComponent.css";

function NavbarComponent() {
  const navLink = [
    {
      name: "Home",
      url: "/home",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      name: "Team",
      url: "/team",
    },
    {
      name: "Drop Down",
      url: "/dropdown",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <Container id="navbar">
      <Navbar expand="lg">
        <Navbar.Brand className="navbar-logo" href="#home">
          ARSHA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            {navLink.map((link) => {
              if (link.name === "Drop Down") {
                return (
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                );
              }
              return <Nav.Link href={link.url}>{link.name}</Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
        <Button className="navbar-getstarted">Get Started</Button>
      </Navbar>
    </Container>
  );
}

export default NavbarComponent;
