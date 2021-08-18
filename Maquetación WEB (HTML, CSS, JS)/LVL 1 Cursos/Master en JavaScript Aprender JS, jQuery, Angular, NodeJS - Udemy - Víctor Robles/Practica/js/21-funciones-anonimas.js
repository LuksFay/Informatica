'use strict'

//funciones anonimas
//Es una funcion que no tiene nombre

// var pelicula = function(nombre){
//     return "La pelicula es: "+nombre;
// }

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}


//Esto es una funcion que tiene call back, ya que el tercer y cuarto parametro dentro de la invocacion a la funcion sumame vuelven a esa funcion para ejecutar
//Ordenes almacenadas. 
sumame(5,7, function(dato){
    console.log("la suma es:", dato);
},
function(dato){
    console.log("la suma por dos es: ", (dato*2));
}
)
