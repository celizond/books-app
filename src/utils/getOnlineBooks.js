export const getOnlineBooks = async (bookName) => {
    const API_KEY = 'AIzaSyARcQEB_C_BPrp23ZAYe_Bse36L-ogvSyQ';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const books = data.items.map((bk) => ({
        id: bk.id,
       /*  authorName: bk.volumeInfo?.authors[0], */
        title: bk.volumeInfo.title,
        image: bk.volumeInfo.imageLinks.thumbnail,
        /* category: bk.volumeInfo.categories[0], */
    }));
    console.log(books)
    return books;
}