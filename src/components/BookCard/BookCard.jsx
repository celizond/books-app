
export const BookCard = ({ book }) => {

  const { image, title, category, authors, pageCount, more } = book;
  return (
    <div className='card col-sm-4 col-md-3 col-lg-2'>
      <img height='300px' src={image} alt={title} />
      <div className='card-body'>
        <h5 className='card-title text-capitalize'> {title} </h5>
        <p>
          Categorias: {category}
        </p>
        <p className='card-text'>
          Autores: {authors}
        </p>
        <p>
          {pageCount > 0 && 'Cantidad de páginas: ' + pageCount}
        </p>
        <a href={more} className='btn btn-outline-info'>Ver más</a>
      </div>
    </div>
  )
}
