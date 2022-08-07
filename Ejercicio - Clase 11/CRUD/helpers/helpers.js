const fs = require('fs');
const path = require('path');
const pathDB = path.resolve(__dirname, "../../books.json");

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
    const book = books.find(obj => obj.id == bookId);
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

InitializeJsonDB();
module.exports = { readBooks, findBook, writeBook, updateBook, deleteBook, getLastIndex, createRandomId };