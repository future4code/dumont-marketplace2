import React from "react";
import { FilterContainer, InputContainer, LabelContainer, FilterButton, SelectFilter } from "./Styled";

export default class Filter extends React.Component {
  render() {
    return (
      <FilterContainer>
        <h4>Filtro</h4>
        <p>Categorias</p>
        <SelectFilter>
          <option>Carros Populares</option>
          <option>Carros Esportivos</option>
          <option>Pickup</option>
          <option>Super Luxo</option>
          <option>Micro Van</option>
        </SelectFilter>
        <div>
          <LabelContainer>Valor mínimo:</LabelContainer>
          <InputContainer type="number" />
        </div>
        <div>
          <LabelContainer>Valor máximo:</LabelContainer>
          <InputContainer type="number" />
        </div>
        <div>
          <LabelContainer>Buscar produto:</LabelContainer>
          <InputContainer type="text" />
        </div>
        <FilterButton>Limpar Filtros</FilterButton>
      </FilterContainer>
    );
  }
}