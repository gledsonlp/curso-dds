function imprimirData(dia, mes, ano) {
    // duas opções de se transformar number em string
    const diaFormatado = String(dia).padStart(2, 0);
    const mesFormatado = `${mes}`.padStart(2, 0);
    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(1, 1, 2021);