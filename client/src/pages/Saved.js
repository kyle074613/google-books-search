import React, { useState, useEffect } from "react";
import BooksList from "../components/BooksList";
import API from "../utils/API";

function Saved() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);


    const loadBooks = () => {
        API.getBooks()
            .then(res => {
                setBooks(res.data)
            })
            .catch(err => console.log(err));
    };

    const deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    };

    const printAuthors = (array) => {
        if (array === undefined) {
            return "";
        }

        let authors = "";

        if (array.length === 1)
            return authors + array[0];

        for (let i = 0; i < array.length; i++)
            if (i === array.length - 1)
                authors += array[i];
            else
                authors += array[i] + ', ';

        return authors;
    };

    const handleClick = (e) => {
        const bookToDelete = books.find(book => book._id === e.target.getAttribute("bookid"));
        deleteBook(bookToDelete._id);
    }

    const renderPage = () => {
        if (books.length === 0) {
            return (
                <li className="list-group-item">
                    <h3>No books have been saved! Go search for some books and save them to the list!</h3>
                </li>
            )
        }
        else {
            return (
                books.map(book => (
                    <li key={book._id} className="list-group-item">
                        <BooksList
                            title={book.title}
                            authors={printAuthors(book.authors)}
                            image={book.image}
                            description={book.description}
                            bookLink={book.link}
                            saveOrDelete="Delete"
                            handleClick={handleClick}
                            bookId={book._id} />
                    </li>
                ))
            )
        }
    }

    return (
        <ul className="list-group">
            {renderPage()}
        </ul>
    );
}

export default Saved;