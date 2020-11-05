import React from "react";
import styled from "styled-components"
import Logo from "./imagens/futurecar.png";
import Image from "./imagens/cars.jpg";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'


const ImageLogo = styled.img`
   width: 200px;
   margin-top: 0;
` 

const Tilte = styled.div`
   font-size: 18px;
   margin-left: 5%;
   padding-bottom: 1%;
`

const InputSale = styled.input`
   font-size: 18px;
   border-color:#e0e0e0;
   display: flex;
   margin: 10px 30px;
   padding: 5px;
   width: 30%;
`

const ImageCars = styled.img`
   width: 58%;
   height: 9%;
   float: right;
   margin-top: 18%;
  
`

// const SendButton = styled.button`
//     font-size: 18px;
//     background: #457B9D;
//     color: white;
//     width: 32.5%;
//     margin-left: 2%;
//     margin-bottom: 2%;
//     padding: 1%;
// `


const myTheme = createMuiTheme({
   pallete: {
      primary: {
         main: "#FF5C5C"
      },
      secondary: {
         main: "#E0E0E0"
      }
   }
})

class SalesPage extends React.Component {
  render() {
    return (
       <div className="App">
           <div>
             <ImageLogo src={Logo} alt="logo"/>
             
           <ImageCars src={Image} alt="imagem carros"/>
           
            <Tilte>
                <h2>Venda seu carro Agora!! </h2>
            </Tilte>

             <div>
                <InputSale placeholder = {"Nome"}></InputSale>
                <InputSale placeholder = {"Telefone"}></InputSale>
                <InputSale placeholder = {"Email"}></InputSale>
                <InputSale placeholder = {"Nome do Anúncio"}></InputSale>
               </div>
               <div>
                <InputSale placeholder = {"Descrição"}></InputSale>
                <InputSale placeholder = {"Preço"}></InputSale>
                <InputSale placeholder = {"Forma de Pagamento"}></InputSale>
                <InputSale placeholder = {"Prazo de Entrega"}></InputSale>
                </div>
                <br/>
                <MuiThemeProvider theme = {myTheme}>
                 {/* <SendButton>ENVIAR</SendButton> */}
                 <Button
                     variant="contained"
                     color={"primary"}
                     endIcon={<Icon></Icon>}
                     >
                     Send
                  </Button>
                  </ MuiThemeProvider>
               </div>
               </div>

       );
    }
 }
export default SalesPage;
