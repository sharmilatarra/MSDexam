const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let books = [
  { id: 1, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", price: 1200 },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", price: 499 },
  { id: 3, title: "Atomic Habits", author: "James Clear", price: 899 }
];

app.get("/", (req, res) => {
  res.redirect("/books");
});

app.get("/books", (req, res) => {
  res.render("books", { books: books });
});

app.get("/books/new", (req, res) => {
  res.render("new");
});

app.post("/books", (req, res) => {
  const { title, author, price } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    price: Number(price)
  };
  books.push(newBook);
  res.redirect("/books");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
