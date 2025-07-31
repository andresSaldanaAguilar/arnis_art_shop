import React from "react";
import "./Frame.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
        <Col xs={12} md={8} className="image-container">
          <img src={image} alt={description} className="standard-image" />
        </Col>
      </Container>
    </div>
  );
};

export default Frame;
