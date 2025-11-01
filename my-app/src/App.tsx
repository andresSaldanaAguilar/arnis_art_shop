import React, { useMemo, useState } from "react";
import "./App.css";
import { items } from "./data/items.ts"; // explicit extension
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header.tsx"; // explicit extension
import Footer from "./Components/Footer.tsx"; // explicit extension
import Filters, { FiltersState } from "./Components/Filters.tsx"; // explicit extension
import ItemTile from "./Components/ItemTile.tsx"; // explicit extension
import ItemDetailModal from "./Components/ItemDetailModal.tsx"; // explicit extension
import { ItemProps } from "./interfaces/ItemProps";
import PromoBanners from "./Components/PromoBanners.tsx"; // explicit extension
import StickerPackImg from "./Images/originales/stickers.jpeg";

function App() {
  const maxCost = useMemo(
    () => items.reduce((m, i) => Math.max(m, i.cost), 0),
    []
  );
  const [filters, setFilters] = useState<FiltersState>({
    category: "Todas",
    maxCost: "all",
    disponible: "all",
    search: "",
  });
  const [selected, setSelected] = useState<ItemProps | null>(null);

  const filtered = useMemo(() => {
    return items.filter((it) => {
      if (filters.category !== "Todas" && it.category !== filters.category)
        return false;
      // interpret cost range
      if (filters.maxCost !== "all") {
        const c = it.cost;
        if (filters.maxCost === "lt500" && !(c < 500)) return false;
        if (filters.maxCost === "500-1000" && !(c >= 500 && c <= 1000))
          return false;
        if (filters.maxCost === "gt1000" && !(c > 1000)) return false;
      }
      if (filters.disponible !== "all") {
        const want = filters.disponible === "true";
        if (it.disponible !== want) return false;
      }
      if (filters.search) {
        const s = filters.search.toLowerCase();
        if (!it.title.toLowerCase().includes(s)) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-white text-dark">
      <Header />
      <main className="flex-grow-1 py-4">
        <Container>
          {/* Promo Banners */}
          <PromoBanners />
          <Filters
            onChange={setFilters}
            current={filters}
            maxExistingCost={maxCost}
          />
          <Row xs={2} sm={3} md={4} lg={4} className="g-3 g-md-4">
            {/* Promotional tile injected as first tile with image */}
            <Col>
              <div
                className="h-100 border-0 shadow-sm item-tile promo-highlight-tile text-white position-relative"
                role="note"
                aria-label="Sticker pack gratis"
              >
                <div className="ratio ratio-1x1 position-relative">
                  <img
                    src={StickerPackImg}
                    alt="Sticker pack incluido"
                    className="w-100 h-100 object-fit-cover promo-img"
                  />
                  <div className="promo-overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                    <div
                      className="fw-bold"
                      style={{ fontSize: "0.95rem", letterSpacing: ".5px" }}
                    >
                      ¡Sticker Pack Gratis!
                    </div>
                    <div className="small opacity-75 mt-1">En cada compra</div>
                  </div>
                </div>
              </div>
            </Col>
            {filtered.map((item) => (
              <Col key={item.title}>
                <ItemTile item={item} onSelect={setSelected} />
              </Col>
            ))}
            {filtered.length === 0 && (
              <Col xs={12} className="text-center py-5 small text-muted">
                No hay artículos que coincidan con los filtros.
              </Col>
            )}
          </Row>
        </Container>
      </main>
      <Footer />
      <ItemDetailModal item={selected} onHide={() => setSelected(null)} />
    </div>
  );
}

export default App;
