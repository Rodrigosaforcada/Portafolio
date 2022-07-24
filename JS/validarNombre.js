export function validarNombre(nombre) {
    const regExNombre = new RegExp('^[A-ZÑ][a-zñ]{1,50}$', 'g');
    console.log(regExNombre.test(nombre));
    return nombre.match(regExNombre);
}

