'use strict'

// Arraays, arreglos, matrices


var nombre = "victor robles";
var nombres = ["victor","Lucas", "Fernando", 24, true];
                //0         1       2        3     4
console.log(nombres[4]);
console.log(nombres.length);


var lenguajes = new Array ("PHP", "JS", "Go", "Rust", "Solidity");

/*
var elemento = parseInt(prompt("Que elemento dfel array quieres??", 0));
if(elemento >= nombres.length){
    alert("introduce el numero correcto menor que " + nombres.length);
}else{
    alert("el usuario seleccionado es: "+nombres[elemento]);
}

alert(nombres[elemento]);
*/
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*
for(var i = 0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/         // (e. del array, lugar que ocupa dentro del mismo, info del array completo)
lenguajes.forEach((elemento, index, arrData)=>{
    console.log(arrData);
    document.write("<li>"+index+" - "+elemento+"</li>");
});

for (let lenguaje in lenguajes) {
    document.write("<li>"+lenguajes[lenguaje]+"</li>"); // EL FAMOSO FOR IN
}
document.write("</ul>");

// busquedas

var busqueda = lenguajes.find(lenguaje =>{
    return lenguaje == "PHP";
})
console.log(busqueda)

var precios =[20, 45, 86, 45, 847, 21];
var busqueda2 = precios.some(precio => precio >= 900);

console.log(busqueda2);