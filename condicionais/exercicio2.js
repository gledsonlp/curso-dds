/*

N questão anterior, modifique o código
para permitir que o cliente possa dividir a
compra em até 12x. Porém, entre 7x e 12x
será aplicada uma taxa de juros de 1% ao
mês. Ou seja, antes de calcular o valor da
parcela é preciso calcular o novo
montante a pagar de acordo com a 
seguinte fórmula:

M = C.(1+i)ˆn

*/

const valorDaCompra = 100;
const numeroDeParcelas = 7;

if (numeroDeParcelas === 1) {
    // a vista - com 10% de desconto
    const desconto = valorDaCompra * 0.1;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar ${valorAPagar}, pois a vista tem 10% de desconto`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // parcelado
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros de R$${valorDaParcela}`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //parcelado com juros
    const valorAPagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros} devido a incidência de juros.`);
} else {
    console.log("Número de parcelas inválidos")
}