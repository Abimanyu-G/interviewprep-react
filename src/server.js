import express from "express"
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/books', (req, res) => 
    res.json(books));

app.post("/books", (req, res) => {
  const book = { id: books.length + 1, title: req.body.title };
  books.push(book);
  res.json(book);
});

app.post("/books/:id", (req, res) => {
  const book = { id: books.length + 1, title: req.body.title };
  books.push(book);
  res.json(book);
});

app.get

app.listen(PORT, ()=>{
    console.log(`Running on ${PORT}`)
})