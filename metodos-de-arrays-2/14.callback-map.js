/**
 * map() - Executa a função callback passada como argumento
 * e retorna um novo array como resultado.
 */
const numeros = [1, 2, 3];

const dobro = numeros.map((numero) => {
    return numero * 2;
});

console.log(dobro); // dobro = [2, 4, 6]