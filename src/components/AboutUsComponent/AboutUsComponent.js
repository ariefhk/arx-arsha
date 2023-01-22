import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AboutUsComponent.css";

function AboutUsComponent() {
  return (
    <div className="mt-5">
      <Container id="aboutus">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i class="bi bi-check2-all"></i>Ullamco laboris nisi ut aliquip
                ex ea commodo consequat
              </li>
              <li>
                <i class="bi bi-check2-all"></i>Duis aute irure dolor in
                reprehenderit in voluptate velit
              </li>
              <li>
                <i class="bi bi-check2-all"></i>Ullamco laboris nisi ut aliquip
                ex ea commodo consequat
              </li>
            </ul>
          </Col>
          <Col>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <Button className="btn-learn-more">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUsComponent;
