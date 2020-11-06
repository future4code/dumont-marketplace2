import React from "react";
import axios from "axios";
import Logo from "./imagens/futurecar.jpg";
import Image from "./imagens/cars.jpg";
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import { DivLogo, ImageLogo, Title, InputSale, ImageCars, ButtonConteiner } from "./styles";




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

class SalesPage extends React.Component {
    state = {
        name: "",
        description: "",
        price: "",
        paymentMethod: "",
        shipping: "",
        url: ""

    }

    onChangeName= (event) => {
        this.setState({name: event.target.value})
    }

    onChangeDescription= (event) => {
        this.setState({description: event.target.value})
    }

    onChangePrice= (event) => {
        this.setState({price: event.target.value})
    }

    onChangePaymentMethod= (event) => {
        this.setState({paymentMethod: event.target.value})
    }

    onChangeShipping= (event) => {
        this.setState({shipping: event.target.value})
    }

    onChangeURL= (event) => {
        this.setState({url: event.target.value})
    }


    handleCreateAd = () => {
        const body = {
          name: this.state.name,
          description: this.state.description,
          price: this.state.price,
          paymentMethod: this.state.paymentMethod,
          shipping: this.state.shipping,
          url: this.state.url
        };
    
        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars`,
            body,
          )
          .then((response) => {
            this.setState({ name: "", description: "", price: "", paymentMethod:"", shipping: "", url: "" });
            alert("Anúncio criado com sucesso!");
            console.log(response)
          })
          .catch((error) => {
            alert("Erro ao criar anúncio!");
            console.log(error.message);
          });
      };

  render() {
      console.log(this.state)
     return (
        <div className="App">
            <DivLogo>
             <ImageLogo src={Logo} alt="logo"/>
             </DivLogo>
             <div>
             <ImageCars src={Image} alt="imagem carros"/>
           
            <Title>
                <h2>Venda seu carro Agora!!</h2>
            </Title>

            <div>
                <InputSale placeholder = {"Nome"}></InputSale>
                <InputSale placeholder = {"Telefone"}></InputSale>
                <InputSale placeholder = {"Email"}></InputSale>
            </div>
            <div>
                <InputSale 
                    placeholder = {"Nome do Anúncio"}
                    value = { this.state.name}
                    onChange = {this.onChangeName}>
                </InputSale>
             
                <InputSale 
                    placeholder = {"Descrição"}
                    value = { this.state.description}
                    onChange = {this.onChangeDescription}>

                </InputSale>
                <InputSale 
                    placeholder = {"Preço"}
                    value = { this.state.price}
                    onChange = {this.onChangePrice}>
                </InputSale>
                <InputSale 
                    placeholder = {"Forma de Pagamento"}
                    value = { this.state.paymentMethod}
                    onChange = {this.onChangePaymentMethod}>

                </InputSale>
                <InputSale 
                    placeholder = {"Prazo de Entrega"}
                    value = { this.state.shipping}
                    onChange = {this.onChangeShipping}>
                </InputSale>

                <InputSale 
                    placeholder = {"URL Foto do Carro"}
                    value = { this.state.url}
                    onChange = {this.onChangeURL}>
                </InputSale>
                </div>

                <br/>

                <MuiThemeProvider theme = {myTheme}> 

                 <ButtonConteiner>
                  <Button onClick={this.handleCreateAd} variant = "contained" color = "primary">
                    ENVIAR
                  </Button>
                </ButtonConteiner>

                </MuiThemeProvider>
            </div>
        </div>
    );
  }
}
export default SalesPage;
