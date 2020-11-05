import React from "react";
import { ProdutosContainer, ProdutosGrid, ProdutosHeader } from "./Styled";
import ProductCard from "./ProductCard";
import CardProdutos from "./ProductCard";

export default class Product extends React.Component {
  render() {
    return (
      <ProdutosContainer>
        <ProdutosHeader>
          <p> Quantidade de Produtos: </p>
          <label>
            Ordenação:
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </ProdutosHeader>
        <ProdutosGrid>
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
        </ProdutosGrid>
      </ProdutosContainer>
    );
  }
}
