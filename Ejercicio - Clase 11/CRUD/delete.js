const helpers = require('./helpers/helpers.js');

function deleteBook(bookId=undefined) {
    if (bookId === null || bookId === undefined || bookId === "") return false;
    return helpers.deleteBook(bookId);
}

module.exports = deleteBook;