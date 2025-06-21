export const getOnlineBooks = async (bookName) => {
    const API_KEY = 'AIzaSyARcQEB_C_BPrp23ZAYe_Bse36L-ogvSyQ';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const books = data.items.map((bk) => ({
        id: bk.id,
        image: bk.volumeInfo.imageLinks.thumbnail,
        title: bk.volumeInfo.title,
        category: bk.volumeInfo.categories,
        authors: bk.volumeInfo.authors,
        pageCount: bk.volumeInfo.pageCount,
        more: bk.volumeInfo.canonicalVolumeLink,
    }));
    return books;
}