/**
 * O método "Find" retorna o primeiro elemento encontrado.
 * Se for um objeto, retorna um objeto.
 * Se for uma string, retorna uma string.
 * Se for números, retorna o número.
 */

const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
];

const resultado = usuarios.find((usuario) => {
    return usuario.nome === 'joao';
});

console.log(resultado);