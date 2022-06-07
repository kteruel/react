import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.test.js', () => {
    test('getSaludo debe retornar Hola Fernando!', () => {

        const nombre = "Fernando";

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( `Hola ${nombre}!` );

    });

    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Carlos!' );
    });
});
