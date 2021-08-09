'use strict'

//  Un API REST es un servicio o un backend que nos devuelve datos en json, peude recibir peticiones por POST, PUT, DELETE, esos son metodos HTTP  (protocolo de transferencia de hipertexto / hypertext transfer protocol)
// un API recibe una informacion y devuelve otra en JSON. Guarda y saca datos en una BaseData. es el uso que normalmente se le da a una api
//Fetch es un sustituto de AJAX, basicamente un metodo que hac peticiones AJAX, peticiones asincronas a un servidor
// JSON placeholder || reqres contiene datos de prueba 

// FETCH Y PETICIONES A SERVICIOS / APIS REST
var div_usuarios = document.querySelector('#usuarios');
var div_profesor = document.querySelector('#profesor')
var div_janet = document.querySelector('#janet');
// var usuarios = [];

// fetch('https://reqres.in/api/users')      // fetch hace una peticion, un link, aca le pide a una base de datos una lista de usuarios
    getUsuarios()
        .then(data => data.json())           // el primer then hace una promesa captura los datos pedidos en el paso anterior y los transforma a json
        .then(users =>{                     // en la segunda ya tenemos todos los datos recogiso en la variable data y dentro de la variable usuario lo guardamos
            // usuarios = users.data;
            listadoUsuarios(users.data);

            return getInfo();
        })
        .then(data => {
            div_profesor.innerHTML = data;
            return getJanet(); 
        })
        .then(data => data.json())
        .then(user => {
            console.log('que vale user?', user)
            mostrarJanet(user.data);
            
        })

        .catch(error => {
            alert('error en las peticiones')
        });
        

    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }
    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }
    function getInfo() {
        var profesor = {
            nombre: 'Victor',
            apellidos: 'Robles',
            url: 'https://victorroblesweb.es'
        };
        
        return new Promise ((resolve, reject) => {
            var profesor_string = "";

            setTimeout(function(){
                profesor_string = JSON.stringify(profesor);
                if (typeof profesor_string != 'string' || profesor_string == '') return reject ('error');
                return resolve(profesor_string)
            }, 3000);

           
        })
    }


    //todo lo que esta en esta funcin antes estaba adentro del fetch

    function listadoUsuarios(usuarios) {
        usuarios.map((user,i) => {
            console.log(user);
           let nombre = document.createElement('h3');
           
           nombre.innerHTML = i + " - "+ user.first_name + " " + user.last_name;
        
           div_usuarios.appendChild(nombre);
        
           document.querySelector('.loading').style.display = 'none';     //efecto loading
        });
    }
    function mostrarJanet(user){
            console.log(user);
           let nombre = document.createElement('h4');
           let avatar = document.createElement('img');

           nombre.innerHTML = user.first_name + " " + user.last_name;
           avatar.src = user.avatar;
           avatar.width = '100';
           
           div_janet.appendChild(nombre);
           div_janet.appendChild(avatar);
           document.querySelector('.loading2').style.display = 'none';     //efecto loading
        ;
    }