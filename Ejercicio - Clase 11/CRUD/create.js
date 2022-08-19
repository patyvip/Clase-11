const helpers = require('./helpers/helpers.js');

function createBook(title, author, genre, year, cost, price) {
    // Esto es opcional:
    // Acá esta forma de comprobar si todos los parámetros son válidos, no es la más eficiente. Si aceptás, podés hacer el reto de buscar una forma más eficiente (hay varias formas)
    // Como ayudita te dejo que por ej: (price === null || price === undefined || price === "") los tres son valores falsos, los podés resumir en !price ya que cuando un valor es sometido en un contexto de booleano (por ejemplo, un if), este devuelve true o false en base a los valores falsy y truthy, página de ref: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    if (title === null || title === undefined || title === "") return false;
    if (author === null || author === undefined || author === "") return false;
    if (genre === null || genre === undefined || genre === "") return false;
    if (year === null || year === undefined || year === "") return false;
    if (cost === null || cost === undefined || cost === "") return false;
    if (price === null || price === undefined || price === "") return false;
    // Un valor sometido a un contexto de booleano, da true o false: "if (!price) return false;"
    // ¿Y si quiero saber si es verdadero? "if (price) return true;"
    // Hay más formas de hacerlo eficiente. Te recuerdo, es opcional.

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