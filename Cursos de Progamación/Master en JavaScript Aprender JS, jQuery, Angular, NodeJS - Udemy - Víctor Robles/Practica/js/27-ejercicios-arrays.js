'use strict'

/*
1- Pida 6 numeros por pantalla y los meta en un array
2- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3- ordenar y mostrar
4-invertir su orden y mostrarlo
5-cuantos elementos tiene el array
6-busque un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/


let numerosUsuario = []

function compare(a, b) {
    if (a < b ) {
      return -1;
    }
    if (a > b ) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  
for (let i = 0; i < 6; i++) {
    numerosUsuario.push(parseInt(prompt("Coloque un numero")));
}


let nuevoArray = [...numerosUsuario]


console.log(numerosUsuario);
console.log("En orden de menor a mayor los numeros se verian asi: ", nuevoArray.sort());
console.log("El usuario introdujo ",nuevoArray.length, "numeros");
console.log("el usuario introdujo el numero 24? ",nuevoArray.includes(24));
console.log("la posicion del numero 24 es la: ", nuevoArray.indexOf());
document.write(
    numerosUsuario, 
    "<br/>",
    "En orden de menor a mayor los numeros se verian asi: ", nuevoArray.sort(compare),
    "<br/>",
    "El usuario introdujo ",numerosUsuario.length, " numeros",
    "<br/>",
    "el usuario introdujo el numero 24? ",numerosUsuario.includes(24),
    "<br/>",
    "la posicion del numero 24 es la ", numerosUsuario.indexOf(),
); 
