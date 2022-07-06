const personajes = ["Goku", "Vegeta", "Trunks"];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ["ABC", 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
// 1. El primer valor del arr se llamará nombre 
// 1. El segundo valor del arr se llamará setsNombre 
const usesState = (valor) => {
    return [valor, () => {console.log("Hola Mundo");}]
}

const [nombre, setsNombre] = usesState("Goku");
console.log(nombre);
setsNombre();