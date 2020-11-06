import React from "react";
import { ProductsContainer, ProductsHeader } from "./Styled";
import ProductCard from "./ProductCard";

export default class Product extends React.Component {
  render() {
    return (
      <ProductsContainer>
        <ProductsHeader>
          <p> Quantidade de Produtos: </p>
          <label>
            Ordenação:
            <select>
              <option>Valor</option>
              <option>Marca</option>
              <option>Mais Relevantes</option>
            </select>
          </label>
        </ProductsHeader>
           <ProductCard />
      </ProductsContainer>
    );
  }
}
