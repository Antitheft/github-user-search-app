import styled from "styled-components";
import React from "react";

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const HeaderText = styled.h1`
	font-size: 1.5rem;
	color: ${(props) => props.theme.userNameFC};
`;

const ButtonText = styled.p`
	margin: auto;
	margin-right: 1rem;
	font-size: 0.85rem;
	font-weight: 700;
	color: ${(props) => props.theme.primaryFC};
`;

const ButtonIcon = styled.div`
	background-image: ${(props) => props.theme.themeIconBg};
	width: 20px;
	height: 20px;
	margin: auto;
`;

const HeaderButton = styled.div`
	display: flex;
	&:hover {
		cursor: pointer;

		${ButtonText} {
			opacity: 0.5;
		}
		${ButtonIcon} {
			opacity: 0.5;
		}
	}
`;

class MainHeader extends React.Component {
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
