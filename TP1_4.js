//Filtrar Produtos Acima de um Preço: Crie uma função chamada filtrarAcimaPreco que receba um array de objetos representando produtos, onde cada produto tem uma propriedade preco. A função deve retornar um novo array contendo apenas os produtos com preço maior que um valor especificado.

function filtrarAcimaPreco(produtos, valorMinimo) {
    return produtos.filter(produto => produto.preco > valorMinimo);
}

const produtos = [
    {produto: "Notebook", preco: 3000},
    {produto: "Smartphone", preco: 2000},
    {produto: "Tablet", preco: 1500},
    {produto: "Smartwatch", preco: 800},
]

const produtosAcimaPreco = filtrarAcimaPreco(produtos, 1000);

console.log(produtosAcimaPreco);