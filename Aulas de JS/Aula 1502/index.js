// Estruturas Condicionais

/* Operadores lógicos: 
    NOT : ! -> inverte o valor lógico
    AND : && -> Todas as expressões precisam ser true para que a condição seja atendida
    OR : ||
*/

// Not
    let ligado = true;
    let desligado = !ligado;

    console.log("O carro está ligado?", ligado);
    console.log("O carro está desligado?", desligado);

/*  ligado = false;
    desligado = !ligado;

    console.log(ligado);
    console.log(desligado); */

// And
    let gasolinaTanque = 1;
    let naReserva = gasolinaTanque < 5;
    let podeAbastecer = ligado && naReserva;

    console.log("O carro pode abastecer?", podeAbastecer);

// OR
    let idade = 65;
    let podeDirigir = idade >= 18 || idade <= 59;
    console.log("A pessoa pode dirigir?", podeDirigir);

    // Exemplo 2 - And e Or
        let media = 8.5;
        let aprovado = media >= 7;
        let sabeIngles = false;
        let contratado = aprovado && sabeIngles;
        console.log("A pessoa está empregada?", contratado);
        console.log("A pessoa sabe inglês ou foi aprovada na matéria?", aprovado || sabeIngles);

// Estruturas Condicionais
    if (contratado == true) {
        console.log("Contratado!")
    } 
    else {
        console.log("O candidato não foi aprovado no processo seletivo :( ")
    }

    let nota = 7.01;
    if (nota >= 9) { // Se (tal condição acontecer), faça:
        console.log("Aprovado! Mandou bem demais");
    } else if (nota >= 7 && nota <=8.9) { // Caso a primeira condição não ocorra, se (nova condição acontecer), faça:
        console.log("Aprovado!");
    }
    else { // Se nenhuma condição acontecer:
        console.log("Reprovado :( ")
    }

