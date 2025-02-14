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
          <Col xs={12} md={12} xl={12}>
            <img src={image} alt={description} />
            <h3>{title}</h3>
            <Row >
              <Col xs={6} md={6} xl={{span: 3, offset: 3}}>
                {disponible ? (
                <p>
                  {cost.toLocaleString("es-MX", {
                    style: "currency",
                    currency: "MXN",
                  })}{" "}
                  mxn
                </p>
                ) : (
                  <p>Vendido 📈</p>
                )}
              </Col>
              <Col xs={6} md={6} xl={{span: 2, offset: 0}}>
                  <Badge bg="" className="attention-button">más info 👀</Badge>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Frame;
