import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface iUpdate {
  showUpdateModal: boolean;
  setUpdateModal: (value: boolean) => void;
  post: PostType | null;
}
function UpdateModal(props: iUpdate) {
  const { showUpdateModal, setUpdateModal, post } = props;
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imageUrl, setImage] = useState<string>("");
  useEffect(() => {
    if (post && post.id) {
      setName(post.name);
      setPrice(post.price);
      setImage(post.imageUrl);
    }
  }, [post]);

  const handleSubmit = () => {
    fetch(`https://be-friedking.onrender.com/pizza/${post?.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ name, price, imageUrl }),
    })
      .then(function (res) {
        console.log(res);
        if (!res.ok) {
          toast.error("Post added Error");
        }
        toast.success("Post added Successfully");
        window.location.reload();
      })
      .catch(function (res) {
        console.log(res);
        return toast.error("Post added Error");
      });
  };
  const handleClose = () => {
    setName("");
    setPrice("");
    setImage("");
    setUpdateModal(false);
  };
  return (
    <>
      <Modal
        show={showUpdateModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price </Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ImageUrl </Form.Label>
              <Form.Control
                type="text"
                placeholder="Image"
                value={imageUrl}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
