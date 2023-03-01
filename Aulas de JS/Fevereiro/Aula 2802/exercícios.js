// Exercicio I
// Crie um array de palavras, para cada palavra
// verifique se o tamanho é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.

// Resposta Exercício 1

let letters = ["Pamonha", "Xtudo", "Goiaba", "Ana", "Mouse"];

let conferirPalavras = letters.map((letter) => {
    if (letter.length > 5) {
        return "BATATA";
    } else {
        return letter.toUpperCase();
    }
});

console.log(conferirPalavras);