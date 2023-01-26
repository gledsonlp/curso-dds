const ultimos4dig = '2345';

// exibe apenas os últimos 4 dígitos do número de cartão de crédito
const numCartao = ultimos4dig.padStart(19, '**** ');
console.log(numCartao);