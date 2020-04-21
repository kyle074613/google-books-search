import React from "react";

function SearchBar(props) {
    return (
        <div className="mb-2">
            <div className="row">
                <div className="col">
                    <h4>Book Search</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form className="search">
                        <input onChange={props.onChange}></input>
                        <button type="submit" onClick={props.handleFormSubmit}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;