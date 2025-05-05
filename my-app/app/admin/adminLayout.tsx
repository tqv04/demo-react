"use client";
import HeaderAdmin from "./component/headerAdmin";
import ProductAdmin from "./productAdmin/page";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderAdmin />
      <main>{children}</main>
    </>
  );
}
