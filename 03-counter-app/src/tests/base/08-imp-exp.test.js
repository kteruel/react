import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('Debe de retornar un heroe', () => {

        const heroeId = 1;
        const heroe = getHeroeById(heroeId);

        const heroeData = heroes.find( h => h.id === heroeId );

        expect( heroe ).toEqual(heroeData);
    });

    test('Debe de retornar undefined si heroe no existe', () => {

        const heroeId = 22;
        const heroe = getHeroeById(heroeId);

        expect( heroe ).toBe( undefined );
    });

    test('debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';

        const heroesDC = getHeroesByOwner(owner);

        const heroesDCData = heroes.filter( h => h.owner === owner);

        expect( heroesDC ).toEqual( heroesDCData );
    });

    test('debe de retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';

        const heroesMarvel = getHeroesByOwner(owner);

        expect( heroesMarvel.length ).toBe( 2 );
    });
});