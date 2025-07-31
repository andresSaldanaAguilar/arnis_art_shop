import React from "react";
import "./Frame.css";
import { ItemProps } from "../interfaces/ItemProps";

interface FrameProps extends ItemProps {
  onClick: () => void;
  setItem: (item: ItemProps) => void;
}

const Frame: React.FC<FrameProps> = (props) => {
  const { image, description, onClick, setItem } = props;

  return (
    <div
      onClick={() => {
        onClick();
        setItem(props);
      }}
    >
      <div className="image-container">
        <img src={image} alt={description} />
      </div>
    </div>
  );
};

export default Frame;
