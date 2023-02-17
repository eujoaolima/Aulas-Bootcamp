// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 500 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 250 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

// Resposta Exercício 1

let idade = 20;
let dinheiro = 50;
let saldoFinal = dinheiro - 20;

if (idade >= 18 && dinheiro >= 20) {
    console.log(`Você pode comprar corote, agora o seu saldo é de R$ ${saldoFinal}`);
} else if (idade < 18 && dinheiro >= 20){
    console.log("Você é de menor e de quer comprar bebida? Ta barrado");
} else if (idade >= 18 && dinheiro < 20) {
    console.log("Você não tem dinheiro suficiente para finalizar a compra");
}

console.log("-------------------!!-------------------");

// Resposta Exercício 2

let salario = 400;
let novoSalario;
if (salario < 500) {
    novoSalario = salario + 500;
    console.log(`Seu novo salário é de R$ ${novoSalario}!`);
} else if (salario >= 500 && salario <= 1000) {
    novoSalario = salario + 250;
    console.log(`Seu novo salário é de R$ ${novoSalario}!`);
} 
else {
    console.log("Você não se encaixou para o bônus salarial")
}

console.log("-------------------!!-------------------");

// Resposta Exercício 3

let dia = "2";
switch(dia){
    case "1":
        console.log("Hoje é Domingo!");
    break

    case "2":
        console.log("Hoje é Segunda-feira!");
    break

    case "3":
        console.log("Hoje é Terça-feira!");
    break

    case "4":
        console.log("Hoje é Quarta-feira!");
    break

    case "5":
        console.log("Hoje é Quinta-feira!");
    break

    case "6":
        console.log("Hoje é Sexta-feira!");
    break

    case "7":
        console.log("Hoje é Sábado!");
    break

    default:
        console.log("Você não selecionou um número")
}

console.log("-------------------!!-------------------");

// Resposta Exercício 4
    let comida = "batata";

    switch(comida) {
        case  "batata":
            console.log("Humm, adoro");
        break

        case  "carne":
            console.log("Humm, adoro");
        break

        case  "chocolate":
            console.log("Humm, adoro");
        break

        case  "pizza":
            console.log("As vezes");
        break

        case  "sanduíche":
            console.log("As vezes");
        break

        default:
            console.log("Quero não!");
    }

console.log("-------------------!!-------------------");

// Resposta Exercício 5

    let num = 10;

    if (num % 2 === 0) {
        console.log("É par");
    }
    else {
        console.log("É ímpar")
    }