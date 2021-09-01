import React, { Component } from "react";
import github from "./api/github";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

export default class App extends Component {
	state = { user: [] };

	componentDidMount() {
		this.onSearchSubmit("Octocat");
	}

	onSearchSubmit = async (userName) => {
		const response = await github.get(userName);
		console.log(response.data);
		this.setState({ user: response.data });
	};

	render() {
		return (
			<div>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{/* <img src={this.state.user.avatar_url} alt="" /> */}
				<ProfileCard user={this.state.user} />
			</div>
		);
	}
}
