//Filtrar Produtos Disponíveis: Desenvolva uma função chamada filtrarDisponiveis que receba um array de objetos representando produtos, onde cada produto tem uma propriedade disponivel que é um booleano. A função deve retornar um novo array contendo apenas os produtos que estão disponíveis.

function filtrarDisponiveis(produtos) {
    return produtos.filter(produto => produto.disponivel);
    
  }
  
  const produtos = [
    {produto: "Notebook", disponivel: true},
    {produto: "Smartphone", disponivel: false},
    {produto: "Tablet", disponivel: true},
    {produto: "Smartwatch", disponivel: true},
  ];
  
  const produtosDisponiveis = filtrarDisponiveis(produtos);
  
  console.log(produtosDisponiveis);