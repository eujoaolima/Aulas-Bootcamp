// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

// Resposta:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;

for (let i=0; i < numeros.length;i++) {

soma = soma + numeros[i];
}

console.log(soma);

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

// Resposta:

const notas = [10, 8, 7, 9, 8.5];
let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;
console.log(media);

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

// Resposta:

let numeros1 = [5, 12, 16, 33, 8, 10, 6];
let maiorNumero = numeros1[0];
for (let i = 0; i < numeros1.length; i++) {
    if( numeros1[i] > maiorNumero){
        maiorNumero = numeros1[i];
    }
    
}
console.log(`O maior número do Array é: ${maiorNumero}`);


// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.

// Resposta:

let frutas =["maçã","pera", "banana", "abacaxi"]
for(let fruta of frutas){
    console.log(`A fruta${fruta} tem ${fruta.length} letras`)
}

// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

// Resposta:

let numerosAleatórios = Array(5);
for (let i = 0; i < numerosAleatórios.length; i++) {
    numerosAleatórios[i] = Math.floor(Math.random() * 100);
}

let numerosPares = [];

for (let i = 0; i < numerosAleatórios.length; i++) {
    if (numerosAleatórios[i] % 2 === 0) {
        numerosPares.push(numerosAleatórios[i]);
    }
}

console.log(somaArray(numerosPares));
function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)

// Resposta:

const musica = ["Let it be.mp4", "Another Love.wav"];

function verificarArquivo (musica) {

    if (musica.endsWith(".mp4")) {
        return true
    }
    else if (musica.endsWith(".wav")){
        return false 
    } else {
        console.log("Digite um arquivo válido");
    }
}

console.log(verificarArquivo("Another Love.wav"));

// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.

// Resposta: 

let cpf = ["056.985.990-23"]
console.log(cpf[0].slice(12,15));

// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB

let comida = "Batata";
function reverseString(comida) {
    let splitString = comida.split("").reverse().join("");
    console.log(splitString);
}

reverseString(comida);

// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]

let num = [1, 2, 3, 4, 5];

function reverseArray (num) {
    let splitArray = num.reverse();
    console.log(splitArray);
}

reverseArray(num);