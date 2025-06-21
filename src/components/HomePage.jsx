import { useState } from 'react';
import { useFetch, useForm } from '../hooks'
import { getStructuredInfoBooks } from '../utils/getStructuredInfoBooks';
import { Spinner } from './Spinner/Spinner';
import { ErrorMessage } from './errorMessage/ErrorMessage';
import { SearchedContainer } from './searchedContainer/SearchedContainer';
import { useContext } from "react"
import { BookContext } from '../hooks/context/BookContext';

export const HomePage = () => {

    const { bookName, onInputChange, onResetForm } = useForm({ bookName: '' });
    const API_KEY = 'AIzaSyARcQEB_C_BPrp23ZAYe_Bse36L-ogvSyQ';

    const [url, setUrl] = useState(null);
    const { data, isLoading, hasError } = useFetch(url, getStructuredInfoBooks, 'books');

    const { book, setBook } = useContext( BookContext );

    const onSubmit = async (event) => {
        event.preventDefault();
        setUrl(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${API_KEY}`);
        setBook(bookName);
        onResetForm();
    }

    return (
        <>
            <h1>Google Books</h1>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    className='form-control mb-3'
                    placeholder='Buscar'
                    name='bookName'
                    value={bookName}
                    onChange={onInputChange}
                />
            </form>
            <div className='row'>
                {
                    isLoading ? <Spinner /> :
                        hasError ?
                            <ErrorMessage /> :
                            <SearchedContainer data={data} bookName={book} />
                }
            </div>
        </>
    )
}