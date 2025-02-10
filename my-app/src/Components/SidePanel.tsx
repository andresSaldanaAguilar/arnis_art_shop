import React, { useEffect } from 'react';
import './SidePanel.css';

function SidePanel({ isOpen, item, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    function handleClickOutside(event) {
      if (event.target.classList.contains('side-panel')) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={item?.imageRef} alt={item?.title} />
        <h1>{item?.title}</h1>
        <p>{item?.description}</p>
        <p>Medio: {item?.material}</p>
        <p>Dimensiones: {item?.dimensions}</p>
        <p>Costo: {item?.cost.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })} mxn</p>
        <a 
          href={` https://ig.me/m/_arni_art_`} 
          target="_arni_art_" 
          rel="noopener noreferrer"
          className="instagram-message-button"
        >
          Enviame un mensaje a Instagram
        </a>
    </div>
  );
}

export default SidePanel;