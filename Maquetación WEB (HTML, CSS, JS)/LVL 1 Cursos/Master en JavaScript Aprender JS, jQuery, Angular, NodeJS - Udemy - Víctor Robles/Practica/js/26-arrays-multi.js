'use strict'

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [ categorias, peliculas];

peliculas.sort(); // ordena 
console.log(peliculas)
peliculas.reverse();
console.log(peliculas)

//console.log(cine[0][1]);
//console.log(cine[1][2]);

// var elemento = "";

// do{
//     elemento = prompt("Introduce tu pelicula");
//     peliculas.push(elemento);
// }while(elemento != "acabar")

// peliculas.pop();

// peliculas.push("Batman");
// console.log(peliculas);


var indice = peliculas.indexOf("Gran torino");

if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join(); //transformar un array a string
console.log(peliculas_string);

var cadena ="texto, texto2, texto3";
var cadena_array = cadena.split(" ,");
console.log(cadena_array)