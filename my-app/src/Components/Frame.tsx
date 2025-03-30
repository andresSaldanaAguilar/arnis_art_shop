import React from "react";
import "./Frame.css";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

interface FrameProps {
  image: string;
  imageRef: string;
  title: string;
  description: string;
  cost: number;
  material: string;
  dimensions: string;
  onClick: () => void; // Add onClick prop
  setItem: (item: any) => void; // Add setItem prop
  disponible: boolean;
  reference?: string;
}

const Frame: React.FC<FrameProps> = ({
  image,
  imageRef,
  title,
  description,
  cost,
  material,
  dimensions,
  onClick,
  setItem,
  disponible,
  reference,
}) => {
  return (
    <div
      className="frame-container"
      onClick={() => {
        onClick();
        setItem({
          imageRef,
          title,
          description,
          cost,
          material,
          dimensions,
          disponible,
          reference,
        });
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="image-container">
            <img src={image} alt={description} />
          </Col>
          <Col xs={8} md={4} className="description-card ">
            <div className="description-card-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
              {disponible ? (
                <>
                  {cost.toLocaleString("es-MX", {
                    style: "currency",
                    currency: "MXN",
                  })}{" "}
                  mxn
                </>
              ) : (
                "Vendido 📈"
              )}
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Frame;