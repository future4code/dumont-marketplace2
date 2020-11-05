import React from 'react';
import { FilterContainer, InputContainer } from "./Styled"

export default class Filter extends React.Component {
    render() {
        return(
            <FilterContainer>
            <p>Filtros</p>
            <div>
                    <InputContainer>Valor mínimo:</InputContainer>
                    <input 
                    type="number" 
                    />
                </div>
                <div>
                    <InputContainer>Valor máximo:</InputContainer>
                    <input 
                    type="number"
                    />
                </div>
                <div>
                    <InputContainer>Buscar produto:</InputContainer>
                    <input 
                    type="text" 
                    />
                </div>
            </FilterContainer>
        )
    }
}