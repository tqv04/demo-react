"use client";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import AdminLayout from "../adminLayout";
import Modals from "@/app/admin/component/create.modals";
import UpdateModal from "@/app/admin/component/update.moadls";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
export default function ProductAdmin() {
  interface PizzaType {
    id: number;
    name: string;
    category: string;
    imageUrl: string;
    price: string;
    rating: number;
    time: string;
  }
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  const handleUpdate = (post: PostType) => {
    setSelectedPost(post);
    setShowUpdateModal(true);
  };
  const handleDelete = (id: number) => {
    fetch(`https://be-friedking.onrender.com/pizza/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("Delete failed!");
        } else {
          toast.success("Deleted successfully!");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Delete failed!");
      });
  };

  const [showModal, setShowModal] = useState(false);
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
  return (
    <AdminLayout>
      <div className="d-flex justify-content-between align-items-center mb-4 px-3">
        <h2 className="fw-bold">Product Management</h2>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Product
        </Button>
      </div>

      <div className="px-3">
        <Table responsive bordered hover className="rounded shadow-sm">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="align-middle text-center">
            {Pizza.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td className="fw-semibold">{data.name}</td>
                <td>${data.price}</td>
                <td>
                  <Image
                    src={data.imageUrl}
                    alt={data.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      margin: "0 auto",
                    }}
                    rounded
                  />
                </td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => handleUpdate(data)}
                    >
                      <FontAwesomeIcon icon={faPen} className="me-1" />
                      Edit
                    </Button>
                    <Button variant="outline-warning" size="sm">
                      <FontAwesomeIcon icon={faEye} className="me-1" />
                      View
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(data.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="me-1" />
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modals showModal={showModal} setShowModal={setShowModal} />
      <UpdateModal
        showUpdateModal={showUpdateModal}
        setUpdateModal={setShowUpdateModal}
        post={selectedPost}
      />
      <ToastContainer />
    </AdminLayout>
  );
}
