const pessoa = {
    nome: "José",
    idade: 30,
    profissao: "professor",
    determinarFaixaEtaria: function () {
        if (this.idade < 21) {
            return "jovem";
        } else if (this.idade < 66) {
            return "adulto(a)";
        } else {
            return "idoso(a)"
        }
    },
    apresentar: function () {
        console.log(`Sou ${this.nome}, tenho ${this.idade} anos e sou um(a) ${this.determinarFaixaEtaria()} de ${this.profissao}.`);
    }
}

pessoa.apresentar();
