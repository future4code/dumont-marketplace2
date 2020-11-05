import React from 'react';
import { FilterContainer, InputContainer, LabelContainer } from "./Styled"

export default class Filter extends React.Component {
    render() {
        return(
            <FilterContainer>
            <p>Filtros</p>
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