import React from "react";
import "./HeroComponent.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Hero } from "../../assets/index";

function HeroComponent() {
  return (
    <section>
      <Container className="hero">
        <Row>
          <Col lg="6">
            <h1>Better Solutions For Your Business</h1>
            <h2>
              We are team of talented designers making websites with Bootstrap
            </h2>
            <div className="d-flex gap-4">
              <Button className="hero-btn-get-started">Get Started</Button>
              <Button className="hero-btn-watch-video">Watch Video</Button>
            </div>
          </Col>
          <Col lg="6">
            <Image src={Hero} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroComponent;
