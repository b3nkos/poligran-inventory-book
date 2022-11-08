import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
  let { bookId } = useParams();
  const [book, setBook] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${bookId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setBook(result);
      });
  }, []);

  return (
    <Row>
      <Col md={3}>
        <Card.Img
          variant="top"
          src={`https://api.lorem.space/image/book?w=218&h=320&t=1`}
        />
      </Col>
      <Col>
        <h3>{book.name}</h3>
        <p>{book.description}</p>
        <Button variant="secondary" onClick={handleShow}>
          Editar
        </Button>{" "}
        <Button variant="danger">Archivar</Button>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar información de libro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control value={book.title} />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={10} value={book.description}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};
