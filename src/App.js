import React from "react";
import Product from "./components/Product";
import Filter from "./components/Filter"
import Header from "./components/Header"
import { AppContainer, NewContainer } from "./components/Styled"
import SalesPage from "./components/SalesPage"
import HomePage from "./components/HomePage"
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import styled from 'styled-components';

const myTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#FF5C5C"
		},
		secondary: {
			main: "#FF00FF"
		}
	}
});

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 39vw;
  margin-right: 39vw;
`

export default class App extends React.Component {
	state = {
		selectPage: 1,
		minFilter: "",
		maxFilter: "",
		searchFilter: "",
	}

	onChangeMinFilter = (event) => {
		this.setState({ minFilter: event.target.value });
	}

	onChangeMaxFilter = (event) => {
		this.setState({ maxFilter: event.target.value });
	}

	onChangeSearchFilter = (event) => {
		this.setState({ searchFilter: event.target.value });
	}

	salesPageSelect = () => {
		this.setState({ selectPage: 2 })
		console.log(this.state.selectPage)
	}

	buyPageSelect = () => {
		this.setState({ selectPage: 3 })
		console.log(this.state.selectPage)
	}


	render() {
		const PageProduct = <Product />
		const NavFilter = <Filter />
		const MenuNav = <Header />

		const renderScreen = () => {
			if (this.state.selectPage === 1) {
				return (
					<div>
						<HomePage />
						<MuiThemeProvider theme={myTheme}>
							<ButtonContainer>
								<Button variant="contained" color="primary" onClick={this.buyPageSelect}>
									Comprar
							</Button>
								<Button variant="contained" color="primary" onClick={this.salesPageSelect}>
									Vender
							</Button>
							</ButtonContainer>
						</MuiThemeProvider>
					</div>
				)
			}
			else if (this.state.selectPage === 2) {
				return (
					<div>
						<SalesPage />
					</div>
				)
			}
			else if (this.state.selectPage === 3) {
				return (
					<AppContainer>
						{MenuNav}
						<NewContainer>
							{NavFilter}
							{PageProduct}
						</NewContainer>
						<Product
							minFilter={this.state.minFilter}
							maxFilter={this.state.maxFilter}
							searchFilter={this.state.searchFilter}
						/>
						<Filter
							minFilter={this.state.minFilter}
							maxFilter={this.state.maxFilter}
							searchFilter={this.state.searchFilter}
							onChangeminFilter={this.onChangeminFilter}
							onChangeFiltroMaximo={this.onChangeFiltroMaximo}
							onChangeFiltroBuscar={this.onChangeFiltroBuscar}
						/>
					</AppContainer>
				)
			}
		}
		return (
			<div>
				{renderScreen()}
			</div>
		)
	}
}