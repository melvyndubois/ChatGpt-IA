import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <Container className="contact-page">
      <Row>
        <Col>
          <h2>Contactez-nous</h2>
          <p>
            Si vous avez des questions ou des préoccupations, n'hésitez pas à
            nous contacter en utilisant le formulaire ci-dessous.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Votre message"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
        {/* Ajoute d'autres informations de contact ou des éléments visuels ici, si nécessaire */}
      </Row>
    </Container>
  );
};

export default ContactPage;
