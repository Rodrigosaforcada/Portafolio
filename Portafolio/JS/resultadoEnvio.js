import { validarNombre } from "./validarNombre.js";

const botonEnviar = document.querySelector(".contacto__datos_input--boton_enviar");

botonEnviar.addEventListener('click', (evento) => {
    let labelMensaje = evento.path[0].nextElementSibling.innerText = "Ha presionado el boton"; 
    console.log(labelMensaje);

    const inputNombre = evento.path[1].childNodes[7].value;

    validarNombre(inputNombre);

    const inputEmail = evento.path[1].childNodes[9].value;
    const inputAsunto = evento.path[1].childNodes[11].value;
    const inputMensaje = evento.path[1].childNodes[13].value;

    const inputDatos = [inputNombre, inputEmail, inputAsunto, inputMensaje];

    console.log(inputDatos);
});