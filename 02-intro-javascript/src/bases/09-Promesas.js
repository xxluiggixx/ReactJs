import getHeroeById, { getHeroesByOwner} from './bases/08-imp-exp'

/* const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //Tarea
        //importen el getHeroeById
        const heroe = getHeroeById(2);
       resolve(heroe);   
    }, 2000);
});

promesa.then(({id,name,owner})=>{
    console.table(`${name} tiene un id:${id} y pertenece a ${owner}`)
})
    .catch(err=>console.error(err)) */

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const heroe = getHeroeById(id);
            (heroe)?resolve(heroe):reject('No se pudo encontrar el heroe') ;    
        }, 2000);
    });
}

getHeroeByIdAsync(10).then(({id,name,owner})=>{
    console.table(`${name} tiene un id:${id} y pertenece a ${owner}`)
})
    .catch(err=>console.error(err))