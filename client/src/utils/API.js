import axios from "axios";

export default {
    // Google books search
    search: function (query) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + "&maxResults=5");
    },
    // Get favorites
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Save book
    saveBook: function (data) {
        return axios.post("/api/books", data);
    },
    // Delete book
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
};