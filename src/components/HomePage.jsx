import { useState } from "react";
import { useForm } from "../hooks"
import { getOnlineBooks } from "../utils/getOnlineBooks";

export const HomePage = () => {

    const [books, setBooks] = useState([]);

    const { bookName, onInputChange, onResetForm } = useForm({ bookName: '' });

    const onSubmit = async(event) => {
        event.preventDefault();
        const books = await getOnlineBooks(bookName);
        console.log(books)
        setBooks(books)
        onResetForm();
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar"
                    name="bookName"
                    value={bookName}
                    onChange={onInputChange}
                />
            </form>
            <ul>
                {books.length > 0 && books.map(book => (
                    <li key={book.id}>{book.title}</li>
                )
                )}
            </ul>


        </>

    )
}
/* <GifGrid
                    key={book.id}
                    category={book.author}
                /> */