const opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripción de la tarea por hacer"
    }
}
const opts = {
    opt,
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'crear una tarea por hacer', opt)
    .command('listar', 'lista las tareas', opts)
    .command('actualizar', 'actualiza el estado completado de una tarea', opts)
    .help().argv;

module.exports = {
    argv
}