import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();

		//Calling onSubmit thats passed as prop
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search">
				<form className="search-form" onSubmit={this.onFormSubmit}>
					<img src={"./assets/icon-search.svg"} alt="" />
					<input
						type="text"
						placeholder="Search GitHub Username..."
						value={this.state.term}
						onChange={(e) => this.setState({ term: e.target.value })}
						className="search-field"
					/>
					<span onClick={this.onFormSubmit} className="search-btn">
						Search
					</span>
				</form>
			</div>
		);
	}
}

export default SearchBar;
