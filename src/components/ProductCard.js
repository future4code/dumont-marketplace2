import React from "react";
import { CardContainer, CardInfo, CursedDiv, SaleButton} from "./Styled"
import axios from "axios";
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const ImgContainer = styled.img`
  width: 256px;
  height: 144px;
  align-self: center;
`

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF5C5C"
    },
    secondary: {
      main: "#FF00FF"
    }
  }
});


export default class ProductsCard extends React.Component {
  state = {
    carsArray: []
}

componentDidMount = () =>{
    this.getAllCars();
}

getAllCars = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars")
    .then((response) => {
        this.setState({carsArray : response.data.cars})
    })
    .catch((error) => {
        console.log(error.message)
    })
}
    render() {
      const renderCarsCards = this.state.carsArray.map((carCard) => {
      return(
          <CardContainer key={carCard.id}>
                <ImgContainer src={carCard.url} alt= "imagem de carro aleatoria"/>
            <CardInfo key={carCard.id}>
                <h5>{carCard.name}</h5>
                <p>R${carCard.price},00 </p>
                <p>{carCard.description}</p>
                <p>{carCard.paymentMethod}</p>
                <p>{carCard.shipping} dias úteis</p>
                <MuiThemeProvider theme = {myTheme}>
                  <Button variant = "contained" color = "primary">Falar com o vendedor</Button>
                </MuiThemeProvider>
            </CardInfo>
          </CardContainer>
      )
    })
    return(
      <CursedDiv>
        {renderCarsCards}
      </CursedDiv>
    )
  }
}




