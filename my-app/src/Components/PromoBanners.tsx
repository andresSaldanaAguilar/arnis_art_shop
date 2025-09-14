import React from "react";

const PromoBanners: React.FC = () => {
  return (
    <div className="promo-banners mb-4">
      {/* Removed sticker banner; now only remaining promos */}
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
        href={`https://ig.me/m/_arni_art_`}
        target="_arni_art_"
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
