import React from 'react'
import axios from 'axios'
import { render } from '@testing-library/react'


class ProductCard extends React.Component {
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
            console.log("teste", response.data.cars)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    render(){
        const renderCarsCards = this.state.carsArray.map((carCard) => {
            return(
                <div key={carCard.id}>
                    {carCard.name}
                    {carCard.description}
                    R${carCard.price},00
                    {carCard.paymentMethod}
                    {carCard.shipping}: dias úteis
                </div>
            )
        })
        return(
            <div>
                {renderCarsCards}
            </div>
        )
    }
}

export default ProductCard