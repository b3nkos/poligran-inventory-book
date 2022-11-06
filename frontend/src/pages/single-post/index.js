import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
  let { bookId } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/book/${bookId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setBook(result);
      });
  }, []);
  return <p>{book.title}</p>;
};
