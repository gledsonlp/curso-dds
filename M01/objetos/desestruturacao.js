// Desestruturação de objetos - Destructuring

const pessoa = {
    nome: "José",
    idade: 20,
    cidade: "Salvador",
    profissao: "Dev"
};

/** Método menos prático  **/
// const nome = pessoa.nome;
// const idade = pessoa.idade;

/** Método mais prático (destruturação)  **/
const { nome, idade, ...outros } = pessoa;

console.log(nome, idade);
console.log(outros);