
let cadenaOriginal = "Taxi me puede llevar al hotel mariposas amarillas";

function reemplazarVocalesConI(cadena) {
    // Utilizamos una expresión regular 
    let nuevaCadena = cadena.replace(/[aeiou]/gi, 'i');
    return nuevaCadena;
}

export let cadenaModificada = reemplazarVocalesConI(cadenaOriginal);

//  "gi" son indicadores que le dicen a la función que busque coincidencias en toda la cadena (de lo contrario, se romperá en la primera coincidencia),
//  la "g" bandera significa "global" o "buscar todas las coincidencias" Y la bandera "i" le indica que coincida sin 
//  distinguir entre mayúsculas y minúsculas. Por lo tanto, también coincidiría con I.