import React from "react";
import "./Frame.css";
import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
      {" "}
      {}
      <img src={image} alt={description} />
      <h3>{title}</h3>
      {disponible ? (
        <Badge bg=""  className="attention-button">
          ¿Quieres saber más 👀? Haz click 
        </Badge>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Frame;
