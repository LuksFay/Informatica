'use strict'

function holaMundo(texto) {
    var hola_mundo = "texto de funcion" 
    //el scope o ambito de esta variable se encuentra dentro de esta funcion, lo cual indica que 
    //no podra ser accesible desde fuera de la  misma.


    console.log(texto);
    console.log(typeof numero.toString());
    console.log(hola_mundo)
}
var numero = 12;
var text = "Hola mundo soy una constante global"
holaMundo(text)