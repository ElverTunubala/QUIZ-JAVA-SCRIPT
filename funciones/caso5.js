import { dineroDisponible } from "./caso1.js";

//simular una partida 
export function jugarPiedraPapelTijera() {
    
    // Genera una jugada aleatoria para Hildebrando el .floor es para redondear al numero mas cercano hacia atras.
    let jugadaHildebrando = Math.floor(Math.random() * 3); 
    
    // Genera una jugada aleatoria para el taxista
    let jugadaTaxista = Math.floor(Math.random() * 3); // 0: piedra, 1: papel, 2: tijera
    
    // resultado de la partida
    if (jugadaHildebrando === jugadaTaxista) {
        console.log("¡Empate!");

    } else if ((jugadaHildebrando === 0 && jugadaTaxista === 2) || 
               (jugadaHildebrando === 1 && jugadaTaxista === 0) || 
               (jugadaHildebrando === 2 && jugadaTaxista === 1)) {
        console.log("¡Hildebrando gana! El taxista no le cobrará los 300,000 pesos.");
    } else {
        console.log("¡El taxista gana! Se descontarán 300,000 pesos del dinero disponible de Hildebrando.");
        dineroDisponible -= 300000;
    }
}
console.log("Dinero disponible después de la partida:", dineroDisponible);
