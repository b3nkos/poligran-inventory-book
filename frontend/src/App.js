import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Home } from "./pages/home";
import { SinglePost } from "./pages/single-post";

import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-journal-check icon-book"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
            </svg>
            <span className="title">Book's inventory</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-5 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/book/:bookId`} element={<SinglePost />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
