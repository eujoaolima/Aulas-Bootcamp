// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Abaixo de 7 e maior ou igual a 5 = Reforço
//      Menor que 5 = Reprovação

// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!



// Resposta Exercício 1
    let nota1 = 2.1;
    let nota2 = 5.4;
    let nota3 = 9.8;
    let media = (nota1 + nota2 + nota3) / 3
    console.log(`A média dos alunos é de ${media.toFixed(2)}`);

    if (nota1 >=7 && nota1 <= 10) {
        console.log("O aluno 1 está aprovado :)");
    } else if (nota1 < 7 && nota1 >= 5) {
        console.log("O aluno 1 está de exame!");
    } else if (nota1 < 5) {
        console.log("O aluno 1 ficou de DP");
    }

    if (nota2 >=7 && nota2 <= 20) {
        console.log("O aluno 2 está Aprovado :)");
    } else if (nota2 < 7 && nota2 >= 5) {
        console.log("O aluno 2 está de exame!");
    } else if (nota1 < 5) {
        console.log("O aluno 2 ficou de DP");
    }

    if (nota3 >=7 && nota3 <= 30) {
        console.log("O aluno 3 está aprovado :)");
    } else if (nota3 < 7 && nota3 >= 5) {
        console.log("O aluno 3 está de exame!");
    } else if (nota1 < 5) {
        console.log("O aluno 3 ficou de DP");
    }

// Resposta Exercício 2
    let peso = 124;
    let altura = 1.84;
    let imc = peso / altura ** 2;

    if (imc < 18.5) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, sendo ele classificado como abaixo do peso normal`)
    } else if (imc > 18.5 && imc <24.9) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, sendo ele classificado como Peso Normal`)
    } else if (imc > 25 && imc <29.9) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, sendo ele classificado como Acima do Peso Ideal`)
    } else if (imc > 30 && imc <34.9) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, sendo ele classificado como Obesidade Classe I`)
    } else if (imc > 35 && imc <39.9) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, sendo ele classificado como Obesidade Classe II`)
    } else if (imc >= 40) {
        console.log(`Seu IMC é de ${imc.toFixed(2)}, sendo ele classificado como Obesidade Classe III`)
    }

// Resposta Exercício 3
    let a = 10;
    let b = 5;

    if (a > b) {
        console.log(`Como ${a} é maior que ${b}, logo o número A é maior que o número B!`)
    } else if (b > a) {
        console.log(`Como ${b} é maior que ${a}, logo o número B é maior que o número A!`)
    } else if (a == b) {
        console.log(`Como A vale ${a} e B vale ${b}, os números são iguais!`)
    }

    a = 8;
    b = 15;

    if (a > b) {
        console.log(`Como ${a} é maior que ${b}, logo o número A é maior que o número B!`)
    } else if (b > a) {
        console.log(`Como ${b} é maior que ${a}, logo o número B é maior que o número A!`)
    } else if (a == b) {
        console.log(`Como A vale ${a} e B vale ${b}, os números são iguais!`)
    }

    a = 20;
    b = 20;

    if (a > b) {
        console.log(`Como ${a} é maior que ${b}, logo o número A é maior que o número B!`)
    } else if (b > a) {
        console.log(`Como ${b} é maior que ${a}, logo o número B é maior que o número A!`)
    } else if (a == b) {
        console.log(`Como A vale ${a} e B vale ${b}, os números são iguais!`)
    }
