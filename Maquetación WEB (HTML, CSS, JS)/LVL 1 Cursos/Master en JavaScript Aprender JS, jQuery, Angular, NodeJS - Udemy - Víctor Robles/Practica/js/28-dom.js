'use strict'
//DOM- Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}

// var caja = document.getElementbyId("micaja");
var caja = document.querySelector('#micaja');

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";


//conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
// var contenidoEnTexto = todosLosDivs[2];
// contenidoEnTexto.innerHTML = "otro texto para el segundo elemento"; 
// contenidoEnTexto.style.background = "red";


//todosLosDivs.forEach((valor, indice) =>{
var seccion = document.querySelector('#miseccion');
var hr = document.createElement('hr');
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo =document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    }
}
seccion.append(hr);
//});

// console.log(contenidoEnTexto);

// conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillos')
divsAmarillos[0].style.background = "yellow";
var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
        
    }
}

// Query Selector

var id = document.querySelector("#encabezado");

console.log(id);

var asd = document.querySelectorAll(".rojo");

console.log(asd)



// divsRojos.style.background = 'red';




// console.log(todosLosDivs);
// console.log(caja);

