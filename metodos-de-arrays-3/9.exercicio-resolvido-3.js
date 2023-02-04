/**
 * Dado o array de usuários abaixo, utilize o reduce para filtrar
 * o usuário que possui a maior idade dentre os elementos do array
 * e retorne o objeto completo com os dados do usuário encontrado.
 */

const usuarios = [
    { id: 11, nome: 'João', idade: 23 },
    { id: 2, nome: 'Maria', idade: 18 },
    { id: 4, nome: 'Ana', idade: 30 },
    { id: 1, nome: 'Rodrigo', idade: 17 },
    { id: 123, nome: 'Rodrigo', idade: 17 }
]

const maiorIdade = usuarios.reduce((acumulador, elementoAtual) => {
    let maior = acumulador;

    if (elementoAtual.idade > maior.idade) {
        maior = elementoAtual;
    }

    return maior;
});

console.log(maiorIdade);