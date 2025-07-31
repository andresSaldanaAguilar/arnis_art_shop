import React, { useState } from "react";
import Frame from "./Components/Frame.tsx";
import FrameDescription from "./Components/FrameDescription.tsx";
import SidePanel from "./Components/SidePanel.tsx";
import Footer from "./Components/Footer.tsx";
import "./App.css";
import Caminando from "./Images/Caminando_En_Templo_Mayor.JPG";
import CaminandoRef from "./Images/Caminando_En_Templo_Mayor_Ref.JPG";
import Cocinando from "./Images/Cocinando_En_Casa.JPG";
import CocinandoRef from "./Images/Cocinando_En_Casa_Ref.jpg";
import Mujer from "./Images/Mujer_Con_Aretes.JPG";
import MujerRef from "./Images/Mujer_Con_Aretes_Ref.jpg";
import Keane from "./Images/Keane.jpg";
import KeaneRef from "./Images/Keane_Ref.jpg";
import Trees from "./Images/trees.JPG";
import TreesRef from "./Images/trees_Ref.JPG";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const item1 = {
  image: Caminando,
  imageRef: CaminandoRef,
  title: "Caminando en Templo Mayor",
  description:
    "Un día en camino a una reunión de dibujo urbano, me encontré en la zona del centro histórico de la Ciudad de México cerca del Templo Mayor. Era la primera vez que caminaba por esa zona a pesar de ser un citadino que se jacta de conocer su ciudad, y a la lejanía vi esta cúpula que me llamó la atención. Me acerqué y me encontré con esta vista. Tenía tiempo sin pintar arquitectura, entonces decidí volver a mis raíces.",
  cost: 600,
  material: "Óleo en papel",
  dimensions: "20x30cm",
  disponible: true,
};

const item2 = {
  image: Cocinando,
  imageRef: CocinandoRef,
  title: "Cocinando en Casa",
  description:
    "Me encontré en mi casa cocinando para mí, y me pareció interesante el contraste entre el sartén y los colores vivos del tomate y el ajo, cosas tan simples pero que en conjunto crean una composición interesante y vibrante. La cocina, con sus aromas y sabores, se convirtió en un lienzo donde los ingredientes cotidianos se transformaron en arte.",
  cost: 400,
  material: "Óleo en papel",
  dimensions: "18x22cm",
  disponible: true,
};

const item3 = {
  image: Mujer,
  imageRef: MujerRef,
  title: "Mujer con Aretes",
  description:
    "De manera esporádica me encuentro en Pinterest para encontrar inspiración y me encontré con una foto de una mujer con aretes que me llamó la atención. Me llamó mucho la atención el contraste de sus aretes coloridos y exageradamente grandes, de manera inmediata visualicé la pintura en mi mente, los créditos y autoría de la fotografia no pertenecen, dejo el link.",
  cost: 600,
  material: "Óleo en papel",
  dimensions: "22x30",
  disponible: true,
  reference: "https://pin.it/eUk4cQZwi",
};

const item4 = {
  image: Keane,
  imageRef: KeaneRef,
  title: "Keane",
  description:
    "Keane es mi banda favorita de la adolescencia y estuvieron haciendo tour por distintas regiones de mexico, entonces decidi hacer mi primer dibujo semi-automatico conmemorando su 20 aniversario, usando los colores de referencia que venian en la fotografia original, no fue tan sencillo pero haber logrado captar la escencia de cada integrante, los créditos y autoría de la fotografia no pertenecen, dejo el link.",
  cost: 600,
  material: "Dibujo automatico y marcador de alcohol",
  dimensions: "22x30",
  disponible: false,
};

const item5 = {
  image: Trees,
  imageRef: TreesRef,
  title: "Camecuaro",
  description:
    "Camecuaro es un parque ubnicado en Michoacan, Mexico, y esta pintura fue un pedido de una gran amiga mia que es originaria de Michoacan y queria tener un recuerdo de su tierra, la pintura fue hecha a partir de una fotografia que ella me proporciono, y el resto estaba en mi en darle un toque personal y único a la obra, fusionando su vision fotografica con mi estilo artístico.",
  cost: 600,
  material: "Óleo en papel",
  dimensions: "22x30",
  disponible: false,
};

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [item, setItem] = useState(undefined);

  // Create an array of all items for iterative rendering
  const items = [item5, item4, item1, item2, item3];

  return (
    <div className="App">
      <div className="header-and-body">
        <div className="header-container">
          <h2 className="header">🌻 El diario de Arni 🌻</h2>
        </div>
        <Container>
          <Row>
            {items.map((currentItem, index) => (
              <Col
                key={currentItem.title}
                xs={6}
                md={6}
                className={index === items.length - 1 ? "mx-auto" : ""}
              >
                <Frame
                  {...currentItem}
                  onClick={() => setIsPanelOpen(true)}
                  setItem={setItem}
                ></Frame>
                <FrameDescription
                  title={currentItem.title}
                  description={currentItem.description}
                  cost={currentItem.cost}
                  disponible={currentItem.disponible}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <hr className="separator" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
