// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.

// Exercício II: Crie uma função que converte celsius em fahrenheit
// C = (F - 32) / 1.8
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura 
// como parâmetro:
// Caso esteja abaixo de 10: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"


// Resposta Exercício 1

function calc (a, b, operador ){

    if (operador === "+") {
        operacao = a + operador + b;
        resultado = a + b;
        console.log(`O resultado de ${operacao} é ${resultado}`);
    } else if 
    (operador === "-") {
        operacao = a + operador + b;
        resultado = a - b;
        console.log(`O resultado de ${operacao} é ${resultado}`);
    } else if 
    (operador === "/") {
        operacao = a + operador + b;
        resultado = a / b;
        console.log(`O resultado de ${operacao} é ${resultado}`);
    } else if 
    (operador === "*") {
        operacao = a + operador + b;
        resultado = a * b;
        console.log(`O resultado de ${operacao} é ${resultado}`);
    } else {
        console.log("Não existe operador lógico para isso");
    }
}

calc(4,5, "+");

console.log("---------------");

// Resposta Exercício 2

function convert(celsius) {
    let fahrenheit = (celsius - 32) / 1.8;
    console.log(`${celsius} ºC em Fahreiheit são ${fahrenheit.toFixed(2)} F`);

}

convert(64);

function checkTemp (celsius) {
    if (celsius > 30) {
        console.log("Ta calor pra desgraça");
    } else if (celsius <= 30 && celsius >=16) {
        console.log("Agradável...");
    } else if (celsius <= 15 && celsius >=11) {
        console.log("Ta frio já");
    } else {
        console.log("TA MUITO FRIO");
    }
}

checkTemp(5);

console.log("---------------");

// Exercício 3: Transforme as funções abaixo em arrow
/* function criarNomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
} */

function contar(maximo) {
    for (let i = 1; i <= maximo; i++) {
    console.log(i);
    }
}
function imc(peso, altura) {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`);
    return calculo;
}

// Resposta Exercício 3

const CompleteName = (name,lastName) => {
    console.log(`Meu nome é ${name} ${lastName}!`);
}

const criarNomeCompleto = (nome, sobrenome) => { return nome + " " + sobrenome }; // Retorno Imediato
criarNomeCompleto("João", "Lima");


const count = (max) => {
    for (let i = 1; i <= max; i++) {
        console.log(i);
    }
}

let IMC;
const calcPeso = (weight, height) => {
    IMC = weight / (height * height);
    console.log(`O IMC é ${IMC.toFixed(2)}`);
    return IMC;
}

CompleteName("João", "Lima");
count(10);
calcPeso(70, 1.68);

