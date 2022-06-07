// Desestructuración de Arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [ , , p3 ] = personajes;

console.log(  p3 );

const retornaArreglo = () => {
    return ['ABC', 123];
};

const [ letras , numeros] = retornaArreglo();

console.log(letras , numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const topLevel = ( valor ) => {
    return [ valor, () => { console.log(`Hola, soy ${valor}`) }];
}

const [ nombre , setNombre ] = topLevel( "Goku" );
const arr = setNombre( "Goku" );

console.log( nombre );
setNombre();
