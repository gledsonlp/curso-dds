const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'vermelho' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' }
];

const buscarCarro = (marca, arrayDeCarros) => {
    const resultado = arrayDeCarros.find((carro) => {
        return carro.marca === marca;
    });
    console.log(resultado);
}

buscarCarro('ford', carros);

