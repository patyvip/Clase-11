const fs = require('fs');
const path = require('path');
const pathReadme = path.resolve(__dirname, "../README.md");

function getHelp() {
    let response;
    try {
        response = fs.readFileSync(pathReadme, 'utf-8');
    } catch(err) {
        return response = "No se ha podido cargar la ayuda :(. Verifique que se encuentre el archivo README.md en el directorio actual.";
    }
    return response;
}

module.exports = getHelp;
