import { dineroDisponible } from "./caso1.js";

let diasEnMacondo = 0;

export function actividadesHotel() {
    
    let coloresDias = ["amarillo", "verde", "rojo", "azul"];
    let numColoresDia = coloresDias.length
    
    // Iterar sobre cada día de la estadía en el hotel
    for (let i = 0; i < numColoresDia; i++) {
        diasEnMacondo++;

        let indiceColores = Math.floor(Math.random() * coloresDias.length)
        let colorAleatorio = coloresDias[indiceColores];
        
        console.log(`\nDía ${diasEnMacondo}: Color del día - ${colorAleatorio}`);

        // Pregunta por las actividades del día según el color
        if (colorAleatorio === "amarillo") {

            coloresDias.splice(indiceColores,1); 
            let decisionAmarillo = prompt("¿Deseas ir a la piscina? (si/no)").toLowerCase();

            if (decisionAmarillo === "si") {
                alert("Demasiado cloro y ¡Murio!");
                return numColoresDia =5

            } else {
                console.log("Decides no ir a la piscina. No pasa nada.");
            }
        } else if (colorAleatorio === "verde") {

            coloresDias.splice(indiceColores,1); 
            let decisionVerde = prompt("¿Deseas ir a caminar y tomar agüita para el camino? (si/no)").toLowerCase();

            if (decisionVerde === "si") {
                console.log("Decides ir toda la caminata y llegas a una hermosa cascada. Te tomas fotos.");
            } else {
                console.log("vas hasta cierto punto y te devuelves solo. Luego te pierdes.");
                
            }
        } else if (colorAleatorio === "rojo") {

            coloresDias.splice(indiceColores,1); 
            let decisionRojo = prompt("¿Qué actividad en la playa prefieres: voleibol, mar, montar moto, descansar?").toLowerCase();

            if ((decisionRojo === "voleibol") ||
                     (decisionRojo === "mar") ||
                     (decisionRojo === "montar moto")) {
                console.log("Disfrutas del día en la playa y el mar");
            } else {
                console.log("¡El chirrinchi estaba adulterado! Tienes que devolverte de emergencia. ¡Terminan las vacaciones!");
                alert("TERMINA LAS VACACIONES")
                return numColoresDia =5
                
            }
        } else if (colorAleatorio === "azul") {

            coloresDias.splice(indiceColores,1); 
            let decisionAzul = prompt("¿Qué actividad prefieres dentro del hotel: bingo, bailar, casino ?").toLowerCase();

            if (decisionAzul === "bingo" ) {
                return dineroDisponible += 100000
                console.log("felicitaciones has ganado las suma de $100.000");

            }else if(decisionAzul === "bailar"){
                console.log("Disfrutas del baile dentro del hotel.");
            }
             else {
                console.log("apostastes y perdistes, ¡Terminan las vacaciones!");
                return numColoresDia =5
                
            }
        } else {
            console.log("Color de día no válido.");
            return;
        }
    }

    
}

// Si llega al final de la semana sin incidentes, se imprime el resultado final
// console.log("\nResultado final:");
// console.log(`Hildebrando estuvo en Macondo durante ${diasEnMacondo} días.`);
// console.log("Hildebrando pudo regresar de Macondo.");
// console.log(`Hildebrando gastó ${(2500000 - dineroDisponible).toLocaleString()} pesos.`);

