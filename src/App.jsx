import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Books from "./components/books";
import Users from "./components/users";
import Admin from "./admindashboard";

function App() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <>
      <div>
        <h2>Welcome to Library Management</h2>
      </div>

      <BrowserRouter>
        <div>
          <nav>
            <Link to="/books">Books</Link> | <Link to="/users">Users</Link> |{" "}
            <Link to="/admin">Admin</Link>
          </nav>
          <Routes>
            <Route
              path="/books"
              element={<Books books={books} setBooks={setBooks} />}
            />
            <Route
              path="/users"
              element={
                <Users
                  books={books}
                  setBooks={setBooks}
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <Admin
                  books={books}
                  setBooks={setBooks}
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
