import React from "react";
import "./PartnerComponent.css";
import { Container, Image, Row, Col } from "react-bootstrap";
import {
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
} from "../../assets/index";

function PartnerComponent() {
  return (
    <div id="partner-inti">
      <Container id="partner">
        <Row>
          <Col
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={Client1} className="img-fluid partner-img" />
          </Col>
          <Col
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={Client2} className="img-fluid partner-img" />
          </Col>
          <Col
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={Client3} className="img-fluid partner-img" />
          </Col>
          <Col
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={Client4} className="img-fluid partner-img" />
          </Col>
          <Col
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={Client5} className="img-fluid partner-img" />
          </Col>
          <Col
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={Client6} className="img-fluid partner-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PartnerComponent;
