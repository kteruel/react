// function

const saludar = function( nombre ) {
    return `Hola ${ nombre }`
}

 // Arrow function

const saludar2 = ( nombre ) => {
    return `Hola, soy ${ nombre }`
} 

const saludar3 = ( nombre ) =>  `Hola, soy ${ nombre }`;

const saludar4 = ( ) =>  `Hola mundo`;

console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABCD123',
        username: 'aliaspool'
    }
}

const getUser2 = () => ({
        uid: 'ABCD123',
        username: 'aliaspool'
    })

console.log( getUser() );
console.log( getUser2() );

// 1. Tranformen a una función de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Probar
function getUsuarioActivo ( nombre) {
    return {
        uid: 'ABCD123',
        username: nombre
    }
};

const getUsuarioActivo2 = ( nombre ) => ({
    uid: 'ABCD123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Kevin');
const usuarioActivo2 = getUsuarioActivo2('Peepoh');

console.log( usuarioActivo);
console.log( usuarioActivo2);