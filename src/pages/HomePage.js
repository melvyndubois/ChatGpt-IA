import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chat from "../components/Chat";
import "./HomePage.css";
// Importe l'image que tu souhaites utiliser pour le header
import headerImage from "../img/header-image.jpg";

const HomePage = () => {
  return (
    <div>
      <div className="header">
        <img src={headerImage} alt="Header" className="header-image" />
        <div className="header-text">Bienvenue sur notre site web</div>
      </div>
      <Container className="home-content">
        <Row>
          <Col>
            <h2>Chat avec nos avatars</h2>
            <Chat />
          </Col>
        </Row>
        {/* Ajoute d'autres sections pour rendre la page plus attrayante ici */}
      </Container>
    </div>
  );
};

export default HomePage;
