// Métodos

let pet = {
    nome: 'Romeu',
    idade: 8,
    especie: 'Cachorro',
    peso: 4.5,
    dormir() {
        console.log("A mimir...");
    }, // dormir() é um método, que é basicamente uma função dentro de um objeto
    comer(comida) {
        console.log(`O ${pet.nome} come ${comida}`)
    },
    brincar(brincar) {
        console.log(`O ${pet.nome} está brincando de ${brincar}`);
    },
}
pet.dormir();
pet.comer("ração");

console.log("----------");

// Tip: crie no objeto pet o método brincar e coloque uma mensagem
// do console.log

pet.brincar("pega pega");

console.log("----------");

let pessoa  = {
    nome: "João",
    sobrenome:"Lima",
    idade: 20,
    cpf: "707.070.707-70",
    nacionalidade: "Brasileiro",
    dizerOi () {
        console.log(`Oi ${pessoa2.nome}, meu nome é ${pessoa.nome}`)
    },
    dizerOi2() {
        console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.nacionalidade.toLowerCase()}`);
    },
    envelhecer() {
        this.idade++;
        console.log(`Hoje ${this.nome} está completando ${this.idade} anos!`);
    },
    cuidarPet(pet) {
        console.log(`${this.nome} está cuidando do ${pet.especie.toLowerCase()} ${pet.nome}`)
        pet.comer("Batata");
        pet.peso = pet.peso + 0.2;
    }
}

let pessoa2 = {
    nome: "Lucas",
    sobrenome:"Alberto",
    idade: 32,
    cpf: "606.060.606-60",
    nacionalidade: "Brasileiro",
    dizerOi () {
        console.log(`Oi ${pessoa.nome}, meu nome é ${this.nome}`); // O "this" é uma forma de representar o dono da função
    },
}

pessoa.dizerOi();

console.log("----------");

pessoa2.dizerOi();

console.log("----------");

// Tip: Melhore o método de dizerOi
// Adicione a mensagem neste formato:
// "Oi, meu nome é João, tenho 25 anos e sou brasileiro"

pessoa.dizerOi2();

console.log("----------");

pessoa.envelhecer();

console.log("----------");

pessoa.cuidarPet(pet);

console.log("----------");

console.log(pet.peso); // Como foi alterado o peso do pet dentro da função cuidarPet, ele ganhará peso

console.log("----------");