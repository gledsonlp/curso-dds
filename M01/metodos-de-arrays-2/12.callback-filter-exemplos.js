const numeros = [1, 4, 4, 5, 3, 1, 8];
const resultadoNumeros = numeros.filter((numero) => {
    return numero === 4;
});
console.log(resultadoNumeros);

const nomes = ['joao', 'maria', 'joao', 'jose'];
const resultadoNomes = nomes.filter((nome) => {
    return nome === 'joao';
});
console.log(resultadoNomes);