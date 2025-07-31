import React from "react";
import "./FrameDescription.css";
import { ItemProps } from "../interfaces/ItemProps";

interface FrameDescriptionProps {
  item: ItemProps;
}

const FrameDescription: React.FC<FrameDescriptionProps> = ({ item }) => {
  const { title, cost, disponible } = item;

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
