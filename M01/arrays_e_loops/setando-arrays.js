// mesmo sendo uma constante, é possível alterar o 
// valor dos itens dentro do array
const nomeDeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];

const x = 3;
nomeDeEstudantes[0] = 'andreia';
nomeDeEstudantes[1] = 'andreia';
nomeDeEstudantes[2] = 'andreia';
nomeDeEstudantes[x] = 'andreia';

console.log(nomeDeEstudantes);