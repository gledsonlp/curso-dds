console.log(soma(5, 2));

/** declaração tradicional **/
// faz o hoisting (içamento ou puxar para cima)
// function soma(x, y) {
//     //código
//     const resultado = x + y;
//     return resultado;
// }

/** declaração com arrow-function **/
// NÃO faz o hoisting (içamento ou puxar para cima)
const soma = (x, y) => {
    //código
    const resultado = x + y;
    return resultado;
}