import React, { useState } from 'react';
import Frame from './Components/Frame.tsx';
import SidePanel from './Components/SidePanel.tsx';
import Footer from './Components/Footer.tsx';
import './App.css';
import OIPImage from './Images/OIP.jpg';

const item1 = {
  image: OIPImage,
  title: 'Art 1',
  description: 'Description 1',
  cost: 100,
  material: 'Canvas',
  dimensions: '10x10',
};

const item2 = {
  image: OIPImage,
  title: 'Art 2',
  description: 'Description 2',
  cost: 200,
  material: 'Paper',
  dimensions: '8x12',
};

const item3 = {
  image: OIPImage,
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
      <div className="body-container">
        <Frame {...item1} onClick={() => setIsPanelOpen(true)} setItem={setItem}></Frame>
        <Frame {...item2} onClick={() => setIsPanelOpen(true)} setItem={setItem}></Frame>
        <Frame {...item3} onClick={() => setIsPanelOpen(true)} setItem={setItem}></Frame>
        <Frame {...item1} onClick={() => setIsPanelOpen(true)} setItem={setItem}></Frame>
      </div>
      <Footer />
      <SidePanel isOpen={isPanelOpen} item={item} onClose={() => setIsPanelOpen(false)} />
    </div>
  );
}

export default App;