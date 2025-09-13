import React from "react";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer
      className="mt-auto py-4 bg-white border-top small text-secondary"
      style={{ fontSize: ".8rem" }}
    >
      <Container className="text-center">
        {/* Placeholder for future footer image */}
        <div>
          © {new Date().getFullYear()} Arnis Art Shop. Todos los derechos
          reservados.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
