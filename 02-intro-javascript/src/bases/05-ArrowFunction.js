//Arrow Function
const user = function getUsuarioActivco(nombre){
    return {
        userId: 'ABC567',
        userName: nombre,
    }
};

//Tarea
//1. Transformen a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

const usuarioActivo = (nombre)=>({
    userId:'22554',
    userName: nombre
});

    console.log(usuarioActivo('Luis'));