//Desestructuracion de arreglos
//Metodos: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
const personajes = ['Goku','Vegeta','Trunks'];

const [p1]=personajes;
//para obtener el 3er se pone ,
const [, , p3]=personajes;
console.log(p1);
console.log(p3);

const returnArray = () => ['ABC',123];

const [letras, numeros] = returnArray();
console.log(letras,numeros);

//Tarea
//1. el primer valor del arr se llamará nombre
//2. se llamará setNombre
const useState = (valor)=> [valor,()=>console.log('Hola mundo')];

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();