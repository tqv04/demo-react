"use client";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Signup } from "../action/auth";
import { useActionState } from "react";
function SignupForm() {
  const [state, action, pending] = useActionState(Signup, undefined);
  return (
    <Container>
      <Form action={action}>
        <Form.Group as={Row} className="mb-3" controlId="email">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col>
            <Form.Control
              name="email"
              type="email"
              placeholder="email@example.com"
              required
            />
            {state?.errors?.email && (
              <Form.Text>{state.errors.email}</Form.Text>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="name">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            {state?.errors?.name && <Form.Text>{state.errors.name}</Form.Text>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="password">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
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
          </Col>
        </Form.Group>
        <Button disabled={pending} type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
export default SignupForm;
