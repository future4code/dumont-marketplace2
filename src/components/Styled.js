import React from "react";
import styled from "styled-components";

export const AppContainer = styled.div`
    border: 1px solid red;
    max-width: 100%;
    padding: 10px;
`
export const MenuContainer = styled.div`
    border: 1px solid;
    display: flex;
    justify-content: space-between;
`

export const ProdutosContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`
export const ProdutosHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`
export const ProdutosGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
`
export const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.div`
display: flex;
flex-direction:column;
padding: 16px;
margin-top: 5px;
p {
  margin: 5px 0;
}
`
export const FilterContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;