const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'vermelho' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' }
];

const nomes = ['ana', 'joao', 'rodrigo'];

const numeros = [1, 2, 3, 4];


// const resultado = carros.findIndex((carro) => {
//     return carro.nome === 'corola';
// });

// const resultado = nomes.findIndex((nome) => {
//     return nome === 'rodrigo';
// });

const resultado = numeros.findIndex((numero) => {
    return numero === 13;
});

console.log(resultado);