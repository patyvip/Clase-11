const createBook = require('./create.js');
const deleteBook = require('./delete.js');
const readBook = require('./read.js');
const updateBook = require('./update.js');
const help = require('./help.js');

let crud = {
    create: (title, author, genre, year, cost, price) => {
        console.log("Creando nuevo libro...");
        return createBook(title, author, genre, year, cost, price) ? `El libro '${title}' ha sido creado`:`Error al crear el libro '${title}'. Por favor verifique que estén presentes todos los parámetros de creación`;
    },
    update: (id, title, author, genre, year, cost, price) => {
        console.log("Editando libro...");
        return updateBook(id, title, author, genre, year, cost, price) ? `El libro '${title}' ha sido editado`:`Error al editar el libro '${title}'`; 
    },
    read: (id) => {
        console.log("Leyendo libros..."); 
        return readBook(id);
    },
    delete: (id) => {
        console.log("Eliminando libro...");
        return deleteBook(id) ? `Se ha eliminado el libro ${id}`:`No se ha eliminado ningún libro. Por favor, verifique que el libro con id:${id} exista en la base de datos`;
    },
    help: () => help()
}

module.exports = crud;