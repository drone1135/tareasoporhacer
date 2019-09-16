const argv=require('yargs').argv;
let comando=argv._[0];
switch(comando){
    case 'crear':
        console.log('crear tarea por hacer');
        break; 
    case 'listar':
        console.log('mostrar todas las tarreas por hacer');
        break;
    case 'actualizar':
        console.log('actualiza una tarea por hacer');
        break;
    default:
        console.log('comando no es reconocido');
        break;
}
