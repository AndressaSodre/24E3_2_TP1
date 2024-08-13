//Calcular Total de Itens: Crie uma função chamada calcularTotalItens que receba um array de objetos representando itens de um carrinho de compras, onde cada objeto tem uma propriedade quantidade e precoUnitario. A função deve retornar o valor total dos itens no carrinho.

function calcularTotalItens(itens) {
    return itens.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0);
  }
  
  const carrinho = [
    { nome: "Notebook", quantidade: 1, precoUnitario: 3000 },
    { nome: "Smartphone", quantidade: 2, precoUnitario: 2000 },
    { nome: "Tablet", quantidade: 3, precoUnitario: 1500 },
    { nome: "Smartwatch", quantidade: 1, precoUnitario: 800 }
  ];
  
  const total = calcularTotalItens(carrinho);
  
  console.log(total);
  