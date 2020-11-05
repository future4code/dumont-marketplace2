import React from "react";
import { MenuContainer } from "./Styled"

export default class Header extends React.Component {
    render() {
        return(
           <MenuContainer>
               <div>
                   <h1>Logo</h1>
               </div>
               <div>
                   <h3>Menu</h3>
               </div> 
           </MenuContainer> 
        )
    }
}