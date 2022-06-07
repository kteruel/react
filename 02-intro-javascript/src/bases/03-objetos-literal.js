const persona = {
    nombre: 'Kevin',
    apellido: 'Teruel',
    edad: 33,
    direccion: {
        ciudad: 'caba',
        cp: 1407,
        lat: 14.23423424,
        lng: 15.21231231,
    }
};

//console.table({ persona });
console.log({ persona });

const persona2 = { ...persona };
persona2.nombre = 'Juan Cruz';

console.log({persona2});
console.log({persona});