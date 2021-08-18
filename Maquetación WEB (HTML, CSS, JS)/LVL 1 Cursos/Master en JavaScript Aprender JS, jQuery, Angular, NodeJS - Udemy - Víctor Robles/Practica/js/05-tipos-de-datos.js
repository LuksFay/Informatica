'use strict'

// OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 % numero2;

// +, -, *, /, %

console.log("es resultado de la operacion es " + operacion);

//TIPOS DE DATOS
var numero_entero = 44;
var cadena_texto = "Hola 'que' tal" || 'Hola "que" tal'
var verdadero_o_falso = true || false;
var numero_falso = '33.4'


console.log(parseInt(numero_falso) + 7)


Number(); // transforma un string en un numero
parseInt(); // transforma un numero decimal en un numero entero
parseFloat(); // transofrma un numero entero en un numero decimal
String(); // transforma cualquier variable a un string


console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);