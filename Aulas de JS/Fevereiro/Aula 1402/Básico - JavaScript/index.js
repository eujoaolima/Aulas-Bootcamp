// Variáveis

/* 
    var --> uma variável que pode ter muitas alterações de valores e atribuições durante a operação.
    let --> Um meio termo, ela ter poucas alterações de valores e atribuições durante a operação. É muito usado em escopos locais.
    const --> Estabelece um valor constante para uma variável. Uma vez estabelecido, o valor não é mais alterado.
*/

// O navegador entende somente linguagem Javascript, então para conversar com o console do DevTool 
// precisamos conversar via JS.

// Código mais básico de todos:

    console.log("Hello World!");

// Atribuição é você literalmente atribuir um valor para uma variável, por exemplo:

    let meuCelular = "Samsung Pocket";

// Para imprimir o valor dessa variável, basta executar a variável no console.log:

    console.log(meuCelular);

// Concatenação: Mesclar textos com variáveis

    let comida = "X-tudo";
        console.log("Meu lanche favorito é o", comida);

// Tipos: o JS é super flexível quanto às tipagens. Os tipos são:
/*
    - String: Textos para serem identificados usamos as aspas;
        Ex: console.log("Isso é uma string");
    - Number: Números, sejam eles inteiros ou reais
        Ex: 
            let X = 5;
            console.log(X);
    - Booleanos: São definidos como Verdadeiro ou Falso
        Ex: 
            var X = 2;
            if (X > 5) {
                console.log(true);
            }
            else {
                console.log(false);
            }
    - Null / Undefined: São variáveis que não tiveram variáveis declaradas (No caso de Undefined) ou 
    são variáveis que o próprio valor foi definido como sem valor (No caso de nulo)
        Ex:
            let garegem; (Valor: Undefined)
            const Y = null (Valor: Null)
*/

// Operadores: O padrão é parecida com excel, mudando somente na hora de mostrar o resto de uma divisão
        // Soma:
            let A = 2;
            let B = 5;
            console.log(A + B);
        // Subtração:
            let C = 6;
            let D = 5;
            console.log(C - D)
        // Multiplicação:
            let E = 4;
            let F = 7;
            console.log(E * F);
        // Divisão:
            let G = 20;
            let H = 4;
            console.log(G / H);
        // Resto da divisão:
            let I = 43;
            let J = 2;
            console.log(I % J);

// Template Strings: é uma nova sintaxe onde você pode colocar uma variável dentro de uma string.
        // Ex:
            let real = 100;
            console.log(`Seu valor na conta do banco é de R$ ${real}`);

// Incremento e decremento junto da concatenação
            let i = 0
            console.log(i);
            i++ // i++ é o mesmo que escrever i = i + 1
            console.log(i);
            i-- // i-- é o mesmo que escrever i = i - 1
            console.log(i); 

// Operadores relacionais
/* 
        > : Maior que
        < : Menor que
        = : Operador de atribuição
        >= : Maior ou igual a
        <= : Menor ou igual a
        == : Igual ou equivalente a
        === : O valor e o tipo são equivalentes a
        != : Diferente de
*/
