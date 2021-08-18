'use strict'

//CONDICIONAL IF
//si A es igual a B entonces haz algo


var edad1 = 30;
var edad2 = 12

//si (pasa esto)
if(edad1 > 12){
  // {ejecuta esto}
  console.log("edad1 es mayor que edad2")
}else{
    console.log("edad1 es menor que edad2")
}

var edad = 75;
var nombre = 'David Suarez';

/*
    OPERADORES RELACIONALES
    mayor: >
    menor: <
    mayor o igual: >=
    menor o igal <=
    igual: ==
    distinto: !=
*/

if(edad >= 18){
    console.log(nombre+" tiene "+edad + " años, es mayor de edad" )
    if(edad <= 33){
        console.log("todavia eres millenial")
    }else if(edad >= 70){
        console.log("Eres anciano")
    }else{
        console.log("ya no eres millenial")
    }
}else{
    console.log(nombre+" tiene "+edad + " años, es menor de edad" )
}


/*
 OPERADORES LOGICOS 
 AND (Y): &&
 OR (O): ||
 Negacion: !
*/

//Negacion

var year = 2018;
if(year != 2016){
    console.log("el año no es 2016, realmente es: "+year)
}

// AND 

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna")
}

// OR 
if( year == 2008 || (year >= 2018 && year == 2028)){
    console.log("el año acaba en 8");
}else{
    console.log("AÑO NO REGISTRADO")
}