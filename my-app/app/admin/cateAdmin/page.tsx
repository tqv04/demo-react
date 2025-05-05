"use client";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import AdminLayout from "../adminLayout";
import { ToastContainer, toast } from "react-toastify";
import CateModal from "../component/createCate.modals";
import CateUpdateModal from "../component/updateCate.moadls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
export default function CategoryAdmin() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<CateType | null>(null);
  const handleUpdate = (post: CateType) => {
    setSelectedPost(post);
    setShowUpdateModal(true);
  };
  const handleDelete = (id: number) => {
    fetch(`https://be-friedking.onrender.com/categories/${id}`, {
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
  interface PizzaType {
    id: number;
    name: string;
    quanity: string;
    imageUrl: string;
  }
  const [Pizza, setPost] = useState<PizzaType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://be-friedking.onrender.com/categories"
      );
      const data = await response.json();
      console.log("data:", data);
      setPost(data);
    };
    fetchData();
  }, []);
  return (
    <AdminLayout>
      <div className="d-flex justify-content-between align-items-center mb-4 px-3">
        <h2 className="fw-bold mb-0">Category Management</h2>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Category
        </Button>
      </div>

      <div className="px-3">
        <Table responsive bordered hover className="rounded shadow-sm">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="align-middle text-center">
            {Pizza.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td className="fw-semibold">{data.name}</td>
                <td>{data.quanity}</td>
                <td>
                  <Image
                    src={data.imageUrl}
                    alt={data.name}
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "cover",
                      margin: "0 auto",
                    }}
                    rounded
                  />
                </td>
                <td>
                  <div className="d-flex justify-content-center gap-2 flex-wrap">
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

      <CateModal showModal={showModal} setShowModal={setShowModal} />
      <CateUpdateModal
        showUpdateModal={showUpdateModal}
        setUpdateModal={setShowUpdateModal}
        post={selectedPost}
      />
      <ToastContainer />
    </AdminLayout>
  );
}
