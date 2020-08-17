//Arreglos
const arreglo = [1,2,3,4];
//Clonando arreglos
let arreglo2 = [...arreglo, 5];
console.log(arreglo);
console.log(arreglo2);
/* Metodo Map: crea un nuevo array con los resultados de la llamada a la funcion indicada
aplicados a cada uno de sus elementos */
const arreglo3 = arreglo2.map((numero)=>{return numero *2;});
console.log(arreglo3);