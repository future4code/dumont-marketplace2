import { render } from "@testing-library/react";
import React from "react";
import Product from "./components/Product";
import Filter from "./components/Filter"
import Header from "./components/Header"
import LogoFutureCar from "./img/futurecar-min.JPG"
import { AppContainer, NewContainer} from "./components/Styled"

export default class App extends React.Component {
  render() {
	  const PageProduct = <Product/>
	  const NavFilter = <Filter/>
	  const MenuNav = <Header />
	return (
		<AppContainer>
			{MenuNav}
			<NewContainer>
			{NavFilter}
			{PageProduct}
			</NewContainer>
		</AppContainer>
	)
  }
}
