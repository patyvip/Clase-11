const crud = require('./CRUD/crud.js');

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
main();