"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Product() {
  interface PizzaType {
    id: number;
    name: string;
    category: string;
    imageUrl: string;
    price: number;
    rating: number;
    time: string;
  }
  const [Pizza, setPost] = useState<PizzaType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://be-friedking.onrender.com/pizza");
      const data = await response.json();
      console.log("data:", data);
      setPost(data);
    };
    fetchData();
  }, []);
  const [cart, setCart] = useState<PizzaType[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product: PizzaType) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col>
            <ButtonGroup className="mt-4 border border-dark ">
              <Button
                variant="dark"
                style={{ paddingLeft: "30px", paddingRight: "30px" }}
              >
                All
              </Button>
              <Button
                variant="light"
                style={{ paddingLeft: "30px", paddingRight: "30px" }}
              >
                Discount
              </Button>
              <Button
                variant="light"
                style={{ paddingLeft: "30px", paddingRight: "30px" }}
              >
                Free delivery
              </Button>
              <Button
                variant="light"
                style={{ paddingLeft: "30px", paddingRight: "30px" }}
              >
                New
              </Button>
              <Button
                variant="light"
                style={{ paddingLeft: "30px", paddingRight: "30px" }}
              >
                Hot
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <ButtonGroup className="bg-light">
              <DropdownButton
                as={ButtonGroup}
                title="Filters"
                variant="light"
                className="border border-dark"
              >
                <Dropdown.Item eventKey="1">Price $10 - $15</Dropdown.Item>
                <Dropdown.Item eventKey="2">Price $15 -$20</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </Col>
        </Row>

        <div className="row mt-2 my-4">
          {Pizza.map((data) => (
            <div
              key={data.id}
              className="col-3 d-flex flex-column mt-3"
              style={{ gap: "10px", cursor: "pointer" }}
            >
              <Link href={`/product/${data.id}`}>
                {" "}
                <img
                  src={data.imageUrl}
                  alt={data.name}
                  className="food-width"
                />
              </Link>

              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>{data.name}</p>
                <span>${data.price}</span>
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-around" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "5px" }}
                >
                  <img
                    src="./ant-design_star-filled.png"
                    alt="Star"
                    className="star-width"
                  />
                  <span>{data.rating}</span>
                </div>
                <p style={{ margin: 0 }}>{data.time}</p>
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}
