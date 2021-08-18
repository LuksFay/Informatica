'use strict'

window.addEventListener('load', ()=>{
    // EVENTOS DEL MOUSE
    
    var boton = document.querySelector('#boton');
    
    function cambiarColor(){
        console.log(cambiarColor)
        var bg=boton.style.background;
        
        if(bg == "green"){
            boton.style.background="red";
        }else{
            boton.style.background="green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc"
        return true;
    }
    
    //click
    boton.addEventListener('click', function(){
        cambiarColor();
    });
    
    //mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "yellow";
    });
    
    // mouseout
    boton.addEventListener('mouseout', function(){
        boton.style.background = "black";
    });
    
    // Focus
    var input = document.querySelector('#campo_nombre')
    input.addEventListener('focus', function(){
        console.log("seleccionado");
    })
    
    
    
    // blur
    input.addEventListener('blur', function(){
        console.log("no seleccionado");
    })
    
    
    // EVENTOS TECLADO
    
    // Keydown
    input.addEventListener('keydown', function(event){
        console.log("pulsada tecla", String.fromCharCode(event.keyCode));
    })
    // Keypress
    input.addEventListener('keypress', function(event){
        console.log("PRESIONO tecla", String.fromCharCode(event.keyCode));
    })
    // keyup
    input.addEventListener('keyup', function(event){
        console.log("solte la tecla tecla", String.fromCharCode(event.keyCode));
    })

}); // END LOAD
