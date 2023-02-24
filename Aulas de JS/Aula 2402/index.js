// Arrow function

// Arrow function é uma função com uma sntaxe mais curta
// São usadas quando em uma função normal precisaríamos escrever muitos códigos, então usaríamos a arrow function paradiminuir um pouco o texto e mudar um pouco o escopo


// Funções normais:

function hello() {
    console.log("Hellow World!");
}

hello();

console.log("---------------");

function calc(a, b) {
    console.log(`${a + b}`);
}

calc(2, 4);

console.log("---------------");

// Arrow functions:

const saudacoes = () => {
    console.log("hello, World!");
}

saudacoes();

console.log("---------------");

const calculator = (a, b) => {
    console.log(`O resultado de ${a} + ${b} é ${a + b}`);
    return a + b;
}

calculator(24, 56);

console.log("---------------");

// Strings

// Strings são cadeias de caracteres, caracterizadas por aspas simples, aspas duplas ou crases (no caso de interpolação)

let pet = "Kyra"; // Caracteres: K(0), y(1), r(2), a(3)
// No Javascript, as contagens de strings e arrays começam no zero
console.log(pet[3]); // Usando um colchete junto da variável podemos acessar apenas um caractere específico da string

console.log("---------------");

console.log(pet.length); // Retorna o tamanho total da string

console.log("---------------");

// Percorrendo a string do zero até length - 1

for (let i = 0; i < pet.length; i++) {
    console.log(pet[i]);
}

// Deixando todos os caracteres minúsculos

console.log(pet.toLowerCase());

console.log("---------------");

// Deixando todos os caracteres maiúsculos

console.log(pet.toUpperCase());

console.log("---------------");

// Verifica se a string termina com a palavra desejada

let batata = "batata.mp3"
console.log(batata.endsWith(".mp3"));

console.log("---------------");

// Verifica se a string começa com a palavra desejada

console.log(batata.startsWith(".mp3"));

console.log("---------------");

// Busca se uma frase inclui um trecho

let comida = "Arroz com Batata";

console.log(comida.includes("Batata"));

console.log("---------------");

// Busca a posição do caractere

console.log(comida.indexOf("B"));
console.log(comida.lastIndexOf("a")); // Busca a posição da direita para a esquerda
console.log(comida.indexOf("Y")); // Quando ele não encontra uma letra ou palavra, ele retorna -1
console.log(comida.indexOf("Batata")); // Ele retorna onde inicia a palavra

console.log("---------------");

// Ele substitui uma palavra por outra

console.log(comida.replace("Batata", "Feijão"));

console.log("---------------");

// Para cortar um ou vários caracteres

let palavra = "BAAAAAATAAAAAATAAAAAA"

console.log(palavra.slice("1"));
console.log(palavra.slice(1, 8));

console.log("---------------");
