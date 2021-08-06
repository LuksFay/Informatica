'use strict'


window.addEventListener('load', function(){
    console.log("DOM CARGADO");

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    console.log(formulario)
    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#edad').value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            // alert("los nombres no son valido")
            document.querySelector('#error_nombre').innerHTML = "El nombre no es valido"
            return false;
        }else{
            document.querySelector('#error_nombre').style.display = "none"
        }
        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("los apellidos no son valido")
            return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("la edad no es valida")
            return false;
        }

        box_dashed.style.display = "block";

        console.log(nombre, apellido, edad)

       var p_nombre = document.querySelector('#p_nombre span');
       var p_apellidos = document.querySelector('#p_apellidos span');
       var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellido;
        p_edad.innerHTML = edad;


       /*
        var datos_usuario = [nombre, apellido, edad];
        var indice; // la variable indice (en este caso) dentro de un for...in representa a "cada uno" de los elementos dentro del array
        for (indice in datos_usuario){
            var parrafo = document.createElement('p'); // crea un parraffo
            parrafo.append(datos_usuario[indice]); //cada uno de los elementos dentro del array datos_usuario, se agregan a el parrafo
            box_dashed.append(parrafo); // el parrafo se agrega a la caja de puntos
        }

        */

        // var parrafo = document.createElement('p');
        // parrafo.append(nombre);
        // parrafo.append(apellido);
        // parrafo.append(edad);
    });

})