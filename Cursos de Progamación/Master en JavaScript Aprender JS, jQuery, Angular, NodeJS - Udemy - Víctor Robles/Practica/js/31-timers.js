'use strict'

window.addEventListener('load', function(){

    function intervalo(){
        // timers  (setInterval = bucle, serTimeOut=una sola vez)
        var tiempo = setInterval(function(){
            console.log("set interval ejecutado");
    
            var encabezado = document.querySelector("h1")
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px"
            }else{
                encabezado.style.fontSize = "50px"
            }
            ;
        }, 100)
        return tiempo;
    }
    var tiempo = intervalo()
    var stop = this.document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("haz parado el intervalo de tiempo")
        clearInterval(tiempo);
    })

    var start = this.document.querySelector("#start");
    start.addEventListener("click", function(){
        alert("haz iniciado el intervalo de tiempo")
        intervalo();
    })
})