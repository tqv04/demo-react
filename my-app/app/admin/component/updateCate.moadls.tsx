import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iUpdate {
  showUpdateModal: boolean;
  setUpdateModal: (value: boolean) => void;
  post: CateType | null;
}
function CateUpdateModal(props: iUpdate) {
  const { showUpdateModal, setUpdateModal, post } = props;
  const [name, setName] = useState<string>("");
  const [quanity, setQuanity] = useState<string>("");
  const [imageUrl, setImage] = useState<string>("");
  useEffect(() => {
    if (post && post.id) {
      setName(post.name);
      setQuanity(post.quanity);
      setImage(post.imageUrl);
    }
  }, [post]);
  const handleSubmit = () => {
    fetch(`http://localhost:9000/categories/${post?.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ name, quanity, imageUrl }),
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
    setQuanity("");
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
              <Form.Label>Quanity </Form.Label>
              <Form.Control
                type="text"
                placeholder="quanity"
                value={quanity}
                onChange={(e) => setQuanity(e.target.value)}
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

export default CateUpdateModal;
