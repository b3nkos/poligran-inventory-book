import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const SinglePost = () => {
  let { bookId } = useParams();
  const [book, setBook] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://inventory.poligran.com:8080/api/books/${bookId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setBook(result);
        reset(result);
      });
  }, [reset]);

  const updateBook = (data) => {
    delete data.id;
    console.log("data", data);
    fetch(`http://inventory.poligran.com:8080/api/books/${book.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    }).then(() => {
      setBook(data);
      handleClose(false);
    });
  };

  const deleteBook = () => {
    fetch("http://inventory.poligran.com:8080/api/books", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...book,
      }),
    }).then(() => {
      handleClose(false);
      navigate("/");
    });
  };

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
        <p>Autor: {book.author}</p>
        <p>Isbn: {book.isbn}</p>
        <p>Precio: {book.price}</p>
        <p>Categoría: {book.category}</p>
        <p>Año publicación: {book.publicationYear}</p>
        <Button variant="secondary" onClick={handleShow}>
          Editar
        </Button>{" "}
        <Button variant="danger" onClick={deleteBook}>
          Archivar
        </Button>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar información de libro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit((data) => updateBook(data))}>
            <Form.Group className="mb-3">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { value: book.name })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                {...register("description", { value: book.description })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Autor</Form.Label>
              <Form.Control {...register("author", { value: book.author })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Isbn</Form.Label>
              <Form.Control {...register("isbn", { value: book.isbn })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control {...register("price", { value: book.price })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                {...register("category", { value: book.category })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Año publicación</Form.Label>
              <Form.Control
                {...register("publicationYear", {
                  value: book.publicationYear,
                })}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" type="submit">
                Actualizar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Row>
  );
};
