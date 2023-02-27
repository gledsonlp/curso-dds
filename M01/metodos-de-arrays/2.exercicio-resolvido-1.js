function inverterString(texto) {
    const arrayDeLetras = texto.split('');
    arrayDeLetras.reverse();

    let textoInvertido = '';
    for (let letra of arrayDeLetras) {
        textoInvertido += letra;
    }
    console.log(textoInvertido);
}

inverterString('Cubos Academy')