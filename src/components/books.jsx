import { useState } from "react"

function Books({books, setBooks}){

    

    const[title, setTitle] = useState("")

     const addBook = () => {
       if (title.trim()) {
         setBooks([...books, { id: books.length + 1, title: title.trim() }]);
         setTitle("");
       }
     };  

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }


    return (
        <>
        <h2>Available Books</h2>
        <input type="text" placeholder="Add Book" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={addBook}>Add Book</button>

        <ul>
            {books.map(book => (
                <li key={book.id}>
                    {book.title}
                    </li>
            ))}
        </ul>

        <button onClick={() => deleteBook(books[0]?.id)}>Delete</button>
        </>
    )
}

export default Books