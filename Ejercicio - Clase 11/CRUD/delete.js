const helpers = require('./helpers/helpers.js');

function deleteBook(bookId=undefined) {
    // Acá si no le pasas nada a esta función como parametro, es undefined de todas maneras.
    // Y las tres condiciones que pusiste abajo se pueden resumir
    if (bookId === null || bookId === undefined || bookId === "") return false;

    // Esto:
    // bookId === null || bookId === undefined || bookId === ""
    // Es lo mismo que: !bookId, porque los tres son valores falsos (null, undefined, y un string vacío).
    return helpers.deleteBook(bookId);
}

module.exports = deleteBook;