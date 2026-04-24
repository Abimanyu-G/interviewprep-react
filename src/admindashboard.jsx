import { useState } from "react";

function Admin({ books, setBooks, users, setUsers }) {

    
  return (
    <>
      <h2>Admin Dashboard</h2>

      <h3>All Books ({books.length} available)</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>

      <h3>All Users ({users.length})</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — borrowed:{" "}
            {user.borrowedBooks.length === 0
              ? "nothing"
              : user.borrowedBooks.map((b) => b.title).join(", ")}
          </li>
        ))}
      </ul>

      <h3>
        Borrowed Books (
        {users.reduce((acc, u) => acc + u.borrowedBooks.length, 0)})
      </h3>
      <ul>
        {users.flatMap((user) =>
          user.borrowedBooks.map((book) => (
            <li key={`${user.id}-${book.id}`}>
              <strong>{book.title}</strong> — borrowed by {user.name}
            </li>
          )),
        )}
      </ul>
    </>
  );
}

export default Admin;
