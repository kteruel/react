// Sumamente importante
// Desestructuración de objetos
// Asignación Desestructurante

// Ver material adjunto

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman"
};

// Desestructuración de variables

const { nombre , edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);


const userContext = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
    console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12132,
            lng: 15.2312123
        }
    };
};

const { nombreClave, anios, latlng: { lat, lng } } = userContext( persona );

console.log(nombreClave, anios);
console.log(lat, lng);