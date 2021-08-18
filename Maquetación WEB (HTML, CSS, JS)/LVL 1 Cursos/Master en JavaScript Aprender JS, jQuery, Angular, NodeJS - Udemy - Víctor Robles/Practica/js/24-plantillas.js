'use strict'
//plantillas de texto
var nombres= prompt("cuales son tus nombres"); 
var apellido = prompt("cual es tu apellidos");


// var texto = "Mi nombre es: "+nombres+". Mis apellidos son: "+apellido;

var texto = `
<h1> Hola que tal </h1>
<h3> Mi nombres son: ${nombres}</h3>
<h3> Mis apellido es: ${apellido} <h3>`

document.write(texto)