//Calcular Média de Avaliações: Desenvolva uma função chamada calcularMediaAvaliacoes que receba um array de números representando avaliações de um produto e retorne a média das avaliações. Utilize os métodos reduce e length para calcular a média.

function calcularMediaAvaliacoes(avaliacoes) {
    const soma = avaliacoes.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const media = soma / avaliacoes.length;
    return media;
  }
  
  const avaliacoes = [5, 4, 3, 2, 1];
  const media = calcularMediaAvaliacoes(avaliacoes);
  console.log(media);