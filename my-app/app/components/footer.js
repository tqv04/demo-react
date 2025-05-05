"use client";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="p-3">
        <Row>
          <Col md={4} className="mb-3">
            <p style={{ fontSize: "20px" }}>WHAT2EAT</p>
            <p>Khám phá những món ăn ngon và công thức độc đáo!</p>
          </Col>

          <Col md={4} className="mb-3">
            <p style={{ fontSize: "20px" }}>Điều hướng</p>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-light text-decoration-none">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light text-decoration-none">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-light text-decoration-none">
                  Thực đơn
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-light text-decoration-none"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <p style={{ fontSize: "20px" }}>Kết nối với chúng tôi</p>
            <div>
              <a href="https://facebook.com" className="text-light me-3">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" className="text-light me-3">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://instagram.com" className="text-light">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <p className="m-0">© 2024 WHAT2EAT. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
