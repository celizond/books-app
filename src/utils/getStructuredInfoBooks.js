export const getStructuredInfoBooks = (data, bookName) => {
    if (!data.items) return [];
    const books = data.items.map((bk) => ({
        id: bk.id,
        image: bk.volumeInfo.imageLinks?.thumbnail,
        title: bk.volumeInfo.title,
        category: bk.volumeInfo.categories,
        authors: bk.volumeInfo.authors,
        pageCount: bk.volumeInfo.pageCount,
        more: bk.volumeInfo.canonicalVolumeLink,
    }));
    localStorage.setItem('books', JSON.stringify({[bookName] : books}));
    return books;
}