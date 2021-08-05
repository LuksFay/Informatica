'use strict'
// transformacion de texto
var numero = 444;
var texto1 = " Bienvenidos al curso de JavaScript de Victor Robles ";
var texto2 = "es muy buen curso";



var dato = numero.toString(); // de esta manera cualquier variable se transofrma en string
var dato2 = texto1.toUpperCase(); // de esta manera cualquier variable se transforma en texto mayuscula
var dato3 = texto1.toLowerCase(); // de esta manera cualquier variable se transforma en texto minuscula

console.log(dato)
console.log(dato2)
console.log(dato3)

// calcular longitud

var nombre = "FernandoLucasPicco";
console.log(nombre.length)

// Concatenar - Unir textos

 var textoTotal = texto1+" "+texto2;
 var textoTotal2 = texto1.concat(" "+texto2);
 console.log(textoTotal);
 console.log(textoTotal2);

var busqueda = texto1.indexOf("curso"); //lastIndexOf encontraria la ultima coincidencia
console.log(busqueda);

var busqueda2 = texto1.search("curso"); // similar al metodo anterior
console.log(busqueda2);

var busqueda3 = texto1.match("curso"); // similar al metodo anterior, busca solo la primera coincidencia y la envuelve en un array
console.log(busqueda3);

var busqueda4 = texto1.match(/de/g); // similar al metodo anterior, busca tdas las coincidencias y las devuelve en un array
console.log(busqueda4);

var busqueda5 = texto1.substr(14,6); // sustrae desde el caracter marcado como primer parametro la cantidad de caracteres indicado en el segundo parametro
console.log(busqueda5);

var busqueda6 = texto1.charAt(35); // sustrae el caracter indicado
console.log(busqueda6);

var busqueda7 = texto1.startsWith("Lucas"); // indica si el string comienza con lo indicado dentro del parametro, otra opcin se endsWith
console.log(busqueda7);

var busqueda8 = texto1.includes("curso"); // indica si el string comienza con lo indicado dentro del parametro, otra opcin se endsWith
console.log(busqueda8);

var busqueda9 = texto1.replace("curso","aula"); // reemplaza la palabra indicada
console.log(busqueda9);

var busqueda10 = texto1.slice(15, 23); // corta el string y solo muestra a partir de el caracter indicado en el primer parametro hasta el final del mismo o hasta el caracter indicado en el segundo parametro
console.log(busqueda10);

var busqueda11 = texto1.split("e"); // toma la variable y la coloca dentro de un string, y tomara el parametro indicado como separador y los dividira en elementos dentro del array. No tomara el separador indicado como un objeto existente dentro del array.
console.log(busqueda11);

var busqueda12 = texto1.trim(); //elimina los espacios en blanco del string seleccionado
console.log(busqueda12);
//LOS BUSCACORES SOY KEYSENSITIVE