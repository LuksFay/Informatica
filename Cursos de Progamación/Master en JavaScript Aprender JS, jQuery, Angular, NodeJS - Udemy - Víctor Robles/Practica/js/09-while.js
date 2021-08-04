 'use strict'

 // BUCLE WHILE

 var year = 2018;

 while ( year != 1991){
     //ejecuta esto
     console.log("Estamos en el año: "+year);

    if(year == 2000){
        break;    //el break corta el codigo en ejecucion
    }

     year --;
 }

 //Do while

 var years = 21;
 // con esto el mensaje de alerta (en este caso) se repite infinitamente "haz (do) 'algo' mientras (while) se cumpla esta condicion"
 do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years++;
 }while(years !=20);

 var years2 = 30;

 do{
    alert("SOLO CUANDO SEA MENOR A 25");
    years2--;
 }while(years2 > 25);

