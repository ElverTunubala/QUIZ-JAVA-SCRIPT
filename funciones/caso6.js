
export let diasEnMacondo = 0;
export let dineroBingo = 0;
export let casino = false;
export let muerte = false;

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
                muerte = true
                return numColoresDia =5

            } else {
                console.log("Decides no ir a la piscina. No pasa nada.");
            }
        } else if (colorAleatorio === "verde") {

            coloresDias.splice(indiceColores,1); 
            let decisionVerde = prompt("¿Deseas ir a caminar? (si/no)").toLowerCase();

            if (decisionVerde === "si") {
                console.log("Decides ir toda la caminata y llegas a una hermosa cascada. Te tomas fotos.");

            } else {
                console.log("vas hasta cierto punto y te devuelves solo. Luego te pierdes.");
            }
        } else if (colorAleatorio === "rojo") {

            coloresDias.splice(indiceColores,1); 
            let decisionRojo = prompt("¿Qué actividad en la playa prefieres: voleibol, mar, moto, descansar?").toLowerCase();

            if ((decisionRojo === "voleibol") ||
                     (decisionRojo === "mar") ||
                     (decisionRojo === "moto")) {
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
                console.log("felicitaciones has ganado las suma de $100.000");
                dineroBingo = 100000

            }else if(decisionAzul === "bailar"){
                console.log("Disfrutas del baile dentro del hotel.");
            }
             else {
                console.log("apostastes y perdistes, ¡Terminan las vacaciones!");
                casino = true;
                return numColoresDia =5
                
            }
        } else {
            console.log("Color de día no válido.");
           
        }
    }
}




