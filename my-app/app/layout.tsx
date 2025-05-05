"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePathname } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const pathPlace =
    pathName.startsWith("/login") ||
    pathName.startsWith("/signup") ||
    pathName.startsWith("/admin");
  return (
    <html lang="en">
      <body>
        {!pathPlace && <Header />}
        {children}
        <ToastContainer />
        {!pathPlace && <Footer />}
      </body>
    </html>
  );
}
