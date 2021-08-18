'use strict'

// BOM - Browser Object Model

function getBom() {
    console.log(window.innerWidth); // widh actual
    console.log(screen.width); // width de la pantalla
    console.log(screen.height); // height actual
    console.log(window.innerHeight); //height de la pantalla
    console.log(window.location); //info de la bara de direeciones
}
function redirect(url){
    window.location.href = url; //la url indicada debe de ir entre comillas
}

function abrirVentana(url){
    window.open(url, "Pagina_troll", "width=400,height=300,menubar=yes,location=no,resizable=no");
}
getBom();