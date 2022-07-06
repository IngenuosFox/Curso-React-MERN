const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 48302,
        lat: 14.3842,
        long: 34.9237
    }
};

// console.table(persona);

const persona2 = {...persona};
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);