// Estruturas de Repetição (Loops)

// Para que um loop aconteça, você precisa:
/*
    1. Ter uma condição de parada
    2. Possuir um valor inicial
    3. Ter atualizações, sejam elas recorrentes ou não
    4. Um lugar que imprima essas atualizações
*/

// While (Enquanto)

// O conceito de While é "Enquanto X coisa estiver acontecendo, faça tal coisa"
//  while (condição) {
//      condição a se repetir
//  }


// JEITO ERRADO, JEITO PARA TRAVAR O SEU PC:
// let num = 0;

// while (true) {
    // console.log(num);
    //num++;
// }


// Jeito certo:

/* let num = 0;

while(num <= 10) {
    console.log(num);
    num++; // Colocar o contador em um loop é basicamente obrigatório, senão o console imprimirá infinitamente 0 número 0
}

console.log("Passou do limite: ", num);

console.log("----------------------");

num = 10;

while(num >= 0) {
    console.log(num);
    num--; // Colocar o contador em um loop é basicamente obrigatório, senão o console imprimirá infinitamente 0 número 0
}

console.log("Passou do limite: ", num);

console.log("----------------------");

// Para somar 1+2+3+4+5...+97+98+99+100

let number = 1;
let resultado = 0;

while (number <= 10) {
    resultado= resultado + number;
    resultado++;
}

console.log(resultado);
console.log("----------------------");

*/

// Estrutura de Repetição For (Para)

// O conceito de For é "Para X for igual a Y, e ele cumprir tal condição Z, faça tal coisa W"
//  for (inicialização; condição; atualização) {
//      condição a se repetir
//  }

// Exemplo de comando for:

// De 0 a 10
/*
for (i=0; i <= 10; i++) {
    console.log(i);
}

console.log("------------")

// De 10 a 0
for (i=10; i >= 0; i--) {
    console.log(i);
}

*/

// Soma 1+2+3+...+98+99+100

let soma = 0;
for (i=1;i<= 10; i++) {
    soma = soma + i;
}
console.log(soma);