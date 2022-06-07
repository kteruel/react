// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes'

import  heroes , { owners } from "../data/heroes";

export const getHeroeById = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id );
}

export const getHeroeByOwner = ( owner ) => { 
    return heroes.filter( ( heroe ) => heroe.owner === owner );
}

// console.log( getHeroeById(2) ); 

// console.log( getHeroeByOwner("Marvel") ); 
// owners.map((owner) => { console.log(owner) });