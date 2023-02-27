
let z = 5;

function soma(x, y) {
    return x + y + z; // funciona mas não é bom acessar variável fora do escopo da função.
}

console.log(soma(5, 3));