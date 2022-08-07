const helpers = require('./helpers/helpers.js');

function readBook(bookId=null) {
    let books = helpers.readBooks(bookId); 
    return books ? books:"No se encuentra el libro solicitado";
}

module.exports = readBook;