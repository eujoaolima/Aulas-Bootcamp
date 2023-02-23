// Funções

/* Função é uma estrutura do JS que nos permite diminuir repetições de 
código e deixar nosso código mais manuseável e limpo */

// Exemplo 1

function Batata () {
    console.log("Hello, Batata!");
}

Batata();

console.log("-------------------");

// Exemplo 2

function Cenoura () {
    let a = 5;
    let b = 8;
    console.log(`O produto da multiplicação é de ${a * b}`);
}

Cenoura();

console.log("-------------------");

// Exemplo 3

let c = 3;
let d = 8;

function Rabanete () {
    console.log(`A soma é de ${c * d}`)
}

Rabanete();

console.log("-------------------");

// Exemplo 4

let e = 5;
let f = 3;

function Goiaba () {
    console.log(`A soma é de ${e * f}`)
}

Goiaba();

e = 2;
f = 15;

Goiaba();

console.log("-------------------");

// Parâmetros

/* Parâmetros são formas de dar entradas em informações que a função precisa executar. No mais, são informações dinâmicas */

// Exemplo 5

function Arroz (a, b, c, d, e, f, g, h, i) { // E quantas outras variáveis você quiser
    console.log(`A soma é de ${a} + ${b} é igual a ${a + b}!`);
    console.log(`A soma é de ${c} + ${d} é igual a ${c + d}!`);
    console.log(`A soma é de ${e} + ${f} é igual a ${e + f}!`);
    console.log(`A soma é de ${g} + ${h} + ${i} é igual a ${g + h + i}!`);
}

Arroz(20, 80, 10, 50, 30, 70, 10, 90, 60);

console.log("-------------------");

// Exemplo 6

let num1 = 4;
let num2 = 2;
let num3 = 6;
let num4 = 4;
let num5 = 2;
let num6 = 6;
let num7 = 4;
let num8 = 2;
let num9 = 6;

Arroz(num1, num2, num3, num4, num5, num6, num7, num8, num9);

console.log("-------------------");

// Retornos

// Função ENTRADA(parâmetro) -> PROCESSAMENTO(lógica) -> SAÍDA(retorno)
// y = f(x)

// f = função
// x = parâmetro
// y = resultado/retorno

// Exemplo 7

let resultado;

function calculate (num1, num2, num3) {
    resultado = (num1+ num2+ num3) / 3;

    return resultado;
}

let medPort = calculate(6, 8, 9);
let medIng = calculate(10, 7, 9);
let medEsp = calculate(9, 9, 10);

console.log(`Português: ${medPort.toFixed(2)}`);
console.log(`Inglês: ${medIng.toFixed(2)}`);
console.log(`Espanhol: ${medEsp.toFixed(2)}`);

console.log("-------------------");

// Exemplo 8

function Aprovado (n1, n2, n3) {
    let resultado = calculate(n1, n2, n3);

    if (resultado >= 7 && resultado <= 10) {
        console.log("Aprovado");
        return "Aprovado";
    } else if (resultado >= 5 && resultado <= 6.75) {
        console.log("Exame");
        return "Exame";
    } else {
        console.log("Reprovado");
        return "Reprovado";
    }
}

Aprovado(7, 7, 7);

console.log("-------------------");

// Exemplo 8

let statusAluno = Aprovado(5, 5, 5);
console.log("-------------------");
console.log(statusAluno); /* Aqui a variável só vai mostrar uma resposta baseada no que tiver escrito após "return", podendo ser um texto, um booleano, um número, outra variável...*/





