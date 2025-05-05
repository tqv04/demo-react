"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
export default function HeaderAdmin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid style={{ borderBottom: "1px solid #cdcdcd" }}>
        <Row>
          <Navbar>
            <Container>
              <Navbar.Text onClick={handleShow}>
                <h1 style={{ cursor: "pointer", fontSize: "24px" }}>Admin</h1>
              </Navbar.Text>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <a href="/login">Vuong Ta</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>Admin</Offcanvas.Header>
            <Offcanvas.Body>
              <Link href="#"></Link>
            </Offcanvas.Body>
            <Link
              href="/"
              style={{ textDecoration: "none", fontSize: "16px" }}
              className="p-3 d-flex justify-content-end text-dark"
            >
              Log out
            </Link>
          </Offcanvas>
        </Row>
      </Container>
      <Nav variant="tabs" defaultActiveKey="/home" className="p-2">
        <Nav.Item>
          <Link href="/admin" className="nav-link text-dark">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/admin/productAdmin" className="nav-link text-dark">
            Product
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/admin/cateAdmin" className="nav-link text-dark">
            Category
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
