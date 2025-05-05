"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        Have a question? We'd love to hear from you!
      </p>

      <Row className="justify-content-center">
        {/* Form Contact */}
        <Col md={6}>
          <Card className="p-4 shadow">
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  required
                />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Contact Information */}
        <Col md={5} className="d-flex align-items-center">
          <Card className="p-4 shadow w-100">
            <h5>Contact Information</h5>
            <p>
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p>
              <strong>Email:</strong> contact@example.com
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
