// Promesas

import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( ( resolve, reject ) => {
// 
//     setTimeout( () => {
//         // Tarea
//         // importar getHeroeById
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         resolve( heroe );
//         // reject( "No se pudo encontrar el heroe");
//     }, 2000);
// });
// 
// promesa.then( ( heroe ) => {
//     console.log(`${heroe.name} de la promesa`);
// })
// .catch( err => console.warn( err ));


const getHeroeByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject ) => {
    
        setTimeout( () => {
            // Tarea
            // importar getHeroeById
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve( heroe );
            } else {
                reject( "No se pudo encontrar el heroe");
            }
        }, 2000);
    });
    
}

// getHeroeByIdAsync(2)
//     .then( heroe => console.log(heroe) )
//     .catch( err => console.warn(err) );
// Es igual a 
getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn );