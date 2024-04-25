// Dimensiones originales 
let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

// Dimensiones permitidas por la aerolínea
let altoPermitido = 55;
let largoPermitido = 40;
let anchoPermitido = 20;

export function ajustarDimensionesMaleta(altoOriginal, largoOriginal, anchoOriginal, altoPermitido, largoPermitido, anchoPermitido) {
    // factor de reducción para cada dimensión
    let factorReduccionAlto = altoPermitido / altoOriginal;
    let factorReduccionLargo = largoPermitido / largoOriginal;
    let factorReduccionAncho = anchoPermitido / anchoOriginal;

    // factor de reducción más pequeño
    let factorReduccionMasPequeno = Math.min(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho);

    //  nuevas dimensiones ajustadas
    let nuevoAlto = altoOriginal * factorReduccionMasPequeno;
    let nuevoLargo = largoOriginal * factorReduccionMasPequeno;
    let nuevoAncho = anchoOriginal * factorReduccionMasPequeno;

    // nuevas dimensiones
    return {
        nuevoAlto: nuevoAlto,
        nuevoLargo: nuevoLargo,
        nuevoAncho: nuevoAncho
    };
}
export let nuevasDimensiones = ajustarDimensionesMaleta(altoOriginal, largoOriginal, anchoOriginal, altoPermitido, largoPermitido, anchoPermitido);


