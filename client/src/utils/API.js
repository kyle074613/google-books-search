import axios from "axios";

export default {
    // Google books search
    search: function () {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query);
    },
    // Get favorites
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Save book
    saveBook: function () {
        return axios.post("/api/books", data);
    },
    // Delete book
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
};