"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { Signup } from "../action/auth";
import { useActionState } from "react";
export default function SignUpPage() {
  const [state, action, pending] = useActionState(Signup, undefined);
  return (
    <Container className="d-flex justify-content-center align-items-center my-5">
      <Card
        style={{
          width: "60rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.32)",
          borderRadius: "10px",
        }}
        className="p-4"
      >
        <h2 className="text-center mb-3">Sign Up</h2>
        <Form action={action}>
          <Row className="mb-3">
            <Form.Group as={Row} className="mb-3" controlId="email">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="email@example.com"
                required
              />
              {state?.errors?.email && (
                <Form.Text>{state.errors.email}</Form.Text>
              )}
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="name">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              {state?.errors?.name && (
                <Form.Text>{state.errors.name}</Form.Text>
              )}
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Row} className="mb-3" controlId="password">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              {state?.errors?.password && (
                <div>
                  <Form.Text>Password must</Form.Text>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li key={error}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-center mt-3">
            <Button variant="primary" type="submit" disabled={pending}>
              Submit
            </Button>
          </div>
        </Form>
        <div className="text-center mt-3">
          <span style={{ fontSize: "14px" }}>
            Already have an account?{" "}
            <Link href="/login" className="text-decoration-none">
              Login
            </Link>
          </span>
        </div>
      </Card>
    </Container>
  );
}
