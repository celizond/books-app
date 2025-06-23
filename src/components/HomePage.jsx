import { useEffect, useState } from 'react';
import { useFetch, useForm } from '../hooks'
import { getStructuredInfoBooks } from '../utils/getStructuredInfoBooks';
import { Spinner } from './Spinner/Spinner';
import { ErrorMessage } from './errorMessage/ErrorMessage';
import { SearchedContainer } from './searchedContainer/SearchedContainer';

export const HomePage = () => {

    const { bookName, onInputChange, onResetForm } = useForm({ bookName: '' });
    const API_KEY = 'AIzaSyARcQEB_C_BPrp23ZAYe_Bse36L-ogvSyQ';

    const [url, setUrl] = useState(null);
    const [book, setBook] = useState(null);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('books') || '{}');
        const firstKey = Object.keys(stored)[0];
        if (firstKey) setBook(firstKey);
    }, []);

    const { data, isLoading, hasError } = useFetch(url, getStructuredInfoBooks, 'books', book);

    const onSubmit = async (event) => {
        event.preventDefault();
        setBook(bookName);
        setUrl(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${API_KEY}`);
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
                            (data && <SearchedContainer data={data} bookName={book} />)
                }
            </div>
        </>
    )
}