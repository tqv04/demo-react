import Link from "next/link";
import Product from "./product/page";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Post from "./post/page";
export default async function Home() {
  return (
    <>
      <Container fluid className="p-0 m-0">
        <Image
          src="./banner.png"
          alt="Banner"
          style={{ width: "100%", height: "auto", display: "block" }}
        ></Image>
      </Container>
      <Product />
    </>
  );
}
