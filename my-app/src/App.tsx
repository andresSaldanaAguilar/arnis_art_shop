import React, { useState } from "react";
import Frame from "./Components/Frame.tsx";
import FrameDescription from "./Components/FrameDescription.tsx";
import SidePanel from "./Components/SidePanel.tsx";
import Footer from "./Components/Footer.tsx";
import "./App.css";
import { items } from "./data/items.ts";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [item, setItem] = useState<any>(undefined);

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
                <FrameDescription item={currentItem} />
              </Col>
            ))}
          </Row>
        </Container>
        <hr className="separator" />
        <Footer />{" "}
      </div>
      <SidePanel
        isOpen={isPanelOpen}
        item={item}
        onClose={() => setIsPanelOpen(false)}
      />
    </div>
  );
}

export default App;
