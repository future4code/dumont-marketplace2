import React, { Component } from 'react';
import Logo from './imgs/futurecar.png';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 39vw;
  margin-right: 39vw;
`


export class HomePage extends Component {
  render() {
    return (

      <div> 

        <LogoContainer>
          <img src = {Logo} />
          <h2>O que você deseja?</h2>
        </LogoContainer>

      </div>
    )
  }
}

export default HomePage
