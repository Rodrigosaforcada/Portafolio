export function validarAsunto(Asunto) {
    const regExAsunto = new RegExp('([a-zñ0-9]|\\s)', 'gi');
    console.log(regExAsunto.test(Asunto));
    console.log(Asunto.match(regExAsunto));
    
    let coincidencias = Asunto.match(regExAsunto);
    
    let cantidadCaracteres = 0; 
    
    coincidencias.forEach(coincidencia => {
        cantidadCaracteres += coincidencia.length;
    });

    console.log('cantidad de caracteres en Asunto: ' + cantidadCaracteres);

    if(cantidadCaracteres > 50) {
        return false;
    }
    
    return Asunto.match(regExAsunto);
}