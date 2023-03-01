// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

// Resposta Exercício 1

let novoSaldo;

let account = {
    codigo: 00001,
    saldo: 100,
    cpf: "999.999.999-99",
    nome: "João Lima",
    saque(valor) {
        this.saldo -= valor;
        console.log(`Você realizou um saque de R$ ${valor}, seu saldo agora é de R$ ${this.saldo}`);
    },
    deposito(valor) {
        this.saldo += valor;
        console.log(`Você realizou um depósito de R$ ${valor}, seu saldo agora é de R$ ${this.saldo}`);
    },
}

account.deposito(1150);
console.log("Seu saldo agora é de R$", account.saldo)
account.saque(50);

console.log("------------------------------");

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

// Resposta Exercício 2

let produto = {
    nome: "Água Lindoia",
    descricao: "Água Lindoia sem gás, 250ml",
    quantidade: 1,
    precoOriginal: 2.97,
    desconto: 0.53,
    calcularPrecoDesconto() {
        console.log("O desconto é de R$", this.desconto);
    },
    apresentacao() {
        console.log(produto);
    },
    comprar(total) {
        let valorFinal = (this.precoOriginal - this.desconto) * total;
        console.log(`O valor final do produto é de R$ ${valorFinal.toFixed(2)}`);
    }
}

produto.calcularPrecoDesconto();
produto.apresentacao();
produto.comprar(5);

console.log("------------------------------");