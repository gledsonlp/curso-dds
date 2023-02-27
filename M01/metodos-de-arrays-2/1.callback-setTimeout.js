/** PRIMEIRA FORMA */
// const imprimirNome = (nome) => {
//     console.log(nome);
// }

// imprimirNome('Gledson');

// const imprimirGuido = () => {
//     console.log('Guido Cerqueira');
// }

/** SEGUNDA FORMA */
// setTimeout(imprimirGuido, 2000);

/** TERCEIRA FORMA */
// setTimeout(() => {
//     console.log('Cubos Academy')
// }, 5000)

/** QUARTA FORMA */
setTimeout(function () {
    console.log('Cubos Academy')
}, 5000)