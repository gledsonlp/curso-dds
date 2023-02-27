// Exemplo de ordenação padrão
const array = [2, 4, 1, 20, 3, 43];
array.sort(); // [1,2,20,3,4,43]

console.log(array);

// Exemplo de ordenação com função callback
array.sort((a, b) => {
    return a - b;
}); // [1, 2,3, 4, 20, 43]

console.log(array);

// ordenação crescente
array.sort((a, b) => {
    return a - b;
});

console.log(array);

// ordenação decrescente
array.sort((a, b) => {
    return b - a;
});

console.log(array);