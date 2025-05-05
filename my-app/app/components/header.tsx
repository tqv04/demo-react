"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import {
  faShoppingCart,
  faArrowLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
function Header() {
  interface MenuType {
    id: number;
    name: string;
    price: number;
  }
  const [Posts, setPost] = useState<MenuType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/category");
      const data = await response.json();
      console.log("data:", data);
      setPost(data);
    };
    fetchData();
  }, []);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container className="p-2">
          <Navbar.Brand href="/" className="text-light">
            WHAT2EAT
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-light">
                About
              </Nav.Link>
              <NavDropdown
                title={<span className="text-light navdropdown">Menu</span>}
                id="basic-nav-dropdown"
                className="custom-dropdown"
              >
                {Posts.map((post) => (
                  <NavDropdown.Item href="/product" key={post.id}>
                    {post.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href="/ui" className="text-light">
                Blog
              </Nav.Link>
              <Nav.Link href="/contact" className="text-light">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="text" placeholder="Search" className="me-2" />
              <Button
                style={{ backgroundColor: "#2B3035", border: "none" }}
                className="btnSearch"
              >
                Submit
              </Button>
            </Form>

            <div className="d-flex align-items-center ms-3">
              <Link href="/cart">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="fa-icon ms-2"
                />
              </Link>
              <Link href="/admin">
                <FontAwesomeIcon icon={faUser} className="fa-icon mx-2" />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
