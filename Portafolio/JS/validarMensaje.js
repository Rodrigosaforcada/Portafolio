export function validarMensaje(Mensaje) {
    const regExMensaje = new RegExp('[a-z0-9]{1,20}|\\s', 'gi');
    console.log(regExMensaje.test(Mensaje));
    console.log(Mensaje.match(regExMensaje));
}