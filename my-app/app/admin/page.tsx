"use client";
import Accordion from "react-bootstrap/Accordion";
import AdminLayout from "./adminLayout";
export default function Admin() {
  return (
    <AdminLayout>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header> About the Admin Page #1</Accordion.Header>
          <Accordion.Body>
            Trang Admin Dashboard là khu vực dành riêng cho quản trị viên, giúp
            theo dõi và quản lý toàn bộ hệ thống của website. Tại đây, bạn có
            thể kiểm soát sản phẩm, đơn hàng, người dùng, nội dung bài viết và
            các cài đặt quan trọng khác. Mọi tính năng được thiết kế trực quan,
            dễ thao tác và hiển thị thông tin một cách rõ ràng, giúp bạn làm
            việc hiệu quả hơn.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Main Features #2</Accordion.Header>
          <Accordion.Body>
            <p>
              Quản lý sản phẩm: Thêm, sửa, xóa món ăn, cập nhật hình ảnh, giá
              tiền và danh mục.
            </p>
            <p>
              Quản lý đơn hàng: Theo dõi tình trạng đơn hàng, xác nhận và cập
              nhật trạng thái giao hàng.
            </p>
            <p>
              Quản lý người dùng: Kiểm soát tài khoản khách hàng, quản trị viên,
              phân quyền sử dụng.
            </p>
            <p>
              Quản lý bài viết: Thêm bài viết khuyến mãi, tin tức, chỉnh sửa nội
              dung hiển thị trên website.
            </p>
            <p>
              Thống kê tổng quan: Hiển thị số liệu sản phẩm, đơn hàng, doanh thu
              nhanh chóng, trực quan.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </AdminLayout>
  );
}
