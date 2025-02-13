import React, { useEffect } from "react";
import "./SidePanel.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

function SidePanel({ isOpen, item, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    function handleClickOutside(event) {
      if (event.target.classList.contains("side-panel")) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`side-panel ${isOpen ? "open" : ""}`}>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={4} xl={4}>
            <Row>
              <button className="close-button" onClick={onClose}>
                X
              </button>
            </Row>

            <Row className="justify-content-md-center">
              <Image src={item?.imageRef} alt={item?.title} />
            </Row>
            <h1>{item?.title}</h1>

            <p>{item?.description}</p>

            <p>Medio: {item?.material}</p>

            <p>Dimensiones: {item?.dimensions}</p>

            <p>
              Costo:{" "}
              {item?.cost.toLocaleString("es-MX", {
                style: "currency",
                currency: "MXN",
              })}{" "}
              mxn
            </p>
            <Alert variant={item?.disponible ? "success" : "secondary"}>
              {item?.disponible ? (
                <p>
                  Esta obra está disponible{" "}
                  <a
                    href={` https://ig.me/m/_arni_art_`}
                    target="_arni_art_"
                    rel="noopener noreferrer"
                    className="instagram-message-button"
                  >
                    Enviame un mensaje a Instagram para adquirirla
                  </a>
                </p>
              ) : (
                <p>Esta obra ya no está disponible</p>
              )}
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SidePanel;
