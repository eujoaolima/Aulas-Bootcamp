// Arrays: Indexaão, loops e métodos úteis

// Arrays, ou arranjos, são estruturas podem armazenar múltiplos dados, como uma lista de dados.

// Index: Indica a posição do elemento no array, como um endereço.

// Para buscar a posição de um item num array, é necessário colocar o valor da ordem dele - 1

// Exemplo

const data = [
    1,
    2,
    3,
    4,
    5,
    6,
];


// Aqui temos uma lista com 6 elementos, e caso eu queira acessar o número 5, eu preciso buscar pelo item 4 na array, porque a contagem de posições começa no zero

console.log(data.length, "elementos"); // Mostra que temos 6 elementos
console.log("O elemento a ser chamado pela array é o", data[4]); // Mostra o número 5

console.log("----------");

// Usando outro exemplo, que deixa as coisas mais claras

const emojis = ["🍟", "😊", "🚲", "🍎", "✈️", "✔️"];

console.log(emojis.length, "elementos"); // Mostra que temos 6 elementos
console.log("O elemento a ser chamado pela array é o", emojis[1]); // Mostra o elemento 2, ou seja, o sorriso

console.log("----------");

// É possível alterara os valores de um array se você definir a constante como let

let numbers = [5, 10, 15, 20, 25];
console.log(numbers);
numbers[3] = 50; // Altera a posição 3 (no caso, o número 20) para 50
console.log(numbers);
numbers[3]++; // Soma +1 na posição 3, sendo assim o número final igual a 51
console.log(numbers);
console.log("----------");

// É possível percorrer um array (que nada mais é do que ir do primeiro ao último elemento)
console.log(numbers.length);

console.log("----------");

// Para percorrer um array de maneira direta, usa-se o for:
for (let i = 0; i < data.length; i++) {
    console.log("O index", data[i], "é o", emojis[i]);
}

console.log("----------");

// for-of

let nomes = ["João", "Pedro", "Mariana", "Jurandir"];

for (let nome of nomes) { // A variável nome possui um elemento diferente a cada laço do meu loop
    console.log(nome);
}

console.log("----------");

let notas = [7, 8.5, 9, 5];

for (let nota of notas) {
    console.log(nota);
}

console.log("----------");

for (let i = 0; i < notas.length; i++) {
    notas[i]++;
}

console.log(notas);

console.log("----------");

// Inserir e remover valores aos arrays

let array = []; // Este Array está vazio, possui zero informações
console.log(array.length);

console.log("----------");

array.push("Smart batata"); // O método push adiciona uma propriedade ao array
console.log(array);
console.log("O tamanho da array agora é de", array.length);

console.log("----------");

array.push("Batata suprema");
console.log(array);
console.log("O tamanho da array agora é de", array.length);

console.log("----------");

array.push("Batata assada");
console.log(array);
console.log("O tamanho da array agora é de", array.length);

console.log("----------");

array.pop(); // O método pop remove uma propriedade do array
console.log(array);
console.log("O tamanho da array agora é de", array.length);
console.log("----------");

array.pop();
console.log(array);
console.log("O tamanho da array agora é de", array.length);
console.log("----------");