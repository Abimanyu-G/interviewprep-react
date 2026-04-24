import { useState } from "react";

function Users({ books, setBooks, users, setUsers }) {
  const [name, setName] = useState("");

  const addUser = () => {
   setUsers([...users,{ id: users.length + 1, name: name.trim(), borrowedBooks: [] },]);
      setName("");
  };


  const borrowBook = (userId, bookId) => {
    const book = books.find((b) => b.id === parseInt(bookId));
    if (!book) return;

    setBooks(books.filter((b) => b.id !== parseInt(bookId)));

    setUsers(
      users.map((user) =>
        user.id === userId
          ? { ...user, borrowedBooks: [...user.borrowedBooks, book] }
          : user,
      ),
    );
  };

  const returnBook = (userId, bookId) => {
    const user = users.find((u) => u.id === userId);
    const book = user.borrowedBooks.find((b) => b.id === bookId);

    setUsers(
      users.map((u) =>
        u.id === userId
          ? {
              ...u,
              borrowedBooks: u.borrowedBooks.filter((b) => b.id !== bookId),
            }
          : u,
      ),
    );

    setBooks([...books, book]);
  };

  return (
    <>
      <h2>Users</h2>
      <input
        type="text"
        placeholder="Add User"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}

              <select
                defaultValue=""
                onChange={(e) => {
                  borrowBook(user.id, e.target.value);
                  e.target.value = "";
                }}
              >
                <option value="" disabled>
                  Borrow a book
                </option>
                {books.map((book) => (
                  <option key={book.id} value={book.id}>
                    {book.title}
                  </option>
                ))}
              </select>
            

            {user.borrowedBooks.length > 0 && (
              <ul>
                {user.borrowedBooks.map((book) => (
                  <li key={book.id}>
                    {book.title}
                    <button onClick={() => returnBook(user.id, book.id)}>
                      Return
                    </button>
                  </li>
                ))}
              </ul>
            )}

            </li>
        ))}
      </ul>
    </>
  );
}

export default Users;
