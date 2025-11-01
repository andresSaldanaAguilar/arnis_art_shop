import React from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { ItemProps } from "../interfaces/ItemProps";

interface ItemDetailModalProps {
  item: ItemProps | null;
  onHide: () => void;
}

const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onHide }) => {
  if (!item) return null;
  return (
    <Modal show={!!item} onHide={onHide} centered size="lg">
      <Modal.Body className="p-0">
        <div className="row g-0">
          <div className="col-12 col-md-6 border-end">
            <div className="ratio ratio-1x1">
              <img
                src={item.image}
                alt={item.title}
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 p-4 d-flex flex-column">
            <h5 className="mb-1">{item.title}</h5>
            <div className="text-muted small mb-3">
              {item.material} · {item.dimensions}
            </div>
            <div className="mb-3 small text-uppercase tracking-wide text-secondary">
              {item.category}
            </div>
            <p className="flex-grow-1 small" style={{ whiteSpace: "pre-line" }}>
              {item.description}
            </p>
            {item.reference && (
              <div className="small mb-2">
                Referencia:{" "}
                <a
                  href={item.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </div>
            )}
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="fs-5 fw-semibold m-0">
                {item.disponible ? `$${item.cost}` : "No disponible"}
              </span>
            </div>
            <div className="d-flex gap-2">
              <a
                href={`https://ig.me/m/_arni_art_`}
                target="_arni_art_"
                rel="noopener noreferrer"
                className="instagram-message-button flex-grow-1 btn btn-dark text-center"
                style={{ textDecoration: "none" }}
              >
                enviame un mensaje para hacer tu pedido
              </a>
              <Button variant="outline-secondary" onClick={onHide}>
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ItemDetailModal;
