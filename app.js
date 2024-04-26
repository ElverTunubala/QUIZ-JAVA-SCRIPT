import {tomarDecision} from './funciones/caso1.js'
import{nuevasDimensiones} from './funciones/caso2.js'
import {contrasena} from './funciones/caso3.js'
import {cadenaModificada} from './funciones/caso4.js'
import {jugarPiedraPapelTijera} from './funciones/caso5.js'
import { actividadesHotel } from './funciones/caso6.js'


//caso 1// Ejecutar la función para tomar la decisión de Hildebrando
let saldoTotal = tomarDecision();
console.log("saldoTotal caso 1:", saldoTotal)

//caso 2

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
let saldoJuego= jugarPiedraPapelTijera();
console.log("saldo papel y tiejera:",saldoJuego)


// caso 6
actividadesHotel();
