import React from "react";
import { CardContainer, CardInfo } from "./Styled"

export default class ProdutsCard extends React.Component {
  render() {
    return(
        <CardContainer>
            <img src="https://picsum.photos/150/150" alt= "imagem de carro aleatoria"/>
        <CardInfo>
            <p>Nome</p>
            <p>R$100,00 </p>
            <button>Falar com o vendedor</button>
        </CardInfo>
        </CardContainer>
    )
  }
}
