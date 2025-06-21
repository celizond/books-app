import { useState } from 'react';
import { useFetch, useForm } from '../hooks'
import { getStructuredInfoBooks } from '../utils/getStructuredInfoBooks';
import { BookCard } from './BookCard/BookCard';
import { Spinner } from './Spinner/Spinner';

export const HomePage = () => {

    const { bookName, onInputChange, onResetForm } = useForm({ bookName: '' });
    const API_KEY = 'AIzaSyARcQEB_C_BPrp23ZAYe_Bse36L-ogvSyQ';

    const [url, setUrl] = useState(null);
    const { data, isLoading, hasError } = useFetch(url, getStructuredInfoBooks);

    const onSubmit = async (event) => {
        event.preventDefault();
        setUrl(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${API_KEY}`);
        onResetForm();
    }    

    return (
        <>
            <h1>Google Books API</h1>
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
                        !hasError &&
                        data?.length > 0 && data.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))
                }
            </div>
        </>
    )
}