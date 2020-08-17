const persona = {
    nombre: 'Luis',
    apellido: 'Garcia',
    edad: 29,
    direccion : {
        pais: 'Argentina',
        provincia: 'Salta',
        zip: 4400,
    }
};

//clonar un objeto

const persona2 = {...persona};
persona2.nombre='Maria';
console.table(persona);
console.table(persona2);