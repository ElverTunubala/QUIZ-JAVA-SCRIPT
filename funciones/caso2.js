
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



