//Cálculo do Preço Total: Crie uma função chamada calcularPrecoTotal que receba dois números como parâmetros: o preço de um produto e a quantidade comprada. A função deve retornar o preço total do produto com base na quantidade. 

const preco = parseFloat(prompt("Qual o preço do produto?"));
const quantidade = parseFloat(prompt("Qual a quantidade comprada?"));

function calcularPrecoTotal(preco, quantidade) {
  const precoTotal = preco * quantidade;
  return precoTotal;
}

const precoTotal = calcularPrecoTotal(preco, quantidade);

alert("O preço total é: " + precoTotal);