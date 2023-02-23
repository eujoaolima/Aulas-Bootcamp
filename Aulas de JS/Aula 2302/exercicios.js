// Exercício I

// Declare uma função que recebe 3 notas e tire a média entre elas

function media() {
    let nota1 = 7;
    let nota2 = 8;
    let nota3 = 10;
    console.log(`A média do aluno é a nota ${((nota1 + nota2 + nota3) / 3).toFixed(2)}`);
}

media();

console.log("----------");


// Exercício II: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

// Resposta Exercício 2

function imc (altura, peso) {
    let IMC = peso / (altura ** 2);
    console.log(`Seu peso é ${peso} e sua altura é ${altura}, portanto o seu IMC é ${IMC.toFixed(2)}`);
}

imc(1.70, 80);

console.log("----------")

// Exercício III: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

// Resposta Exercício 3

function percent(num) {
    let resultado = num  * 100;
    console.log(`A porcentagem é ${resultado} %`);
}

percent(0.5);

console.log("----------");

// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

// Resposta Exercício 4

function number (num) {
    if (num >=0) {
        return !true
    } else {
        return !false
    }
}

console.log(number(-1));

console.log("----------");

// Exercício V: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

// Resposta Exercício 5

function convert (num) {
    let numOriginal = num;

    console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(numOriginal));

    console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num));
}

convert(45000000000);

console.log("----------");

// Exercícios VI: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.

// Resposta Exercício 6

function counter (num) {
    for (num = 0; num <= 10; num++) {
        console.log(num);
    }
}

counter(1);

console.log("----------");

// Exercícios VII: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.

// Resposta Exercício 7

function nomeCompleto (nome, sobrenome) {
    console.log(`Meu nome é ${nome} ${sobrenome}, prazer em te conhecer!`);
}

nomeCompleto("João", "Lima");

console.log("----------");

// Exercício VIII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI

// Resposta Exercício 8

function calculadoraPi (r) {
    const pi = 3.14;
    const area = pi * (r ** 2);
    console.log(`A área do círculo é de ${area} cm²`);
}

calculadoraPi(50);

console.log("----------");

// Exercícios IX: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

// Resposta Exercício 9

function area(areaCirculo) {
    if (areaCirculo >= 1 && areaCirculo <= 20) {
        console.log("Área de nível 1!");
    } else if (areaCirculo >= 21 && areaCirculo <= 40) {
        console.log("Área de nível 2!");
    } else {
        console.log("Diâmento inválido!");
    }
}

area(15);

console.log("----------");