


function getdata(){

let Nombre=document.getElementById("nombre").value;
let Edad=document.getElementById("edad").value;
let Email=document.getElementById("email").value;
let Telefono=document.getElementById("telefono").value;
return{nombre: Nombre, edad: Edad, email: Email, telefono: Telefono};

}

function guardarDatos(datos){

localStorage.setItem("Nombre", datos.nombre);
localStorage.setItem("Edad", datos.edad);
localStorage.setItem("Email", datos.email);
localStorage.setItem("Telefono", datos.telefono);



}

 function leerInformacion(){

        let nombre = localStorage.getItem('Nombre');
        let edad = localStorage.getItem('Edad');
        let email= localStorage.getItem('Email');
        let telefono = localStorage.getItem('Telefono');
        
        

        document.getElementById("nombre").value = nombre;
        document.getElementById("edad").value = edad;
        document.getElementById("email").value = email;
        document.getElementById("telefono").value = telefono;
        
    }



document.addEventListener("DOMContentLoaded", function (e) {
document.getElementById("btnboton").addEventListener("click", function(e){
let datos = getdata();
leerInformacion();
guardarDatos(datos);


console.log(datos);

let form= localStorage.getItem("nombre");

if (form!==null) {

    document.getElementById("nombre");

    
}


    
});

});
