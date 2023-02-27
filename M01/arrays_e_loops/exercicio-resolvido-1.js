// cria lista com 5 países
const nomesDePaises = ['Brasil', 'Argentina', 'Uruguai', 'Paraguai', 'Chile'];

// adicione um país ao fim da lista
nomesDePaises.push('Peru');
console.log(nomesDePaises);

// remova um país do fim da lista
nomesDePaises.pop();
console.log(nomesDePaises);

// adicione um país no ínicio da lista
nomesDePaises.unshift('Colômbia');
console.log(nomesDePaises);

// remova um país do ínicio da lista
nomesDePaises.shift();
console.log(nomesDePaises);

// imprima o último país da lista na tela
console.log(nomesDePaises[nomesDePaises.length - 1]);

// imprima o segundo país da lista na tela
console.log(nomesDePaises[1]);

// imprima o país de índice 2 na tela
console.log(nomesDePaises[2]);