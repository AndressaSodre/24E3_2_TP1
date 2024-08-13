//Encontrar um Produto por Nome: Desenvolva uma função chamada encontrarProdutoPorNome que receba um array de objetos representando produtos, onde cada produto tem uma propriedade nome. A função deve retornar o primeiro produto que tenha o nome especificado. Utilize o método find para localizar o produto. Teste a função com um array de produtos e um nome de produto.

function encontrarProdutoPorNome(produtos) {
    return produtos.find(produto => produto.nome === nomeProcurado);
}

const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Smartphone", preco: 2000 },
  { nome: "Tablet", preco: 1500 },
  { nome: "Smartwatch", preco: 800 }
];

const produtoEncontrado = encontrarProdutoPorNome(produtos, "Tablet");

console.log(produtoEncontrado);
