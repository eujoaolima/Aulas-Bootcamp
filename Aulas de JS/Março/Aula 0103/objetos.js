// Objetos

// Objetos = servem para estruturar dados
// - propriedades (características)
// - métodos (ações)

let pet = {
    nome: "Kyra",
    idade: 2,
    peso: 4,
    especie: "Cachorro",
}; // As chaves indicam que estou declarando um objeto

console.log(pet);

console.log("----------");

let pet2 = {
    nome: "Jeffão",
    idade: 5,
    peso: 4.5,
    especie: "Cachorro",
    comidaFavorita:  "Bisteca",
};

console.log(pet2);

console.log("----------");

// Tip: crie um objeto "pet3" com seu pet e coloque uma 
// nova propriedade: comida favorita

let pet3 = {
    nome: "Garfield",
    idade: 6,
    peso: 8.5,
    especie: "Gato",
    comidaFavorita:  "Lasanha",
};

console.log(pet3);

console.log("----------");

// Para acessar uma propriedade específica do objeto, basta escrever a variàvel + atribuição

console.log(pet.nome);

console.log("----------");

console.log(pet2.peso);

console.log("----------");

console.log(pet3.idade);

console.log("----------");

// Se você pedir para o console imprimir uma atribuição que não existe, ele retorna undefined

console.log(pet.coleira);

console.log("----------");

// Forma alternativa de acessar uma propriedade específica do objeto:

console.log(pet["nome"]); // Equivalente a pet.nome

console.log("----------");

// Para alterar a propriedade de um objeto, basta fazer igual com variáveis comuns:

pet.nome = "Alfredo";

console.log("O novo nome do pet é", pet.nome); // O nome do pet agora é Alfredo

console.log("----------");

pet.peso = pet.peso + 3;

console.log("O novo peso do pet é", pet.peso);

console.log("----------");

// Adicionando novas atribuições aos objetos

pet.cor = "Marrom";

console.log(pet.cor) // Agora, ele identifica a nova atribuição

console.log("----------");

// Tip: altere as informações do seu pet usando uma das sintaxes acima
// adicione novas propriedades ao seu pet

pet3.acessorio = "Coleira";
pet3.cor = "Laranja";
pet3.amigos = "John";

console.log(pet3);


