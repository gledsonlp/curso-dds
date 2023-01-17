let idade = 38;
console.log(idade);

//camelCase
let alturaEmMetros = 1.75;
console.log(alturaEmMetros);

//string template
console.log(`Minha idade é ${idade} anos e minha altura é ${alturaEmMetros} metros`);

//a diferença de let (que veio depois) para var, é que ao utilizar var, ocorre o içamento dessas
//variáveis para o início, mesmo não sendo inicializadas, atribuindo o tipo undefined para elas e 
//dificultando a correção de erros. Preferir usar sempre o let.