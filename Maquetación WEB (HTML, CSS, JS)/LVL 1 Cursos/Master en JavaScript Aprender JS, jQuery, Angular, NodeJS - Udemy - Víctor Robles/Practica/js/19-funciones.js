'use strict'

//funciones

// las funciones son un grupo de ordenes agrupado con un numbre concreto,
// en una funcion vamos a tener un conjunto de reglas/funciones/variables, es decir, cosas
// que se van a ejecutar. Podemos usar una funcion tantas veces como querramos
// esta funcion se va a ejecutar cuando se le invoque.
// una funcion es una agrupacion reutilizable de un conjunto de instrucciones



// Defino la funcion
function calculadora(numero1,numero2){

    //conjunto de instrucciones
    console.log("hola soy la calculadora!");
    console.log("Si, soy yo");
    console.log("suma: "+(numero1+numero2));
    console.log("resta: "+(numero1-numero2));
    console.log("multiplicacion: "+(numero1*numero2));
    console.log("division: "+(numero1/numero2));
    console.log("________---------_________")

    // return "hola soy el return calculadora!";
}

//llamo o invoco a la funcion
// var resultado = calculadora(12,4)

for(var i= 1; i<=10;i++){
    console.log(i)
    calculadora(i,8)
}