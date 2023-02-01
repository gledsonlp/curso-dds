/**
 * De acordo com o array de professores abaixo, com suas
 * respectivas stacks, faça o seguinte:
 * 
 * a) filtrar todos os professores de backend
 * b) filtrar todos os professores de frontend
 */

const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
]

const backends = professores.filter((professor) => {
    return professor.stack === 'backend';
});

const frontends = professores.filter((professor) => {
    return professor.stack === 'frontend';
});

console.log(backends);
console.log(frontends);