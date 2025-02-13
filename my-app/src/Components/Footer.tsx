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
      <Col
        xs={{ span: 6, offset: 3 }}
        md={{ span: 6, offset: 3 }}
        xl={{ span: 3, offset: 4 }}
      >
        <Row className="footer-image">
          <Image src={OIPImage} />
        </Row>
        <Row className="footer-author">
          <p>
            Arni es mi alias artístico, capturando y compartiendo la vida a
            través de mi lente única. Por ahora, es solo un pasatiempo, pero
            estoy dando pasos para convertirme en un profesional. ¡Gracias por tu apoyo!
            🎨❤️.
          </p>
        </Row>
      </Col>
    </Container>
  );
}

export default Footer;
