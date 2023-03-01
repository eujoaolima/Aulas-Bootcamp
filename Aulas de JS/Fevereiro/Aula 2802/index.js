// Métodos forEach, map e filter

let numbers = [1, 2, 3];

function mostrarValor(valor) {
    console.log(valor);
}

for (let num of numbers) {
    mostrarValor(num); // para cada elemento da array ele executa o que está aqui dentro
}

// forEach
// Para cada elemento no array, executa a função:
numbers.forEach(mostrarValor);

console.log("---------------");

numbers.forEach((numbers) => {
    console.log(numbers);
});

console.log("---------------");

// Exercício: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.
let soma = 0;

numbers.forEach((numbers) => {
    soma += numbers;
});

console.log(`A soma é ${soma}`);

console.log("---------------");

let nomes = ["Pedro", "Paulo", "João", "Lucas"];
let nomesCaixaAlta = [];

// Transformando os nomes do array em Caixa Alta
nomes.forEach((nome) => {
    nomesCaixaAlta.push(nome.toUpperCase());
});

let nomesCaixaAlta2 = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomesCaixaAlta2);

console.log("---------------");

// Transformando os nomes do array em Caixa Baixa

let nomesCaixaBaixa = nomes.map((nome) =>{
    return nome.toLocaleLowerCase();
}); 
console.log(nomesCaixaBaixa);
console.log("---------------");

let  nomeAdiciona = nomes.map ((nome) =>{
    return nome + "!"
});

console.log(nomeAdiciona);
console.log("---------------");

let retornaNomeJ = nomes.map((nome) =>{
    if(nome === "João"){
        console.log("Tem João!");
    }
});

console.log("---------------");

let dados = [1,2,3,4,5];
let dadosPor100 = dados.map((dado)=>{
    return dado * 100;
});
console.log(dadosPor100);
console.log("---------------");

// Filter: filtra os elementos do array com base em numa condição aplica um teste em cada elemento e quem passar faz parte do novo array

let temps = [29, 5, 10, -4, 15, -20]; // Celsius
let tempsPositivas = temps.filter((temp) => {
  // aplicar esta função para item (testar)
  if (temp > 0) {
    return true; // t pode fazer parte do novo array
  } else {
    return false; // t não fará parte do novo array
  }
});

let tempsPositivas2 = temps.filter((temp) => temp > 0);

console.log(temps);
console.log(tempsPositivas);
console.log(tempsPositivas2);

// for (let t of temps) {
//   if (t > 0) {
//     tempsPositivas.push(t);
//   }
// }
// console.log(tempsPositivas);

// Resumo geral
// forEach = apenas percorre um por um
// filter = testa um por um e gera um novo array
// map = percorre um por um e transforma o elemento

console.log("----------");

// Map X forEach X Filter

/*

O método map cria um novo array com os resultados da aplicação de uma função a 
cada elemento do array original. A função de mapeamento é chamada para cada elemento 
e o valor retornado é adicionado ao novo array.

*/

// Exemplo: 

const array = [1, 2, 3, 4, 5];

const doubled = array.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]


/* 

O método forEach executa uma função para cada elemento do array original. 
Ele não cria um novo array, mas pode ser usado para realizar operações 
em cada elemento.

*/

// Por exemplo:

array.forEach(num => console.log(num * 2));


/*

O método filter cria um novo array com todos os elementos que passam 
por um teste implementado na função fornecida. A função de filtro é 
chamada para cada elemento e retorna um valor booleano. Se o valor 
for true, o elemento é adicionado ao novo array, caso contrário, 
é descartado.

*/

// Por exemplo:

const evenNumbers = array.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]

/*
    Em resumo, map é usado para transformar elementos do array em um 
    novo array, forEach é usado para executar uma função em cada elemento 
    do array, e filter é usado para selecionar elementos com base em 
    um critério.
*/
