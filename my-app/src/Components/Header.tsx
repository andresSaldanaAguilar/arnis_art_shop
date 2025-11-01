import React from "react";
import { Navbar, Container } from "react-bootstrap";
import TitleImage from "../Images/originales/title.png"; // moved to originales

const Header: React.FC = () => {
  return (
    <header>
      <Navbar
        bg="light"
        expand="md"
        className="border-0 shadow-sm py-3"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container className="d-flex justify-content-center">
          {/* Centered logo image */}
          <Navbar.Brand
            href="#"
            className="m-0 mx-auto d-flex align-items-center"
          >
            <img
              src={TitleImage}
              alt="Arnis Art Shop"
              style={{ height: "96px", width: "auto", maxWidth: "220px" }}
              className="img-fluid"
            />
            <span className="visually-hidden">Arnis Art Shop</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
