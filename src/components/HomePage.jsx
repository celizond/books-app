import { useState } from "react";
import { useForm } from "../hooks"
import { getOnlineBooks } from "../utils/getOnlineBooks";
import { BookCard } from "./BookCard/BookCard";

export const HomePage = () => {

    const [books, setBooks] = useState([]);

    const { bookName, onInputChange, onResetForm } = useForm({ bookName: '' });

    const onSubmit = async (event) => {
        event.preventDefault();
        const books = await getOnlineBooks(bookName);
        console.log(books)
        setBooks(books)
        onResetForm();
    }

    return (
        <>
            <h1>Google Books API</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Buscar"
                    name="bookName"
                    value={bookName}
                    onChange={onInputChange}
                />
            </form>
            <div className="row">
            {books.length > 0 && books.map(book => (
                <BookCard book={book} />
            ))}
            </div>
        </>
    )
}
/* <GifGrid
                    key={book.id}
                    category={book.author}
                /> */