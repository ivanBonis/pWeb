
var nome = "João";
console.log(nome);

nome = "Maria";
console.log(name);

var idade = 30;
console.log(idade);

idade = 25;
console.log(idade);

const PI = 3.14;
console.log(PI); 


let frase = "Olá, mundo!";
console.log(typeof frase); 
let numero = 10;
console.log(typeof numero);
let verdadeiro = true;
console.log(typeof verdadeiro); 
let lista = ["banana", "maçã", "laranja"];
console.log(typeof lista);
let pessoa = { nome: "João", idade: 20 };
console.log(typeof pessoa);

let pessoa2 = pessoa; 
console.log("Pessoa 2:", pessoa2);
pessoa2.nome = "Andre";
pessoa2["nome"] = "Maria";





let nulo = null;
console.log(typeof nulo); 
let indefinido;
console.log(typeof indefinido); 
let cidade = "Leiria";
console.log("Cidade:", cidade);


try {
  const GRAVIDADE = 9.8;
  console.log("Gravidade:", GRAVIDADE);
  GRAVIDADE = 10; 
} catch (erro) {
  console.error("Erro ao reatribuir const:", erro.message);
}

let misturado = ["texto", 42, true, null, undefined, { chave: "valor" }];
misturado.forEach(function(elemento, indice) {
  console.log("Elemento " + indice + ":", elemento, "| Tipo:", typeof elemento);
});

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  eletrico: false,
  cor: "azul"
};

for (let propriedade in carro) {
  console.log(propriedade + ": " + carro[propriedade]);
}