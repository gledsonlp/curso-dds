//Exercício - Slice

//Quero obter apenas os dois dígitos
//do estado de uma cidade

const cidade = "São Paulo-SP";

let estado = cidade.slice(cidade.indexOf('-') + 1);

console.log(estado);