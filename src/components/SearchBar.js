import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
	width: 20.4375rem;
	height: 3.75rem;
	background-color: ${(props) => props.theme.cardBg};
	box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
	border-radius: 15px;

	display: flex;
	justify-content: center;
	align-items: center;
	transition: width 300ms;

	@media only screen and (min-width: 768px) {
		width: 35.8125em;
	}
`;
const Form = styled.form`
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
`;
const SearchIcon = styled.img`
	width: 1.25rem;
	height: 1.25rem;
`;
const SearchInput = styled.input`
	width: 11.5rem;
	border: none;
	outline: none;
	background: none;
	font-size: 0.93rem;
	color: ${(props) => props.theme.userNameFC};
	transition: width 300ms;

	@media only screen and (min-width: 768px) {
		width: 75%;
	}
`;
const SearchButton = styled.span`
	width: 84px;
	height: 46px;
	border-radius: 10px;

	color: white;
	background-color: #0079ff;
	font-size: 0.875rem;

	display: flex;
	justify-content: center;
	align-items: center;
`;

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();
		//Call onSubmit Passed as Prop
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<SearchContainer>
				<Form onSubmit={this.onFormSubmit}>
					<SearchIcon src={"./assets/icon-search.svg"} />
					<SearchInput
						type="text"
						placeholder="Search GitHub Username..."
						value={this.state.term}
						onChange={(e) => this.setState({ term: e.target.value })}
						className="search-field"
					/>
					<SearchButton onClick={this.onFormSubmit}>Search</SearchButton>
				</Form>
			</SearchContainer>
		);
	}
}

export default SearchBar;
