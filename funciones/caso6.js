
let dineroDisponible = 2500000;
let diasEnMacondo = 0;


function actividadesHotel() {
    
    let coloresDias = ["amarillo", "verde", "rojo", "azul"];

    // Iterar sobre cada día de la estadía en el hotel
    for (let i = 0; i < coloresDias.length; i++) {
        let colorDia = coloresDias[i];
        diasEnMacondo++;

        console.log(`\nDía ${diasEnMacondo}: Color del día - ${colorDia}`);

        // Pregunta por las actividades del día según el color
        if (colorDia === "amarillo") {
            let decisionAmarillo = prompt("¿Deseas ir a la piscina? (sí/no)").toLowerCase();
            if (decisionAmarillo === "sí") {
                console.log("Te metes en la piscina y empiezas a sentirte ahogado. Demasiado cloro. ¡Mueres!");
                return;
            } else {
                console.log("Decides no ir a la piscina. No pasa nada.");
            }
        } else if (colorDia === "verde") {
            let decisionVerde = prompt("¿Deseas ir a caminar y tomar agüita para el camino? (sí/no)").toLowerCase();
            if (decisionVerde === "sí") {
                console.log("Decides ir toda la caminata y llegas a una hermosa cascada. Te tomas fotos.");
            } else {
                console.log("Decides no ir toda la caminata. Llegas a cierto punto y te devuelves solo. Luego te pierdes por la noche.");
                return;
            }
        } else if (colorDia === "rojo") {
            let decisionRojo = prompt("¿Qué actividad en la playa prefieres: voleibol, nadar en el mar y montar moto, o tomar cócteles mientras descansas?").toLowerCase();
            if (decisionRojo === "voleibol" || decisionRojo === "nadar en el mar y montar moto") {
                console.log("Disfrutas del día en la playa.");
            } else {
                console.log("Te pones a tomar cócteles mientras descansas. De pronto sientes un fuerte dolor de cabeza y empiezas a perder la visión. ¡El chirrinchi estaba adulterado! Tienes que devolverte de emergencia. ¡Terminan las vacaciones!");
                return;
            }
        } else if (colorDia === "azul") {
            let decisionAzul = prompt("¿Qué actividad prefieres dentro del hotel: bingo, bailar, o ir al casino y apostar?").toLowerCase();
            if (decisionAzul === "bingo" || decisionAzul === "bailar") {
                console.log("Disfrutas de las actividades dentro del hotel.");
            } else {
                console.log("Vas al casino y apuestas, pero solo te quedas con el pasaje de regreso. ¡Terminan las vacaciones!");
                return;
            }
        } else {
            console.log("Color de día no válido.");
            return;
        }
    }

    // Si llega al final de la semana sin incidentes, se imprime el resultado final
    console.log("\nResultado final:");
    console.log(`Hildebrando estuvo en Macondo durante ${diasEnMacondo} días.`);
    console.log("Hildebrando pudo regresar de Macondo.");
    console.log(`Hildebrando gastó ${(2500000 - dineroDisponible).toLocaleString()} pesos.`);
}

actividadesHotel();
