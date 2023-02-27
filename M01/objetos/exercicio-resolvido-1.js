const pessoa = {
    nome: "Gledson",
    idade: 38,
    altura: 1.75,
    temCNH: true,
    apelidos: ['Neno']
}
let strPossuiCNH = (pessoa.temCNH) ? 'possui CNH' : 'não possui CNH';

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${strPossuiCNH} e os seguintes apelidos:`);

for (let apelido of pessoa.apelidos) {
    console.log("- ", apelido);
}