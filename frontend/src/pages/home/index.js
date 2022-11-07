import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

export const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setBooks(result);
      });
  }, []);

  return (
    <Row xs={1} md={5} className="g-5">
      {books.map((book, index) => (
        <Link
          to={`/book/${book.id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <Col key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={`https://api.lorem.space/image/book?w=218&h=320&t=${index}`}
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>This is a longer card with supporting...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Link>
      ))}
    </Row>
  );
};
