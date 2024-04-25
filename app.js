import {tomarDecision} from './funciones/caso1.js'
import{ajustarDimensionesMaleta} from './funciones/caso2.js'
import {contrasena} from './funciones/caso3.js'
import {cadenaModificada} from './funciones/caso4.js'
import {jugarPiedraPapelTijera} from './funciones/caso5.js'

//caso 1// Ejecutar la función para tomar la decisión de Hildebrando
tomarDecision();

//caso 2
// Ajustar las dimensiones

// Dimensiones originales 
let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

// Dimensiones permitidas por la aerolínea
let altoPermitido = 55;
let largoPermitido = 40;
let anchoPermitido = 20;

let nuevasDimensiones = ajustarDimensionesMaleta(altoOriginal, largoOriginal, anchoOriginal, altoPermitido, largoPermitido, anchoPermitido);

// Imprimir las nuevas dimensiones ajustadas
console.log("Nuevas dimensiones de la maleta ajustadas para cumplir con los límites de la aerolínea:");
console.log(`Alto: ${nuevasDimensiones.nuevoAlto} cm`);
console.log(`Largo: ${nuevasDimensiones.nuevoLargo} cm`);
console.log(`Ancho: ${nuevasDimensiones.nuevoAncho} cm`);

//caso 3
// Convertir la contraseña binaria a caracteres
console.log("Contraseña WiFi decodificada:", contrasena);

//caso 4
// Imprimir la cadena modificada
console.log("Cadena modificada:", cadenaModificada);

//caso 5
jugarPiedraPapelTijera();