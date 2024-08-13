//Agrupar Produtos por Categoria: Desenvolva uma função chamada agruparPorCategoria que receba um array de objetos representando produtos, onde cada produto tem uma propriedade categoria e uma propriedade nome. A função deve retornar um objeto onde as chaves são as categorias e os valores são arrays contendo os nomes dos produtos pertencentes a cada categoria.

function agruparPorCategoria(produtos) {
    return produtos.reduce((resultado, produto) => {
      if (!resultado[produto.categoria]) {
        resultado[produto.categoria] = [];
      }
      resultado[produto.categoria].push(produto.nome);
      return resultado;
    }, {});
  }
  
  const produtos = [
    { nome: "Notebook", categoria: "Eletrônicos" },
    { nome: "Smartphone", categoria: "Eletrônicos" },
    { nome: "Tablet", categoria: "Eletrônicos" },
    { nome: "Smartwatch", categoria: "Acessórios" },
    { nome: "Cadeira", categoria: "Móveis" }
  ];
  
  const agrupamento = agruparPorCategoria(produtos);
  
  console.log(agrupamento);
  