import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const postBook = (data) => {
    fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000000000),
        ...data,
      }),
    }).then(() => {
      navigate("/");
    })
  };

  return (
    <Form onSubmit={handleSubmit((data) => postBook(data))}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre libro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese nombre del libro"
          autoComplete="off"
          {...register("name")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Descripción libro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese descripción del libro"
          autoComplete="off"
          {...register("description")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Isbn libro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Isbn del libro"
          autoComplete="off"
          {...register("isbn")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Precio libro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Precio del libro"
          autoComplete="off"
          {...register("price")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Autor libro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese autor del libro"
          autoComplete="off"
          {...register("author")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoría libro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Categoría del libro"
          autoComplete="off"
          {...register("category")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Año publicación libro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Año publicación del libro"
          autoComplete="off"
          {...register("publicationYear")}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
  );
};
