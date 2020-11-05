import React from "react";
import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const NewContainer = styled.div`
  display: flex;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin-left: 10px;
  margin-top: 10px;
`;

export const ProdutosHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 16px;
`;

export const FilterContainer = styled.div`
  border: 1px solid;
  padding: 8px;
  width: 15%;
  height: 100%;
  margin-left: 3px;
  margin-top: 30px;
`;

export const LoginButton = styled.button`
  border-radius: 5px;
  border: 2px solid #ff5c5c;
  background-color: white;
  margin: 30px;
  width: 80px;
`;

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const InputContainer = styled.input`
  width: 60px;
`;

export const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 5px;
  p {
    margin: 5px 0;
  }
`;
