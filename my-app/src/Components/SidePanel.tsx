import React, { useEffect, useRef } from "react";
import "./SidePanel.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

function SidePanel({ isOpen, item, onClose }) {
  const panelRef = useRef(null);

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

      // Calculate transform-origin based on the container's position
      const panelElement = panelRef.current;
      if (panelElement) {
        const rect = panelElement.getBoundingClientRect();
        const originX = `${rect.left + rect.width / 2}px`;
        const originY = `${rect.top + rect.height / 2}px`;
        panelElement.style.setProperty("--transform-origin-x", originX);
        panelElement.style.setProperty("--transform-origin-y", originY);
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={panelRef}
      className={`side-panel ${isOpen ? "open" : ""}`}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={4} xl={4}>
            <Row>
              <button className="close-button" onClick={onClose}>
                🔙
              </button>
            </Row>

            <Row>
              <Image src={item?.imageRef} alt={item?.title} />
            </Row>
            <h1>{item?.title}</h1>

            <p>
              {item?.description}{" "}
              {item?.reference ? (
                <a href={item?.reference} rel="noopener noreferrer">
                  referencia
                </a>
              ) : (
                <></>
              )}
            </p>

            <p>Medio: {item?.material}</p>

            <p>Dimensiones: {item?.dimensions}</p>

            {item?.disponible ? (
              <p>
                Costo:{" "}
                {item?.cost.toLocaleString("es-MX", {
                  style: "currency",
                  currency: "MXN",
                })}{" "}
                mxn
              </p>
            ) : (
              <></>
            )}

            <Alert variant={item?.disponible ? "success" : "secondary"}>
              {item?.disponible ? (
                <p>
                  Esta obra está disponible ✨{" "}
                  <a
                    href={` https://ig.me/m/_arni_art_`}
                    target="_arni_art_"
                    rel="noopener noreferrer"
                    className="instagram-message-button"
                  >
                    enviame un mensaje a Instagram para adquirirla
                  </a>
                </p>
              ) : (
                <p>
                  Esta obra ya no está disponible 😿{" "}
                  <a
                    href={` https://ig.me/m/_arni_art_`}
                    target="_arni_art_"
                    rel="noopener noreferrer"
                    className="instagram-message-button"
                  >
                    enviame un mensaje para hacer un pedido
                  </a>
                </p>
              )}
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SidePanel;