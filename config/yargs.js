const descripcion={
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}
const opt = {
    descripcion
}
const opts = {
    descripcion,
    completado
}
const otps2={
    completado
}

const argv = require('yargs')
    .command('crear', 'crear una tarea por hacer', opt)
    .command('listar', 'lista las tareas')
    .command('actualizar', 'actualiza el estado completado de una tarea', opts)
    .command('borrar','borra una tarea',opt)
    .command('listarByEstado','lista tareas filtrando por estado',otps2)
    .help().argv;

module.exports = {
    argv
}