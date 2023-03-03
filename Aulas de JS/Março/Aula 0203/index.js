//Tópicos: Objetos Aninhados e Arrays de Objetos

//Objetos aninhados = objeto dentro de outro objeto

let pessoa = {
    nome: "Zeca Urubu",
    cpf: "0123.456.789-10",
    endereço: { // agrupar propriedades, sempre em chaves (que são usadas para criar objetos)
        cidade: "Goiania",
        estado: "GO",
        cep: "12345-123",
        rua: "Rua dos Bobos",
        numero: 000
    },
};

console.log(pessoa); // Retorna TODAS as propriedades do objeto
console.log("----------");
console.log(pessoa.endereço); // Retorna todas as propriedades de um objeto dentro de um objeto
console.log("----------");
console.log(pessoa.endereço.cep); // Vai retornar o CEP
console.log("----------");
pessoa.contato = {
    telefone: "(11) 94002-8922",
    email: "zeca.urubu@hotmail.com",
};
pessoa.objetivosProfissionais = ["CLT", "Home Office", "Desenvolvedor FullStack"];

pessoa.formaçao = [
    {nome: "Ensino médio", periodo: "2017~2019"},
    {nome: "Bacharel em Engenharia Mecânica", periodo: "2020~2024"},
    {nome: "Mestrado em Engenharia de Software", periodo: "2025~2027"},
]
console.log(pessoa.contato);

console.log("----------");

console.log(pessoa.objetivosProfissionais);

console.log("----------");

console.log(pessoa.formaçao[0].nome); // Vai pegar o nome da primeira formação do indivíduo, pois está selecionado o index zero

console.log("----------");


