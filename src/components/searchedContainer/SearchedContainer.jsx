import { BookCard } from "../BookCard/BookCard"

export const SearchedContainer = ({ data, bookName }) => {
  return (
    <>
      <h2>Resultado de búsqueda para: {bookName}</h2>
      {data?.length === 0 ?
        <div className="alert alert-info">
          No se encontraron resultados para "{bookName}".
        </div> :
        data?.map(book => (
          <BookCard key={book.id} book={book} />))
      }
    </>
  )
}
