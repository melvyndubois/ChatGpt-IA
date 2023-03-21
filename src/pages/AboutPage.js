import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container>
      <h1>Présentation de l'entreprise</h1>
      <Row>
        <Col>
          <p>
            Notre entreprise a été fondée en 20XX avec pour mission de fournir
            les meilleurs Notre entreprise a été fondée en 20XX avec pour
            mission de fournir les meilleurs services et produits à nos clients.
            Depuis lors, nous avons élargi notre gamme de services et développé
            une solide réputation pour notre engagement envers la qualité et la
            satisfaction de la clientèle.
          </p>
          <p>
            Au fil des années, nous avons établi des partenariats solides avec
            des entreprises et des fournisseurs de premier plan du secteur.
            Ensemble, nous travaillons en étroite collaboration pour offrir à
            nos clients des solutions innovantes et adaptées à leurs besoins.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
