import { getStructuredInfoBooks } from "../../utils/getStructuredInfoBooks";
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "../spinner/Spinner";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { SearchData } from "../searchData/SearchData";

export const SearchContainer = ({ url, book }) => {

const { data, isLoading, hasError } = useFetch(url, getStructuredInfoBooks, 'books', book);

  return (
    <div className='row'>
      {
        isLoading ? <Spinner /> :
          hasError ?
            <ErrorMessage /> :
            (data && <SearchData data={data} bookName={book} />)
      }
    </div>
  )
}
