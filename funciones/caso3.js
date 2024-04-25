
let contrasenaBinaria = "01110010_01101001_01110111_01101001"; 

export function binarioACaracteres(binario) {
    // Dividir el string binario en grupos de 8 bits (1 byte)
    let bytes = binario.split("_");

    // Convertir cada byte de binario a decimal y luego a caracter ASCII
    let caracteres = bytes.map(byte => String.fromCharCode(parseInt(byte, 2)));

    // Unir todos los caracteres para formar la contraseña
    let contrasena = caracteres.join("");

    return contrasena;
}
export let contrasena = binarioACaracteres(contrasenaBinaria);



