import {tomarDecision} from './funciones/caso1.js'
import{nuevasDimensiones} from './funciones/caso2.js'
import {contrasena} from './funciones/caso3.js'
import {cadenaModificada} from './funciones/caso4.js'
import {jugarPiedraPapelTijera,dineroPiedra} from './funciones/caso5.js'
import { actividadesHotel,dineroBingo ,casino,diasEnMacondo,muerte} from './funciones/caso6.js'


//caso 1// Ejecutar la función para tomar la decisión de Hildebrando
let saldoTotalCasoUno = tomarDecision();
console.log(`saldo Total caso 1: ${saldoTotalCasoUno} pesos.`)

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
jugarPiedraPapelTijera();
console.log("saldo caso 2 papel y tijera en app: ",dineroPiedra)

// caso 6
actividadesHotel();
console.log(`El dinero del hotel en la app es: ${dineroBingo}`)


if (casino){
    console.log("saldo"+"$"+50000+" para el pasaje")

}else{
    let gasto = 2500000-dineroPiedra
    console.log("se gasto en sus vacaciones: "+gasto)

    let saldoTotalcapital = dineroPiedra + dineroBingo
    console.log("saldo totalcapital que queda:",saldoTotalcapital)
}

console.log("se quedo: "+diasEnMacondo+" dias en Hildebrando")

if(muerte){
    console.log("se murio y no logro llegar")
}else{
    console.log("si logro llegar de vacaciones vivo")
}
