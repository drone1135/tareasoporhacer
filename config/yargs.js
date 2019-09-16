const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: true,
        alias: 'c'
    }


}

const argvs = require('yargs')
    .command('crear', 'crear una tarea por hacer', opts)
    .command('actualizar', 'actualiza el estado completado de una tarea')
    .help().argv;

module.export = {
    argvs
}