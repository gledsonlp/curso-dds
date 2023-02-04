const pessoas = ['João', 'ana', 'Carlos', 'beatriz'];

// ordenação crescente
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

// ordenação crescente
pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);