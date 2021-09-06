import React, { Component } from "react";
import github from "./api/github";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import MainHeader from "./components/MainHeader";

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
	mainBg: "#f6f8ff",
	cardBg: "white",
	statsBg: "#f6f8ff",

	userNameFC: "2B3442",
	primaryFC: "#4B6A9B",
	secondaryFC: "#697C9A",

	themeIconBg: 'url("./assets/icon-moon.svg")',
};

const themeDark = {
	mainBg: "#141D2F",
	cardBg: "#1E2A47",
	statsBg: "#141D2F",

	userNameFC: "#FFFFFF",
	primaryFC: "#FFFFFF",
	secondaryFC: "#FFFFFF",

	themeIconBg: 'url("./assets/icon-sun.svg")',
};

export default class App extends Component {
	state = { user: [], themeSelected: "L I G H T" };

	componentDidMount() {
		this.onSearchSubmit("Octocat");
	}

	onSearchSubmit = async (userName) => {
		const response = await github.get(userName);
		console.log(response.data);
		this.setState({ user: response.data });
	};

	onButtonClick = () => {
		if (this.state.themeSelected === "D A R K") {
			this.setState({ themeSelected: "L I G H T" });
		} else {
			this.setState({ themeSelected: "D A R K" });
		}
	};

	updateTheme = () => {
		if (this.state.themeSelected === "D A R K") {
			return theme;
		} else {
			return themeDark;
		}
	};

	render() {
		return (
			<ThemeProvider theme={this.updateTheme()}>
				<GlobalStyle />
				<MainHeader
					onClick={this.onButtonClick}
					currentTheme={this.state.themeSelected}
				/>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ProfileCard user={this.state.user} />
			</ThemeProvider>
		);
	}
}
