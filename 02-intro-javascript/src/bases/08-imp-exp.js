/* import { heroes } from './data/heroes';
import {} from './data/heroes' */
import heroes, {owner} from '../data/heroes';

/* console.log(owner) */

/* const heroes = require("./data/heroes"); */

/* const { heroes } = require("./data/heroes"); */
//Metodo find: busca un elemento del array q cumpla con un id
const getHeroeById = (id) => heroes.find((heroe) => heroe.id===id);

/* console.log(getHeroeById(2)); */
//Filter: me devuelve un array con todos los elementos q cumpla la condicion
export const getHeroesByOwner= (owner)=> heroes.filter((heroe)=>heroe.owner===owner);

/* console.log(getHeroesByOwner('DC')); */

export default getHeroeById;
