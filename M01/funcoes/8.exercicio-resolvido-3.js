function determinarFaixaEtaria(idade) {
    if (pessoa.idade < 21) {
        return "jovem";
    } else if (pessoa.idade < 66) {
        return "adulto(a)";
    } else {
        return "idoso(a)"
    }
}

function apresentar(pessoa) {
    return `Sou ${pessoa.nome}, tenho ${pessoa.idade} anos e sou um(a) ${determinarFaixaEtaria(pessoa.idade)} de ${pessoa.profissao}.`;
}

const pessoa = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}

console.log(apresentar(pessoa));