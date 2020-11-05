import React from "react";
import { MenuContainer, LoginButton } from "./Styled"
import LogoFutureCar from "../img/futurecar-min.JPG"

export default class Header extends React.Component {
    render() {
        return(
                <MenuContainer>
                    <div>
                        <img src={ LogoFutureCar } alt="Logo Future Car" width="280px" height="80px"/>
                    </div>
                    <div>
                        <LoginButton>Login</LoginButton>
                    </div> 
                </MenuContainer> 
        )
    }
}