const pessoa = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}

if (pessoa.idade < 25) {
    console.log(`Sou ${pessoa.nome}, tenho ${pessoa.idade} anos e sou um(a) jovem de ${pessoa.profissao}.`);
} else if (pessoa.idade < 65) {
    console.log(`Sou ${pessoa.nome}, tenho ${pessoa.idade} anos e sou um(a) adulto(a) de ${pessoa.profissao}.`);
} else {
    console.log(`Sou ${pessoa.nome}, tenho ${pessoa.idade} anos e sou um(a) idoso(a) de ${pessoa.profissao}.`);
}

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "médico"
}

if (pessoa2.idade < 25) {
    console.log(`Sou ${pessoa2.nome}, tenho ${pessoa2.idade} anos e sou um(a) jovem de ${pessoa2.profissao}.`);
} else if (pessoa2.idade < 65) {
    console.log(`Sou ${pessoa2.nome}, tenho ${pessoa2.idade} anos e sou um(a) adulto(a) de ${pessoa2.profissao}.`);
} else {
    console.log(`Sou ${pessoa2.nome}, tenho ${pessoa2.idade} anos e sou um(a) idoso(a) de ${pessoa2.profissao}.`);
}


const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante"
}

if (pessoa.idade3 < 25) {
    console.log(`Sou ${pessoa3.nome}, tenho ${pessoa3.idade} anos e sou um(a) jovem de ${pessoa3.profissao}.`);
} else if (pessoa3.idade < 65) {
    console.log(`Sou ${pessoa3.nome}, tenho ${pessoa3.idade} anos e sou um(a) adulto(a) de ${pessoa3.profissao}.`);
} else {
    console.log(`Sou ${pessoa3.nome}, tenho ${pessoa3.idade} anos e sou um(a) idoso(a) de ${pessoa3.profissao}.`);
}
