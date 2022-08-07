const helpers = require('./helpers/helpers.js');

function updateBook(id, title="", author="", genre="", year="", cost="", price="") {
    if (id === null || id === undefined || id === "") return false;
    if (title === null || title === undefined || title === "") return false;
    if (author === null || author === undefined || author === "") return false;
    if (genre === null || genre === undefined || genre === "") return false;
    if (year === null || year === undefined || year === "") return false;
    if (cost === null || cost === undefined || cost === "") return false;
    if (price === null || price === undefined || price === "") return false;
    //Construct object with data parameters
    const updateBook = {
        id: arguments[0], title: arguments[1], author: arguments[2], genre: arguments[3], 
        year: arguments[4], cost: arguments[5], price: arguments[6]
    };
    //Call updateBook helper and return
    return helpers.updateBook(updateBook);
}

module.exports = updateBook;