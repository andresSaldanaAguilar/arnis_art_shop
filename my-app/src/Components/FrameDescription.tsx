import React from "react";
import Col from "react-bootstrap/Col";
import "./FrameDescription.css";

interface FrameDescriptionProps {
  title: string;
  description: string;
  cost: number;
  disponible: boolean;
}

const FrameDescription: React.FC<FrameDescriptionProps> = ({
  title,
  description,
  cost,
  disponible,
}) => {
  return (
    <Col xs={12} md={4} className="description-card">
      <div className="description-card-content">
        <h3>{title}</h3>
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
            "No dispoble 🚫"
          )}
        </p>
      </div>
    </Col>
  );
};

export default FrameDescription;
