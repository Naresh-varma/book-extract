import { useState } from 'react'
import domPurify from 'dompurify'

function sortBooks(books, sort) {
    if (!sort.key || sort.direction === 'default') return books;

    const key = sort.key;
    // props are read-only
    return [...books].sort((a, b) => {
        if (a[key] < b[key]) {
            return sort.direction === 'asc' ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return sort.direction === 'asc' ? 1 : -1;
        }
        // no change in order
        return 0;
    })
}

function getTableBody(books) {
    return books.map((book, index) => (
        <tr key={book.isbn}>
        <td>{index + 1}</td>
        <td>
            <a
            href={`https://extracts.panmacmillan.com/extract?isbn=${book.isbn}`}
            target="_blank"
            rel="noopener noreferrer"
            >
            <img src={book.jacketUrl} alt={book.title} />
            </a>
        </td>
        <td>{book.author}</td>
        <td
            dangerouslySetInnerHTML={{
            __html: domPurify.sanitize(book.authorBiography),
            }}
        ></td>
        <td>
            <a
            href={`https://extracts.panmacmillan.com/extract?isbn=${book.isbn}`}
            target="_blank"
            rel="noopener noreferrer"
            >
            {book.title}
            </a>
        </td>
        <td>{book.estimatedReadingTimeMinutes}</td>
        <td>
            {new Date(book.publicationDate).toLocaleDateString('en-US')}
        </td>
        </tr>
    ))
}

export const TableView = ({ books }) => {
    const [sort, setSort] = useState({ key: null, direction: 'default'});

    console.log(sort);

    function performSort(key) {
        let direction = 'asc';
        if (sort.key === key) { // toggling the direction when clicked on same column
            direction = sort.direction === 'default' || sort.direction === 'desc' ? 'asc' : 'desc'
        }
        setSort({ key, direction });
    }

    const sortedBooks = sortBooks(books, sort);
    const tableBody = getTableBody(sortedBooks);
    return (
        <main className="table-container">
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Cover</th>
                    <th onClick={() => performSort('author')}>Author</th>
                    <th>Biography</th>
                    <th onClick={() => performSort('title')}>Title</th>
                    <th onClick={() => performSort('estimatedReadingTimeMinutes')}>
                    Reading Time (minutes)
                    </th>
                    <th onClick={() => performSort('publicationDate')}>
                    Publication Date
                    </th>
                </tr>
                </thead>
                <tbody>
                {tableBody}
                </tbody>
            </table>
        </main>
    )
}