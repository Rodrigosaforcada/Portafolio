import { validarNombre } from "./validarNombre.js";
import { validarEmail } from "./validarEmail.js";
import { validarAsunto } from "./validarAsunto.js";
import { validarMensaje } from "./validarMensaje.js";

const botonEnviar = document.querySelector(".contacto__datos_input--boton_enviar");

botonEnviar.addEventListener('click', (evento) => {
    evento.path[0].nextElementSibling.innerText = "";

    const inputDatos = {
        nombre: "",
        eMail: "",
        asunto: "",
        mensaje: ""
    };

    const inputNombre = evento.path[1].childNodes[7].value;

    if(!validarNombre(inputNombre)) {
        evento.path[0].nextElementSibling.innerText += 
        " Nombre debe tener la primera letra en mayúscula, el resto en minúscula y sin espacios.";
    }

    const inputEmail = evento.path[1].childNodes[9].value;

    if(!validarEmail(inputEmail)) {
        evento.path[0].nextElementSibling.innerText += 
        " E-mail debe tener por lo menos 3 caracteresantes del '@', 'gmail' o 'yahoo' despues de este finalizado con ''.com y no tener espacios.";
    }

    const inputAsunto = evento.path[1].childNodes[11].value;

    if(!validarAsunto(inputAsunto)) {
        evento.path[0].nextElementSibling.innerText += 
        " Asunto no debe superar los 50 caracteres.";
    }

    const inputMensaje = evento.path[1].childNodes[13].value;

    if(!validarMensaje(inputMensaje)) {
        evento.path[0].nextElementSibling.innerText += 
        " Mensaje no debe superar los 300 caracteres.";
    }

    if(inputDatos.nombre != "" && inputDatos.eMail != "" && inputDatos.asunto != "" && inputDatos.mensaje != "") {
        inputDatos.nombre = inputNombre;
        inputDatos.eMail = inputEmail;
        inputDatos.asunto = inputAsunto;
        inputDatos.mensaje = inputMensaje;
        evento.path[0].nextElementSibling.innerText = "Datos enviados con éxito";
    }

    console.log(inputDatos.nombre);
    console.log(inputDatos.eMail);
    console.log(inputDatos.asunto);
    console.log(inputDatos.mensaje);
});