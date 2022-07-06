// Funciones en JS
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, Mundo`;


console.log(saludar("Goku"));
console.log(saludar2("Vegeta"));
console.log(saludar3("Eufrasio"));
console.log(saludar4("Eufrasio"));

console.log(saludar);
console.log(saludar2);
console.log(saludar3);
console.log(saludar4);

const getUser = () => ({
    uid: "ABC123", 
    username: "El_Papi1502"
});

console.log(getUser());

// Tarea
// 1. Transformar en una funcion de flecha
// 2. Tiene que rtornar un objeto implicito
// 3. Pruebas
function getUsuarioActivo(nombre) {
    return {
        uid: "ABC567",
        username: nombre
    }
}

// Resultado: 

const getUsuarioActivo2 = (nombre) => ({
    uid: "ABC567",
    username: nombre
});

const usuarioActivo = getUsuarioActivo2("Jonathan");
console.log(usuarioActivo);