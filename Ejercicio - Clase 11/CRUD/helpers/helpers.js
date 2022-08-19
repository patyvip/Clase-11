const fs = require('fs');
const path = require('path');
const pathDB = path.resolve(__dirname, "../../books.json");

// Ojo que aca tenés un problema que es muy común: RangeError: Maximum call stack size exceeded, con la funciones podés generar un bucle infinito similar al de un loop,
// En este caso tenés un bucle infinito dado a que no parás de llamar a dos funciones.
// Chequeá línea 25 y línea 20, si el parametro bookId no es nulo en readBooks, va a llamar a la otra función que es findBook, y findBook llama a readBooks de vuelta y así sucesivamente. Ojo con eso.

function readBooks(bookId=null) {
    let books;
    //Try to read ddbb
    try {
        books = fs.readFileSync(pathDB, 'utf-8');
    } catch(err) {
        return -1;
    }
    //Return false if the database is empty
    if (books.length == 0) return false;
    //Return the books array or the book with bookId
    return bookId == null ? JSON.parse(books):findBook(bookId);
}

function findBook(bookId) {
    //Read all books
    let books = readBooks();
    //Return false if books reading fault
    if (books == -1 || !books) return false;
    //Find id match
    
    const book = books.find(obj => obj.id == bookId); // Fijate como funciona .find() y que es lo que devuelve en cada caso, (es una función y devuelve algo), si no encuentra lo que busca devuelve undefined.
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    
    //Return the book if exist, else return false
    return book === undefined || book === null ? false:book;
}

function findBookByTitle(bookTitle) {
    //Read all books
    let books = readBooks();
    //Return false if books reading fault
    if (books == -1 || !books) return false;
    //Find title match
    const book = books.find(obj => obj.title == bookTitle);
    //Return the book if exist, else return false
    return book === undefined ? false:book;
}

function writeBook(book) {
    let books = readBooks();
    //Verify at least one book in JSON database
    if (books == false) books = [];
    //Return false if books reading fault
    if (books == -1 || !books) return false;
    //Push book into array of books
    books.push(book);
    //Parse array to JSON data 
    books = JSON.stringify(books, null, 2);
    //Try to write the ddbb
    try {
        fs.writeFileSync(pathDB, books, 'utf-8');
    } catch(err) {
        return err;
    }
    return true;
}

function writeBooks(booksArray) {
    // Acá podrías reutilizar la anterior función "writeBook"
    //Parse array to JSON data 
    booksArray = JSON.stringify(booksArray, null, 2);
    //Try to write the ddbb
    try {
        fs.writeFileSync(pathDB, booksArray, 'utf-8');
    } catch(err) {
        return err;
    }
    return true;
}

function updateBook(book) {
    let books = readBooks();
    //Return false if books reading fault
    if (books == -1 || !books) return false;
    let bookToUpdate = findBook(book.id);
    //If book doesn't exist into ddbb, exit with false
    if (bookToUpdate === false) return false;
    //Find index to replace
    let index = books.findIndex(el => el.id === book.id);
    //Replaces the object in the same position
    books.splice(index, 1, book);
    return writeBooks(books);
}

function deleteBook(bookId) {
    bookId = bookId.toString();
    let books = readBooks();
    //Return false if books reading fault
    if (books == -1 || !books) return false;
    let bookToDelete = findBook(bookId);
    //If book doesn't exist into ddbb, exit with false
    if (bookToDelete === false) return false;
    //Find index to replace
    let index = books.findIndex(el => el.id === bookId);
    //Delete the object in the same position
    books.splice(index, 1);
    return writeBooks(books);
}

function getLastIndex() {
    //Read all books
    let books = readBooks();
    //Return -1 if books reading fault
    if (books == -1 || !books) return -1;
    //Mapping all ids to an array
    const ids = books.map(obj => obj.id);
    //Return max id from ids array
    return Math.max(...ids);
}

function createRandomId(maxLenght) {
    //Initialize uid with random number
    const uid = Date.now();
    //Takes the last 4 characters and returns them as an integer
    //Max: 13 characters (defined by Date type)
    return parseInt(uid.toString().slice(-maxLenght));
}

// Ojo el camel case acá, en el nombre de esta función
function InitializeJsonDB() {
    let databaseExists = fs.existsSync(pathDB);
    if (!databaseExists) {
        try {
            fs.openSync(pathDB, 'w');
        } catch(err) {
            return err;
        }
    }
    return 0;
}

InitializeJsonDB(); // Ojo con el camel case.
// https://es.wikipedia.org/wiki/Camel_case
module.exports = { readBooks, findBook, writeBook, updateBook, deleteBook, getLastIndex, createRandomId };