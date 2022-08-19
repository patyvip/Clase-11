const crud = require('./CRUD/crud.js');

// Correción: está bien esta parte, lo unico a mirar es, la función "main()", es innecesaria, no está mal, pero no hace falta en este caso. El resto está perfecto.
// Como consejo, podés usar otra estructura para los argumentos (que no crees una variable para cada argumento que recibe de la consola), por ejemplo podés usar un objeto.
// Cuidado con los espacios, (mala indentación) podés usar Prettier o algun formateador de código.
//
// Muy buena la organización de carpetas y archivos, como adicional podés poner el pdf en una carpeta llamada "resources", "dev_resources", etc..
// muy buena la organización de código.

function main() {
    //Get enviroment constants/variables
    const command = process.argv[2];
    const param1 = process.argv[3];
    const param2 = process.argv[4];
    const param3 = process.argv[5];
    const param4 = process.argv[6];
    const param5 = process.argv[7];
    const param6 = process.argv[8];
    const param7 = process.argv[9];
    //Verify command
    switch(command) {
        case "new":
        console.log( crud.create(param1, param2, param3, param4, param5, param6 ));
        break;
        case "edit":  
        console.log( crud.update(param1, param2, param3, param4, param5, param6, param7 )); 
        break;
        case "read":
        console.log( crud.read(param1) );
        break;
        case "delete":
        console.log( crud.delete(param1) );
        break;
        case "help":
        console.log( crud.help() );
        break;
        default:
        console.log( `No comprendo lo siguiente: ${command}. Por favor, verifique la ayuda con el comando 'help'` );
        break;
    }
}
//Run app
main(); // Innecesario