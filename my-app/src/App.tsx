import React, { useState } from 'react';
import Frame from './Components/Frame.tsx';
import SidePanel from './Components/SidePanel.tsx';
import Footer from './Components/Footer.tsx';
import './App.css';
import Caminando from './Images/Caminando_En_Templo_Mayor (Phone).JPG';
import CaminandoRef from './Images/Caminando_En_Templo_Mayor_Ref (Phone).JPG';
import Cocinando from './Images/Cocinando_En_Casa (Phone).JPG';
import CocinandoRef from './Images/Cocinando_En_Casa_Ref (Phone).jpg';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const item1 = {
  image: Caminando,
  imageRef: CaminandoRef,
  title: 'Caminando en Templo Mayor',
  description: 'Un dia en camino a una reunion de dibujo urbano, me encontre en la zona del centro historico de la ciudad de mexico cerca del Templo Mayor, era la primera vez que caminaba por esa zona a pesar de ser un citadino que se jacta de conocer su ciudad, y a la lejania vi esta cupula que me llamo la atencion, me acerque y me encontre con esta vista, me parecio interesante y decidi dibujarla.',
  cost: 100,
  material: 'Canvas',
  dimensions: '10x10',
};

const item2 = {
  image: Cocinando,
  imageRef: CocinandoRef,
  title: 'Art 2',
  description: 'Description 2',
  cost: 200,
  material: 'Paper',
  dimensions: '8x12',
};

const item3 = {
  image: Caminando,
  imageRef: CaminandoRef,
  title: 'Art 3',
  description: 'Description 3',
  cost: 300,
  material: 'Wood',
  dimensions: '12x10',
};

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [item, setItem] = useState(undefined);

  return (
    <div className="App">
      <div className="header-container">
        <h1 className="header">Arni's art</h1>
      </div>
      <Container className="body-container">
        <Row>
          <Col xs={12} md={4}>
            <Frame {...item1} onClick={() => setIsPanelOpen(true)} setItem={setItem}></Frame>
          </Col>
          <Col xs={12} md={4}>
            <Frame {...item2} onClick={() => setIsPanelOpen(true)} setItem={setItem}></Frame>
          </Col>
          <Col xs={12} md={4}>
            <Frame {...item3} onClick={() => setIsPanelOpen(true)} setItem={setItem}></Frame>
          </Col>
          <Col xs={12} md={4}>
            <Frame {...item1} onClick={() => setIsPanelOpen(true)} setItem={setItem}></Frame>
          </Col>
        </Row>
      </Container>
      <Footer />
      <SidePanel isOpen={isPanelOpen} item={item} onClose={() => setIsPanelOpen(false)} />
    </div>
  );
}

export default App;