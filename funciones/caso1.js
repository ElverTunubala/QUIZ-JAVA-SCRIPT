export let a = console.log("soy el caso 1")

let dineroDisponible = 2500000;

export function tomarDecision() {
    
    let decision = prompt("Hildebrando, ¿qué deseas comprar antes del vuelo?\n1. Almojábana con gaseosa - $15,000\n2. Subway con gaseosa - $23,000\n3. No comprar nada");

    // Actualizar el dinero disponible según la decisión de Hildebrando
    if (decision === "1") {
        dineroDisponible -= 15000;
        console.log("Hildebrando compró una almojábana con gaseosa por $15,000.");
        console.log("Le caerá mal porque lleva mucho en el stand.");
    } else if (decision === "2") {
        dineroDisponible -= 23000;
        console.log("Hildebrando compró un Subway con gaseosa por $23,000.");
        console.log("Estará llenito y bien.");
    } else if (decision === "3") {
        console.log("Hildebrando decidió no comprar nada.");
        console.log("Le tocará comprar algo en Medellín.");
    } else {
        console.log("Opción no válida. Por favor ingresa 1, 2 o 3.");
        tomarDecision(); 
        return;
    }

    // Imprimir el dinero disponible actualizado
    console.log(`Dinero disponible después de la compra: $${dineroDisponible}`);
}

