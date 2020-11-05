import React from 'react';
import { FilterContainer, InputContainer, LabelContainer } from "./Styled"

export default class Filter extends React.Component {
    render() {
        return(
            <FilterContainer>
            <div>
                <h4>Filtro</h4>
                <p>Categorias</p>
                <select>
                    <option>Carros Populares</option>
                    <option>Carros Esportivos</option>
                    <option>Pickup</option>
                    <option>Super Luxo</option>
                    <option>Micro Van</option>
                </select>
            </div>
            <div>
                    <LabelContainer>Valor mínimo:</LabelContainer>
                    <InputContainer 
                    type="number" 
                    />
                </div>
                <div>
                    <LabelContainer>Valor máximo:</LabelContainer>
                    <InputContainer 
                    type="number"
                    />
                </div>
                <div>
                    <LabelContainer>Buscar produto:</LabelContainer>
                    <InputContainer 
                    type="text" 
                    />
                </div>
            </FilterContainer>
        )
    }
}