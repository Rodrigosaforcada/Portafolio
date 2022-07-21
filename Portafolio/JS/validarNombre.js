export function validarNombre(nombre) {
    const regExNombre = new RegExp('^[A-ZÑ][a-zñ]{1,20}$', 'g');
    console.log(regExNombre.test(nombre));
}

