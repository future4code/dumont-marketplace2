import React from "react";
import { FilterContainer, InputContainer, LabelContainer, FilterButton, SelectFilter } from "./Styled";
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const myTheme = createMuiTheme ({
  pallete: {
    primary: { 
      main: "#FF5C5C"
    },
    secondary: { 
      main: "#E0E0E0"
    }
  },
  spacing: 20,
})

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
          <InputContainer 
            type = "number" 
            value = {this.props.minFilter}
          />
        </div>
        <div>
          <LabelContainer>Valor máximo:</LabelContainer>
          <InputContainer type="number" />
        </div>
        <div>
          <LabelContainer>Buscar produto:</LabelContainer>
          <InputContainer type="text" />
        </div>
            <MuiThemeProvider theme = {myTheme}>
              <Button variant = "contained" color = "primary">Limpar Filtros</Button>
            </MuiThemeProvider>
      </FilterContainer>
    );
  }
}
