import React from "react";
import { ProdutosContainer, ProdutosGrid, ProdutosHeader } from "./Styled";
import ProductCard from "./ProductCard";

export default class Product extends React.Component {
  render() {
    return (
      <ProdutosContainer>
        <ProdutosHeader>
          <p> Quantidade de Produtos: </p>
          <label>
            Ordenação:
            <select>
              <option>Valor</option>
              <option>Marca</option>
              <option>Mais Relevantes</option>
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
