/*

Na compra de um determinado produto, o 
cliente consegue um desconto de 10%
caso pague à vista.

Caso queira parcelar, a loja parcela em até
6x sem juros, mas sem desconto.

Imprima na tela uma mensagem
explicando para o cliente como ele tem
que pagar, incluindo o valor da parcela.

*/

const valorDaCompra = 100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    // a vista - com 10% de desconto
    const desconto = valorDaCompra * 0.1;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar ${valorAPagar}, pois a vista tem 10% de desconto`);
} else {
    // parcelado
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$${valorDaParcela}`);
}