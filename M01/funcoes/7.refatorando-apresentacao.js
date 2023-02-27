function apresentar(pessoa) {
    if (pessoa.idade < 21) {
        return `Sou ${pessoa.nome}, tenho ${pessoa.idade} anos e sou um(a) jovem de ${pessoa.profissao}.`;
    } else if (pessoa.idade < 65) {
        return `Sou ${pessoa.nome}, tenho ${pessoa.idade} anos e sou um(a) adulto(a) de ${pessoa.profissao}.`;
    } else {
        return `Sou ${pessoa.nome}, tenho ${pessoa.idade} anos e sou um(a) idoso(a) de ${pessoa.profissao}.`;
    }
}

const pessoa = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}
console.log(apresentar(pessoa));

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "médico"
}
console.log(apresentar(pessoa2));

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante"
}
console.log(apresentar(pessoa3));