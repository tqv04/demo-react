"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Card, Row } from "react-bootstrap";
import Link from "next/link";
import { Login } from "../action/auth";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, action, pending] = useActionState(Login, undefined);

  return (
    <Container className="d-flex justify-content-center align-items-center my-5">
      <Card
        style={{
          width: "40rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.32)",
          borderRadius: "10px",
        }}
        className="p-4"
      >
        <h2 className="text-center mb-3">Login</h2>
        <Form action={action}>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="email@example.com"
                required
              />
              {state?.errors?.email && (
                <Form.Text className="text-danger">
                  {state.errors.email}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              {state?.errors?.password && (
                <Form.Text className="text-danger">
                  {state.errors.password}
                </Form.Text>
              )}
            </Form.Group>
          </Row>

          {state?.message && (
            <div className="text-danger text-center mb-2">{state.message}</div>
          )}

          <div className="d-flex justify-content-center mt-3">
            <Button variant="primary" type="submit" disabled={pending}>
              {pending ? "Logging in..." : "Login"}
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <span style={{ fontSize: "14px" }}>
            Don't have an account?{" "}
            <Link href="/signup" className="text-decoration-none">
              Sign Up
            </Link>
          </span>
        </div>
      </Card>
    </Container>
  );
}
