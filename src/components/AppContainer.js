import React, { Component } from 'react';
import Logo from './imgs/futurecar.png';
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import styled from 'styled-components';

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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 39vw;
  margin-right: 39vw;
`


export class AppContainer extends Component {
  render() {
    return (
      <MuiThemeProvider theme = {myTheme}> 

        <LogoContainer>
          <img src = {Logo} />
          <h2>O que você deseja?</h2>
        </LogoContainer>
        
        <ButtonContainer>
          <Button variant = "contained" color = "primary"> 
            Comprar 
          </Button>
          <Button variant = "contained" color = "primary">
            Vender 
          </Button>
        </ButtonContainer>

      </MuiThemeProvider>
    )
  }
}
