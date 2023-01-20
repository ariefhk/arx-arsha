import React from "react";
import "./HeroComponent.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Hero } from "../../assets/index";

function HeroComponent() {
  return (
    <section>
      <Container id="hero">
        <Row>
          <Col
            lg="6"
            className="d-flex flex-column justify-content-center pt-2"
          >
            <h1 className="hero-title">Better Solutions For Your Business</h1>
            <h2 className="hero-desc">
              We are team of talented designers making websites with Bootstrap
            </h2>
            <div className="d-flex gap-4">
              <Button className="hero-btn-get-started">Get Started</Button>
              <Button className="hero-btn-watch-video">Watch Video</Button>
            </div>
          </Col>
          <Col lg="6" className="hero-img">
            <Image src={Hero} className="img-fluid animated" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroComponent;
