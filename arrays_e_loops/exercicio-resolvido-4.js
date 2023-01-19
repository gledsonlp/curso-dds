/**
 *  Faça um programa que conta quantas letras
 *  "a" existem numa determinada palavra.
 *  Imprima o resultado na tela.
 */

const palavra = 'abracadabra'; // 5 letras

let encontrado = false, quantidade = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        quantidade++;
        encontrado = true;
    }
}

if (encontrado) {
    console.log(`${quantidade} letras 'a' encontradas`);
} else {
    console.log(`Letra 'a' não encontrada`);
}
