import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BooksList from "../components/BooksList";
import API from "../utils/API";

function Search() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);


    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

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
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(query)
        API.search(query).then(result => {
            console.log(result.data.items);
            setResults(result.data.items);
            console.log(results)

        })
            .catch(err => {
                console.log(err);
            });


    };

    const handleClick = (e) => {
        const bookToSave = results.find(result => result.id === e.target.getAttribute("bookid"));

        API.saveBook({
            bookId: bookToSave.id,
            title: bookToSave.volumeInfo.title,
            authors: bookToSave.volumeInfo.authors,
            description: bookToSave.volumeInfo.description,
            image: bookToSave.volumeInfo.imageLinks ? bookToSave.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150",
            link: bookToSave.volumeInfo.previewLink
        }).then(res => console.log(res.data.title, "saved!"))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <SearchBar onChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
            <ul className="list-group">
                {results.map(book => (
                    <li key={book.id} className="list-group-item">
                        <BooksList
                            title={book.volumeInfo.title}
                            authors={printAuthors(book.volumeInfo.authors)}
                            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150"}
                            description={book.volumeInfo.description}
                            bookLink={book.volumeInfo.previewLink}
                            saveOrDelete="Save"
                            handleClick={handleClick}
                            bookId={book.id} />
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Search;