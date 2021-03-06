import React from "react";
import Moment from "react-moment";
import styled from "styled-components";

const Card = styled.div`
	width: 20.9375em;
	background-color: ${(props) => props.theme.cardBg};
	box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
	border-radius: 15px;
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: "Space Mono", monospace;
	transition: width 250ms, background-color 500ms;

	@media only screen and (min-width: 768px) {
		width: 35.8125em;
	}
	@media only screen and (min-width: 1000px) {
		width: 45.625em;
	}
`;

const CardHeader = styled.div`
	width: 85%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 1rem;
`;

const Avatar = styled.img`
	width: 4.375em;
	height: 4.375em;
	border-radius: 50%;

	@media only screen and (min-width: 768px) {
		width: 7.3125em;
		height: 7.3125em;
		margin-top: 2rem;
	}
`;

const ProfileInfo = styled.div`
	line-height: 0.5rem;
	margin-left: 1rem;

	@media only screen and (min-width: 1000px) {
		width: 75%;
		display: flex;
		justify-content: space-between;
		margin-left: 2rem;
	}
`;

const UserContainer = styled.div``;

const UserName = styled.h2`
	font-weight: 700;
	font-size: 1rem;
	color: ${(props) => props.theme.userNameFC};

	@media only screen and (min-width: 768px) {
		font-size: 1.625rem;
	}
`;

const UserLogin = styled.p`
	font-size: 0.85rem;
	color: #0079ff;

	@media only screen and (min-width: 768px) {
		font-size: 1rem;
	}
`;

const JoinedDate = styled.div`
	font-size: 0.8rem;
	color: ${(props) => props.theme.secondaryFC};

	@media only screen and (min-width: 768px) {
		font-size: 0.95rem;
	}
`;

const ProfileBio = styled.div`
	width: 85%;
	margin: 1.5rem 0;
	font-size: 0.85rem;
	color: ${(props) => props.theme.primaryFC};

	@media only screen and (min-width: 768px) {
		font-size: 0.98rem;
	}

	@media only screen and (min-width: 1000px) {
		width: 65%;
		margin: -4% 0 4% 20%;
	}
`;

const ProfileStats = styled.div`
	width: 85%;
	height: 5.33rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	background: ${(props) => props.theme.statsBg};
	border-radius: 10px;
	transition: 250ms;

	@media only screen and (min-width: 1000px) {
		width: 65%;
		margin-left: 20%;
	}
`;

const Stat = styled.div`
	text-align: center;
	line-height: 0.5rem;
`;
const StatHeader = styled.h3`
	font-size: 0.6875rem;
	font-weight: 400;
	color: ${(props) => props.theme.primaryFC};
`;
const StatNumber = styled.p`
	font-size: 1rem;
	font-weight: 700;
	color: ${(props) => props.theme.userNameFC};

	@media only screen and (min-width: 768px) {
		font-size: 1.4rem;
	}
`;

const ProfileSocials = styled.div`
	width: 85%;
	margin: 1rem 0 2.5rem 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	transition: 250ms;

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
	@media only screen and (min-width: 1000px) {
		width: 65%;
		margin-left: 13%;
	}
`;
const Social = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 20px;
	width: 12em;
	margin-top: 1rem;
	@media only screen and (min-width: 1000px) {
		margin-left: 7%;
	}
`;
const SocialImage = styled.img`
	margin-right: 1rem;
`;
const SocialLabel = styled.p`
	font-size: 0.8125rem;
	color: ${(props) => props.theme.primaryFC};

	@media only screen and (min-width: 768px) {
		font-size: 0.95rem;
	}
`;

const Link = styled.a`
	text-decoration: none;
	color: ${(props) => props.theme.primaryFC};

	&:hover {
		text-decoration: underline;
	}
`;

const ProfileCard = ({ user }) => {
	return (
		<Card>
			<CardHeader>
				<Avatar src={user.avatar_url} alt="avatar" />
				<ProfileInfo>
					<UserContainer>
						<UserName>{user.name}</UserName>
						<UserLogin>{user.login}</UserLogin>
					</UserContainer>
					<JoinedDate>
						Joined&nbsp;
						<Moment format="DD MMM YYYY">{user.created_at}</Moment>
					</JoinedDate>
				</ProfileInfo>
			</CardHeader>
			<ProfileBio>
				{user.bio ? user.bio : "This profile has no bio."}
			</ProfileBio>
			<ProfileStats>
				<Stat>
					<StatHeader>Repos</StatHeader>
					<StatNumber>&nbsp; {user.public_repos} &nbsp;</StatNumber>
				</Stat>
				<Stat>
					<StatHeader>Followers</StatHeader>
					<StatNumber>&nbsp; {user.followers} &nbsp;</StatNumber>
				</Stat>
				<Stat>
					<StatHeader>Following</StatHeader>
					<StatNumber>&nbsp; {user.following} &nbsp;</StatNumber>
				</Stat>
			</ProfileStats>
			<ProfileSocials>
				<Social>
					<SocialImage src="./assets/icon-location.svg" alt="" />
					<SocialLabel>
						{user.location ? user.location : "Not Available"}
					</SocialLabel>
				</Social>
				<Social>
					<SocialImage src="./assets/icon-website.svg" alt="" />
					<SocialLabel>
						<Link href={user.blog}>
							{user.blog ? user.blog : "Not Available"}
						</Link>
					</SocialLabel>
				</Social>
				<Social>
					<SocialImage src="./assets/icon-twitter.svg" alt="" />
					<SocialLabel>
						{user.twitter_username ? user.twitter_username : "Not Available"}
					</SocialLabel>
				</Social>
				<Social>
					<SocialImage src="./assets/icon-company.svg" alt="" />
					<SocialLabel>
						{user.company ? user.company : "Not Available"}
					</SocialLabel>
				</Social>
			</ProfileSocials>
		</Card>
	);
};

export default ProfileCard;
