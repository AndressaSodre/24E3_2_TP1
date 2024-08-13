//Filtrar Produtos por Categoria: Desenvolva uma função chamada filtrarPorCategoria que receba um array de objetos representando produtos, onde cada produto tem uma propriedade categoria. A função deve retornar um novo array contendo apenas os produtos que pertencem a uma categoria especificada.

function filtrarPorCategoria(produtos, categoriaDesejada) {
    return produtos.filter(produto => produto.categoria === categoriaDesejada);
  }
  
  const produtos = [
    { nome: "Notebook", preco: 3000, categoria: "Eletrônicos" },
    { nome: "Smartphone", preco: 2000, categoria: "Eletrônicos" },
    { nome: "Tablet", preco: 1500, categoria: "Eletrônicos" },
    { nome: "Smartwatch", preco: 800, categoria: "Acessórios" },
    { nome: "Cadeira", preco: 400, categoria: "Móveis" }
  ];
  
  const produtosEletronicos = filtrarPorCategoria(produtos, "Eletrônicos");
  
  console.log(produtosEletronicos);