import React from 'react';
import OIPImage from '../Images/ME.jpg'; // Update the path to your image
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <div className="footer-author">
          <div></div>
          <p>Arni es un proyecto personal para poder capturar y compartir la vida desde la optica que tengo de la vida, al dia de hoy es solamente un hobby pero trato de dar un paso cada vez para volverme un artista 🎨 ❤️.</p>
        </div>
      </div>
      <div>
        <img src={OIPImage} alt="Arni's art" />
      </div>
    </div>
  );
}

export default Footer;