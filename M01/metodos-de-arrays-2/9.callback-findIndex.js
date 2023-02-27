/**
 * findIndex - Retorna o índice do primeiro elemento do array,
 * correspondente a condição implementada no função callback,
 * passada como argumento.
 * Caso contrário, retorna -1.
 */

const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.findIndex((numero) => {
    return numero === 5;
}); // return 4

console.log(resultado);