
let cadenaOriginal = "Taxi me puede llevar al hotel mariposas amarillas";

export function reemplazarVocalesConI(cadena) {
    // Utilizamos una expresión regular 
    let nuevaCadena = cadena.replace(/[aeiou]/gi, 'i');
    return nuevaCadena;
}

export let cadenaModificada = reemplazarVocalesConI(cadenaOriginal);


