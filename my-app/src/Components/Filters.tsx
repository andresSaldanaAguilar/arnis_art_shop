import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Collapse } from "react-bootstrap";

export interface FiltersState {
  category: string;
  maxCost: string; // range key: 'all' | 'lt100' | 'lt500' | '500-1000' | 'gt1000'
  disponible: string; // 'all' | 'true' | 'false'
  search: string;
}

interface FiltersProps {
  onChange: (f: FiltersState) => void;
  current: FiltersState;
  maxExistingCost: number;
}

const categoryOptions = [
  "Todas",
  "Pintura Original",
  "Replica",
  "Print",
  "Sticker",
];

const Filters: React.FC<FiltersProps> = ({
  onChange,
  current,
  maxExistingCost,
}) => {
  const [open, setOpen] = useState(false);

  // Auto update external state when local changes
  const update = (patch: Partial<FiltersState>) => {
    onChange({ ...current, ...patch });
  };

  useEffect(() => {
    // no longer auto-setting numeric max; ensure default is 'all'
    if (!current.maxCost) {
      update({ maxCost: "all" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="filters mb-3">
      {/* Single button with icon + text to toggle filters */}
      <div className="d-flex align-items-center mb-2">
        <Button
          variant="outline-secondary"
          size="sm"
          className="d-inline-flex align-items-center gap-2 px-3 py-2"
          onClick={() => setOpen((o) => !o)}
          aria-controls="filters-collapse"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3A.5.5 0 0 1 4.5 7h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3A.5.5 0 0 1 2.5 4h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 4.5" />
          </svg>
          <span className="text-uppercase fw-semibold small">Filtrar</span>
          <span className="small" aria-hidden="true">
            {open ? "▲" : "▼"}
          </span>
        </Button>
      </div>
      <Collapse in={open}>
        <div id="filters-collapse" className="mt-2">
          <Row className="g-3">
            <Col xs={12} sm={6} md={3}>
              <Form.Group controlId="filterCategory">
                <Form.Label className="small text-uppercase text-secondary">
                  Categoría
                </Form.Label>
                <Form.Select
                  value={current.category}
                  onChange={(e) => update({ category: e.target.value })}
                >
                  {categoryOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group controlId="filterCost">
                <Form.Label className="small text-uppercase text-secondary">
                  Costo
                </Form.Label>
                <Form.Select
                  value={current.maxCost}
                  onChange={(e) => update({ maxCost: e.target.value })}
                >
                  <option value="all">Todos</option>
                  <option value="lt100">Menos de $100</option>
                  <option value="lt500">Menos de $500</option>
                  <option value="500-1000">$500 - $1000</option>
                  <option value="gt1000">Más de $1000</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group controlId="filterDisponible">
                <Form.Label className="small text-uppercase text-secondary">
                  Disponibilidad
                </Form.Label>
                <Form.Select
                  value={current.disponible}
                  onChange={(e) => update({ disponible: e.target.value })}
                >
                  <option value="all">Todas</option>
                  <option value="true">Disponible</option>
                  <option value="false">Vendida</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="filterSearch">
                <Form.Label className="small text-uppercase text-secondary">
                  Buscar
                </Form.Label>
                <Form.Control
                  placeholder="Título..."
                  value={current.search}
                  onChange={(e) => update({ search: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3 d-flex gap-2">
            <Button
              size="sm"
              variant="outline-dark"
              onClick={() =>
                onChange({
                  category: "Todas",
                  maxCost: "all",
                  disponible: "all",
                  search: "",
                })
              }
            >
              Limpiar
            </Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Filters;
