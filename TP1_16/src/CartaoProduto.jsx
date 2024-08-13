import React from 'react';
import './App.css';

function CartaoProduto({ produto }) {
  return (
    <div className="cartao-produto">
      <img src={produto.imagem} alt={produto.nome} />
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <p className="preco">{produto.preco}</p>
    </div>
  );
}

export default CartaoProduto;
