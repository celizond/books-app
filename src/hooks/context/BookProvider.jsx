import { useState } from "react"
import { BookContext } from "./BookContext"

/* const Book = {
    id: 'RIT-pWbkWKoC',
    image: 'http://books.google.com/books/content?id=RIT-pWbkWKoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    title: 'Who Were the Babylonians?',
    category: ['History'],
    authors: ['Bill T. Arnold'],
    pageCount: 162,
    more: 'https://play.google.com/store/books/details?id=RIT-pWbkWKoC'
} */

export const BookProvider = ({ children }) => {

    const [book, setBook] = useState(null);

    return (
        <BookContext.Provider value={{ book, setBook }}>
            {children}
        </BookContext.Provider>
    )
}
