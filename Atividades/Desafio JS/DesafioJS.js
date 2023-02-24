// Exercício 1

class ProductItem {
    constructor (name, price, discount, validDiscount, finalPrice) {
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.validDiscount = validDiscount;
        this.finalPrice = finalPrice;
    }
}

const product = new ProductItem(
    "Vestido LaCroché",
    499.99,
    0.6,
    true,
    null,
);

let average = product.discount * 100;

console.log(`Dados do produto:
- Nome: ${product.name};
- Preço: R$ ${product.price};
- Possui desconto? ${product.validDiscount};
- De: ${average.toFixed(2)}% `);

// Exercício 2

    if (product.validDiscount === true) {
        product.finalPrice = product.price * (1 - product.discount);
        console.log(`O valor do produto com desconto é de R$ ${product.finalPrice.toFixed(2)}`);
    }

// Exercício 3
    else {
        product.finalPrice = product.price;
        console.log(`O valor final do produto sem desconto é de R$ ${product.finalPrice.toFixed(2)}`);
    }

console.log("------------------------------------");

// Exercício 4

    if (product.finalPrice >= 1000) {
        product.newFinalPrice = product.finalPriceWithDiscount - 50;
        console.log(`Como o produto custa R$ ${product.finalPriceWithDiscount.toFixed(2)}, ele passará a custar R$ ${product.newFinalPrice.toFixed(2)}!`);
        
    }

    else {
        product.newFinalPrice = product.finalPrice;
        console.log(`Como o produto custa R$ ${product.newFinalPrice.toFixed(2)}, ele não terá mais descontos!`);
    }

console.log("------------------------------------");

// Exercício 5

const cart = [
    10,
    2, 
    1, 
    30, 
    5
];

// Exercício 6
const price = [];

for (let client = 0; client < cart.length; client++) {
    /* 
        $ = P * Pr

        Sendo:
        $ = Valor final
        P = Quantidade de pedidos de cada cliente
        Pr = Preço final do produto
    */
    sellPrice = cart[client] * product.finalPrice; 
    price.push(sellPrice);
    console.log(`O cliente ${client + 1} deverá pagar R$ ${sellPrice.toFixed(2)}`);

    // Exercício 7

    /* 
        Lt =  SF * Lp

        Sendo:
        Lt = Lucro Total
        SF = Somatória do faturamento
        Lp = Lucro do produto (0.4)
    */
    let profit = sellPrice * 0.4;
    console.log(`O faturamento total do cliente ${client + 1} nos gerou um lucro de R$ ${profit.toFixed(2)}`);
    console.log("------------------------------------");
}