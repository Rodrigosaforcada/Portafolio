export function validarAsunto(Asunto) {
    const regExAsunto = new RegExp('[a-z0-9]{1,20}|\\s', 'gi');
    console.log(regExAsunto.test(Asunto));
    console.log(Asunto.match(regExAsunto));
}