const carros = [
    { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { nome: "arg", marca: "fiat", ano: "2021", cor: "preto" },
    { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
    { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
]

function ordenarCarros(array, atributo) {
    array.sort((a, b) => {
        return a[atributo].localeCompare(b[atributo]);
    });
}

ordenarCarros(carros, "cor");

console.log(carros);