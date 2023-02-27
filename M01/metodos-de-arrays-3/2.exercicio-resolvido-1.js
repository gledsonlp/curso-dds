const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'carlos', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 }
];

console.log(usuarios);

usuarios.sort((primerio, segundo) => {
    return primerio.id - segundo.id;
});

console.log(usuarios);

usuarios.sort((primerio, segundo) => {
    return segundo.id - primerio.id;
});

console.log(usuarios);