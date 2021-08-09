'use strict'

//Localstorage 
// con el localstorage o html5-webstorage. podemos guardar informacion en nuestro navegador web a modo de sesion y que esta informacion persista y este disponible durante la navegacion entre las diferentes paginas de nuestra pagina web o en nuestra aplicacion web
//suele usarse muchisimo en aplicaciones desarrolladas completamente con JavaScript; por ejemplo en proyectos del minestack, con tecnologias como Angular, aunque tambien puede aplicarse a cualquier proyecto web que tengamos y compartir datos entre las diferentes secciones.
//Por ejemplo: en una aplicacion web monolitica clasica desarrollada con un lenguaje de backend como php, el uso del localstorage  no es como tal sino que se utiliza en las sesiones, o sea, una memoria que tambien persiste pero a nivel de backend.
// localstorage = memoria que dispone el navegador


//COMPROBAR DISPONIBILIDAD DEL LOCALSTORAGE
if(typeof(Storage) !== 'undefined'){
    console.log("localstorage disponible");
}else{
    console.log('incompatible con localstorage')
}

//GUARDAR DATOS

localStorage.setItem('titulo', ' curso de symfony de victor robles');
//de esta manera guardamos datos dentro de la consola, en la secion de local storage
// RECUPERAR ELEMENTO
console.log(localStorage.getItem("titulo"));
document.querySelector('#peliculas').innerHTML = localStorage.getItem("titulo");


//GUARDAR OBJETO
var usuario =  {
    nombre: 'Victor Robles',
    email: '"victor@victor.com',
    web: 'victorroblesweb.es'
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Esto permite que un objeto de js sea guardado y leido en formato de localSotrage, debe ahcerse en json string para que sea mucho mas optimo, y porque es la manera de hacerlo

//RECUPERAR OBJETOS

var userjs = JSON.parse(localStorage.getItem('usuario'));
//se usa para trasnformar un json string en un json usable por javascript
console.log(userjs);
document.querySelector('#datos').append(userjs.web+" - "+userjs.nombre);

//ELIMINAR ELEMENTOS DEL LOCALSTORAGE
localStorage.removeItem("usuario"); //seguira mostrando en pantalla, pero lo eliminara del localStorage
localStorage.clear(); //vacia todo el localStorage, sigue apareciendo en pantalla