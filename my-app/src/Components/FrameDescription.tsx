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
    <div className="description-card">
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
          "No disponible 🚫"
        )}
      </p>
    </div>
  );
};

export default FrameDescription;
