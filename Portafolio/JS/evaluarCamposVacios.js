const botonEnviar = document.querySelector('#boton-enviar');
const campoNombre = document.querySelector('#nombre');
const campoEmail = document.querySelector('#e-mail');
const campoAsunto = document.querySelector('#asunto');
const campoMensaje = document.querySelector('#mensaje');

let nombreVacio = true;
let eMailVacio = true;
let asuntoVacio = true;
let mensajeVacio = true;

function habilitarBotonEnviar() {
    if(!nombreVacio && !eMailVacio && !asuntoVacio && !mensajeVacio) {
        botonEnviar.disabled = false;
    } else {
        botonEnviar.disabled = true;
    }
}

campoNombre.addEventListener('focusout', (evento) => {
    console.log(evento);
    if(evento.target.value == "") {
        nombreVacio = true;
    } else {
        nombreVacio = false;
        habilitarBotonEnviar();
    }
});

campoEmail.addEventListener('focusout', (evento) => {
    console.log(evento);
    if(evento.target.value == "") {
        eMailVacio = true;
    } else {
        eMailVacio = false;
        habilitarBotonEnviar();
    }
});

campoAsunto.addEventListener('focusout', (evento) => {
    console.log(evento);
    if(evento.target.value == "") {
        asuntoVacio = true;
    } else {
        asuntoVacio = false;
        habilitarBotonEnviar();
    }
});

campoMensaje.addEventListener('focusout', (evento) => {
    console.log(evento);
    if(evento.target.value == "") {
        mensajeVacio = true;
    } else {
        mensajeVacio = false;
        habilitarBotonEnviar();
    }
});