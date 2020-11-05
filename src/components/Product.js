import React from "react";
import { ProdutsContainer, ProdutsGrid, ProdutsHeader } from "./Styled";
import ProductCard from "./ProductCard";

export default class Product extends React.Component {
  render() {
    return (
      <ProdutsContainer>
        <ProdutsHeader>
          <p> Quantidade de Produtos: </p>
          <label>
            Ordenação:
            <select>
              <option>Valor</option>
              <option>Marca</option>
              <option>Mais Relevantes</option>
            </select>
          </label>
        </ProdutsHeader>
        <ProdutsGrid>
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
        </ProdutsGrid>
      </ProdutsContainer>
    );
  }
}
