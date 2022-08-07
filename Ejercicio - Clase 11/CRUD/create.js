const helpers = require('./helpers/helpers.js');

function createBook(title, author, genre, year, cost, price) {
    if (title === null || title === undefined || title === "") return false;
    if (author === null || author === undefined || author === "") return false;
    if (genre === null || genre === undefined || genre === "") return false;
    if (year === null || year === undefined || year === "") return false;
    if (cost === null || cost === undefined || cost === "") return false;
    if (price === null || price === undefined || price === "") return false;
    //Create a new id
    let newId = helpers.getLastIndex()+1;
    newId = newId == 0 ? helpers.createRandomId(4):newId;
    //Construct object with data parameters
    const newBook = {
        id: newId.toString(), title: arguments[0], author: arguments[1], genre: arguments[2], 
        year: arguments[3], cost: arguments[4], price: arguments[5]
    };
    //Call writeBook helper and return
    return helpers.writeBook(newBook);
}

createBook("UnTitulo", "UnAutor", "Genero", "2014", "1200", "1600");

module.exports = createBook;