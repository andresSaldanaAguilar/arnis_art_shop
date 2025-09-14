import React from "react";
import { Card } from "react-bootstrap";
import { ItemProps } from "../interfaces/ItemProps";

interface ItemTileProps {
  item: ItemProps;
  onSelect: (item: ItemProps) => void;
}

const ItemTile: React.FC<ItemTileProps> = ({ item, onSelect }) => {
  return (
    <Card
      className="h-100 border-0 shadow-sm item-tile"
      role="button"
      onClick={() => onSelect(item)}
    >
      <div className="ratio ratio-1x1 bg-light">
        <Card.Img
          src={item.image}
          alt={item.title}
          className="object-fit-cover"
        />
      </div>
      <Card.Body className="d-flex flex-column p-3">
        <Card.Title className="fs-6 mb-1 text-truncate" title={item.title}>
          {item.title}
        </Card.Title>
        <Card.Text className="text-muted small mb-2">
          {item.dimensions} | {item.material}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fw-semibold">${item.cost} mxn</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemTile;
