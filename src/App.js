import React, { Component } from "react";
import github from "./api/github";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html,body {
		height: 100%;
	}

	body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: "Space Mono", monospace;
		background-color: ${(props) => props.theme.mainBg};
	}
`;

const theme = {
	mainBg: "white",
};

const themeDark = {
	mainBg: "#141D2F",
	cardBg: "#1E2A47",
};

export default class App extends Component {
	state = { user: [], themeSelected: "default" };

	componentDidMount() {
		this.onSearchSubmit("Octocat");
	}

	onSearchSubmit = async (userName) => {
		const response = await github.get(userName);
		console.log(response.data);
		this.setState({ user: response.data });
	};

	onButtonClick = () => {
		if (this.state.themeSelected === "default") {
			this.setState({ themeSelected: "dark" });
		} else {
			this.setState({ themeSelected: "default" });
		}
	};

	updateTheme = () => {
		if (this.state.themeSelected === "default") {
			return theme;
		} else {
			return themeDark;
		}
	};

	render() {
		return (
			<ThemeProvider theme={this.updateTheme()}>
				<GlobalStyle />
				<button onClick={this.onButtonClick}>Click</button>
				<label>{this.state.themeSelected}</label>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ProfileCard user={this.state.user} />
			</ThemeProvider>
		);
	}
}
