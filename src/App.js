import { render } from "@testing-library/react";
import React from "react";
import Product from "./components/Product";
import Filter from "./components/Filter"
import Header from "./components/Header"
import { AppContainer } from "./components/Styled"

export default class App extends React.Component {
  render() {
	  const PageProduct = <Product/>
	  const NavBar = <Header/>
	  const NavFilter = <Filter/>
	return (
		<AppContainer>
			{NavBar}
			{PageProduct}
			{NavFilter}
		</AppContainer>
	)
  }
}
