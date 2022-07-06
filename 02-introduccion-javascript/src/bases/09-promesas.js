import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         const p1 = getHeroeById(2);
//         resolve(p1);
//         // reject("No se pudo encontrar el héroe");
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log("Heroe", heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea
            const p1 = getHeroeById(id);
            p1 === undefined ? reject("No existe un héroe con ese ID") : resolve(p1);
        }, 2000)
    });
};

getHeroeByIdAsync(4)
.then(console.log)
.catch(console.warn);