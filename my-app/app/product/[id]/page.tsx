"use client";
import { use } from "react";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";
import { Row, Col, Image, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
interface PizzaType {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  price: number;
  rating: number;
  time: string;
}

const PostDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const fetcher: Fetcher<PizzaType, string> = (url) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:9000/pizza/${id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const addToCart = (product: PizzaType) => {
    const cartData = localStorage.getItem("cart");
    const currentCart: CartItem[] = cartData ? JSON.parse(cartData) : [];

    const existingItem = currentCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
    toast.success(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  if (isLoading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Lỗi khi tải dữ liệu!</p>;
  if (!data) return <p>Không tìm thấy sản phẩm!</p>;

  return (
    <>
      <Container className="my-4">
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => window.history.back()}>
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>{data.category}</Breadcrumb.Item>
          <Breadcrumb.Item active>{data.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="mt-3">
          <Col md={6}>
            <Image src={data.imageUrl} alt={data.name} />
          </Col>
          <Col md={6}>
            <h2>{data.name}</h2>
            <h4 className="text-danger">{data.price}₫</h4>
            <p>{data.rating || "Không có mô tả"}</p>
            <Button
              onClick={() =>
                toast.error("Hiện tại web chưa có thanh toán bạn ơi!")
              }
              variant="danger"
            >
              Mua ngay
            </Button>
            <Button
              variant="dark"
              className="ms-2"
              onClick={() => addToCart(data)}
            >
              Thêm vào giỏ hàng
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostDetail;
