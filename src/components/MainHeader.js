import styled from "styled-components";
import React from "react";

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const HeaderText = styled.h1`
	font-size: 1.5rem;
`;

const HeaderButton = styled.div`
	display: flex;
`;

const ButtonText = styled.p`
	margin: auto;
	margin-right: 1rem;
	font-size: 0.85rem;
	font-weight: 700;
`;

const ButtonIcon = styled.div`
	background-image: url("./assets/icon-moon.svg");
	width: 20px;
	height: 20px;
	margin: auto;
`;

class MainHeader extends React.Component {
	state = { labelText: "D A R K" };

	render() {
		return (
			<HeaderContainer>
				<HeaderText>devfinder</HeaderText>

				<HeaderButton onClick={this.props.onClick}>
					<ButtonText>{this.props.currentTheme}</ButtonText>
					<ButtonIcon></ButtonIcon>
				</HeaderButton>
			</HeaderContainer>
		);
	}
}

export default MainHeader;
