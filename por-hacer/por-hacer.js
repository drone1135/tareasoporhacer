const fs = require('fs');
let listadoPorHacer = [];


let guardaDB = (callback) => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error("No se pudo grabar", err);
        }
    });

}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}


const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: "false"
    };
    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;

}
const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado=completado;
        guardaDB();
        return true;
    }else{return false;}
    
}
const borrar =(descripcion)=>{
    cargarDB();
    let index=listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);
    if(index>=0){
        listadoPorHacer.splice(index); 
        guardaDB();
        return true;
    }else{ return false; }

}
const getListadoByEstado=(completado)=>{
    cargarDB();
    let listadoFiltrado=[];
    listadoFiltrado= listadoPorHacer.find(tarea=>tarea.completado===completado);
    return listadoFiltrado;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    getListadoByEstado
}