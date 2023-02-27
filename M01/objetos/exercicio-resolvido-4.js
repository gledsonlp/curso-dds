const produtosConsumidos = [
    {
        nome: "Pão de Alho",
        precoUnit: 1500,
        quantidade: 3
    },
    {
        nome: "Cerveja",
        precoUnit: 1000,
        quantidade: 2
    },
    {
        nome: "Água",
        precoUnit: 500,
        quantidade: 1
    }
];

const cartao = {
    nome: "José",
    idade: 30,
    produtosConsumidos
};

let valorAPagar = 0;

for (let produto of produtosConsumidos) {
    valorAPagar += produto.precoUnit * produto.quantidade;
}

valorAPagar = (valorAPagar / 100).toFixed(2);

console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$ ${valorAPagar}.`); // string template
