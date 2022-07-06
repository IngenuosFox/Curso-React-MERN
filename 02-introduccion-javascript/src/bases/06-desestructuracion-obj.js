// Desestructuración
// Asignación destructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
};

const {edad, nombre, clave} = persona;
// const {nombre:nombre2} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const usesContext = ({clave, nombre, edad, rango = "Capitán"}) => {

    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1233,
            lng: -12.3243
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = usesContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);