import React from "react";
import StickersImg from "../Images/stickers.jpeg";

const PromoBanners: React.FC = () => {
  return (
    <div className="promo-banners mb-4">
      <div
        className="promo-banner with-image"
        role="note"
        aria-label="Promoción paquete de stickers"
      >
        <img
          src={StickersImg}
          alt="Paquete de stickers"
          className="promo-thumb"
        />
        <div className="content">
          <span className="icon" aria-hidden="true">
            💫
          </span>
          ¡Todas las compras incluyen un paquete de stickers gratis!
        </div>
      </div>
      <div
        className="promo-banner"
        role="note"
        aria-label="Promoción entregas CDMX"
      >
        <span className="icon" aria-hidden="true">
          🚚
        </span>
        Entregas personales gratis en CDMX
      </div>
      <a
        className="promo-banner link-banner"
        href="mailto:contacto@example.com?subject=Pedido%20Personalizado"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quiero hacer un pedido personalizado"
      >
        <span className="icon" aria-hidden="true">
          🎨
        </span>
        Quiero hacer un pedido personalizado
      </a>
    </div>
  );
};

export default PromoBanners;
