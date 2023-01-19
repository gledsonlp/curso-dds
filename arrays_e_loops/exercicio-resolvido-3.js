const numeros = [6, 12, 37, 38, 64, 66]; // tamanho 6
let i = 0, soma = 0;

while (i < numeros.length) {
    // será executado para i de 0 até 5 | 6 não será mais executado
    soma += numeros[i];
    i++;
}

console.log(soma);