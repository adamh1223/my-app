import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="./images/book-1.jpg" alt="Key Lime Garden Inn" />;
const Title = () => <h2>Key Lime Garden Inn</h2>;
const Author = () => {
  return (
    <h4 style={{ color: "#617d198", fontSize: "0.75rem", marginTop: "0.5rem" }}>
      Annie Cabot
    </h4>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);


