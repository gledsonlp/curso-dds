const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais = false;

// tem ingresso E 
// tem idade maior ou igual a censura OU estar com os pais

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada");
}