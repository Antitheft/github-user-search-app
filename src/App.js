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
	mainBg: "white",
	cardBg: "#white",
	statsBg: "#f6f8ff",

	userNameFC: "2B3442",
	primaryFC: "#4B6A9B",
	secondaryFC: "#697C9A",
};

const themeDark = {
	mainBg: "#141D2F",
	cardBg: "#1E2A47",
	statsBg: "#141D2F",

	userNameFC: "#FFFFFF",
	primaryFC: "#FFFFFF",
	secondaryFC: "#FFFFFF",
};

export default class App extends Component {
	state = { user: [], themeSelected: "D A R K" };

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
				{/* <button onClick={this.onButtonClick}>Click</button>
				<label>{this.state.themeSelected}</label> */}
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ProfileCard user={this.state.user} />
			</ThemeProvider>
		);
	}
}
