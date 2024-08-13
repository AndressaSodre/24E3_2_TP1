//Verificar Disponibilidade de Estoque: Desenvolva uma função chamada verificarEstoque que receba um array de objetos representando produtos, onde cada produto tem uma propriedade quantidadeEmEstoque. A função deve retornar um array contendo apenas os produtos que têm quantidade em estoque maior que zero.

function verificarEstoque(produtos) {
    return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
  }
  
  const produtos = [
    { nome: "Notebook", preco: 3000, quantidadeEmEstoque: 5 },
    { nome: "Smartphone", preco: 2000, quantidadeEmEstoque: 0 },
    { nome: "Tablet", preco: 1500, quantidadeEmEstoque: 10 },
    { nome: "Smartwatch", preco: 800, quantidadeEmEstoque: 2 },
    { nome: "Cadeira", preco: 400, quantidadeEmEstoque: 0 }
  ];
  
  const produtosEmEstoque = verificarEstoque(produtos);
  
  console.log(produtosEmEstoque);