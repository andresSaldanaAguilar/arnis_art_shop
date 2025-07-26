import React from "react";
import OIPImage from "../Images/ME.jpg"; // Update the path to your image
import "./Footer.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <Container className="footer-container">
      <Row className="footer-image justify-content-center">
        <Col xs={6} md={4} className="text-center">
          <Image src={OIPImage} style={{ width: "40%" }} />
        </Col>
        <Col xs={12} md={8} className="footer-text">
          <p>
            Hola! Arni es mi alias artístico, capturando y compartiendo la vida
            a través de mi óptica, una pintura a la vez 🎨❤️.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
