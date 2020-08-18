//Desestructuracion
//Asignacion Desestructurante
const persona = {
    nombre: 'Luis',
    edad: 29,
    clave: 'Ironman',
};

const {edad,nombre,clave} = persona;
console.log(edad);
console.log(nombre);
console.log(clave);

//Destructuracion en el argumento
//si el objeto no tiene la propiedad rango: se le asigna capitan, en caso q lo tenga
const returnPerson = ({clave,nombre, edad, rango ='Capitán'})=>{
    console.log(nombre,edad,rango);
}
returnPerson(persona);

//devuelvo un nuevo objeto y a la vez lo desestructuro
const useContext = ({clave,edad}) =>{
    return {
        nombreClave: clave,
        anios:edad,
        latlng:{
            lat: 14.2123,
            lng: -12.233
        }
    }
}
//Desestructurada anidad de objetos
const {nombreClave,anios,latlng} = useContext(persona);
console.log(nombreClave,anios,latlng);
//En caso q quiera traer solo la latitud
const{ latlng:{lat}} = useContext(persona);
console.log(lat);