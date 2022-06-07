import { getImagen } from "../../base/11-async-await";

describe('Pruebas con asyns-await y Fetch', () => {

    test('Debe retornar la url de la imagen', async () => {

        const url = await getImagen();

        expect( url.includes('https://') ).toBe( true );


    });

});