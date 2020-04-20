import React, { useState, useEffect } from "react";
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

    const returnImage = (item) => {
        if (item.imageLinks === undefined)
            return "https://via.placeholder.com/150"

        return item.imageLinks.thumbnail;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        API.search(query).then(result => {
            console.log(result.data.items);
            setResults(result.data.items);
            console.log(this.results)

        })
            .catch(err => {
                console.log(err);
            });


    };

    const handleViewClick = (e) => {
    };

    const handleSaveClick = (e) => {

    };

    return (
        <div>
            <SearchBar onChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
            {results.map(book => (
                <BooksList
                    key={book.volumeInfo.title}
                    results={results}
                    title={book.volumeInfo.title}
                    authors={printAuthors(book.volumeInfo.authors)}
                    image={returnImage(book.volumeInfo)}
                    description={book.volumeInfo.description}
                    handleClick1={handleViewClick}
                    handleClick2={handleSaveClick} />
            ))}

        </div>
    );

}

export default Search;