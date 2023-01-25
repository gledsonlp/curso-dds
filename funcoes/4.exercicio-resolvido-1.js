const pessoaObj = {
    nome: "José",
    idade: 32,
    profissao: "Dev",
    altura: 1.65
};

function apresentar(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
}

apresentar(pessoaObj);