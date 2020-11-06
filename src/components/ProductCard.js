import React from "react";
import { CardContainer, CardInfo } from "./Styled"
import axios from "axios"

export default class ProductsCard extends React.Component {
  state = {
    carsArray: []
}

componentDidMount = () =>{
    this.getAllCars();
}

getAllCars = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars")
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
          <CardContainer>
                <img src="https://picsum.photos/200/150" alt= "imagem de carro aleatoria"/>
            <CardInfo key={CharacterData.id}>
                <p>{carCard.name}</p>
                <p>R${carCard.price},00 </p>
                <p>{carCard.description}</p>
                <p>{carCard.paymentMethod}</p>
                <p>{carCard.shipping} dias úteis</p>
                <button>Falar com o vendedor</button>
            </CardInfo>
          </CardContainer>
      )
    })
    return(
      <div>
        {renderCarsCards}
      </div>
    )
  }
}




