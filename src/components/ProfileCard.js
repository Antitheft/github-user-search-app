import React from "react";
import Moment from "react-moment";
import styled from "styled-components";

const Card = styled.div`
	width: 335px;
	background-color: ${(props) => props.theme.cardBg};
	box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
	border-radius: 15px;
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: "Space Mono", monospace;
`;

const CardHeader = styled.div`
	width: 17.4375rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 1rem;
`;

const Avatar = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
`;

const ProfileInfo = styled.div`
	line-height: 0.5rem;
	margin-left: 1rem;
`;

const UserName = styled.h2`
	font-weight: 700;
	font-size: 1rem;
	margin: 0;
`;

const UserLogin = styled.p`
	font-size: 0.85rem;
	color: #0079ff;
`;

const JoinedDate = styled.div`
	font-size: 0.8rem;
	color: #697c9a;
`;

const ProfileBio = styled.div`
	width: 17.4375rem;

	margin: 2rem 0;
	font-size: 0.85rem;
	color: #697c9a;
`;

const ProfileStats = styled.div`
	width: 17.4375rem;
	height: 5.3125rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	background: #f6f8ff;
	border-radius: 10px;
`;

const Stat = styled.div`
	text-align: center;
	line-height: 0.5rem;
`;
const StatHeader = styled.h3`
	font-size: 0.6875rem;
	color: #4b6a9b;
`;
const StatNumber = styled.p`
	font-size: 1rem;
	font-weight: 700;
	color: #2b3442;
`;

const ProfileSocials = styled.div`
	width: 17.4375rem;
	margin: 1rem 0 2.5rem 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
const Social = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 20px;
	margin-top: 1rem;
`;
const SocialImage = styled.img`
	margin-right: 1rem;
`;
const SocialLabel = styled.p`
	font-size: 0.8125rem;
`;

const ProfileCard = ({ user }) => {
	return (
		<Card>
			<CardHeader>
				<Avatar src={user.avatar_url} />
				<ProfileInfo>
					<UserName>{user.name}</UserName>
					<UserLogin>{user.login}</UserLogin>
					<JoinedDate>
						Joined&nbsp;
						<Moment format="DD MMM YYYY">{user.created_at}</Moment>
					</JoinedDate>
				</ProfileInfo>
			</CardHeader>
			<ProfileBio>This profile has no bio.</ProfileBio>
			<ProfileStats>
				<Stat>
					<StatHeader>Repos</StatHeader>
					<StatNumber>{user.public_repos}</StatNumber>
				</Stat>
				<Stat>
					<StatHeader>Followers</StatHeader>
					<StatNumber>{user.followers}</StatNumber>
				</Stat>
				<Stat>
					<StatHeader>Following</StatHeader>
					<StatNumber>{user.following}</StatNumber>
				</Stat>
			</ProfileStats>
			<ProfileSocials>
				<Social>
					<SocialImage src="./assets/icon-location.svg" />
					<SocialLabel>
						{user.location ? user.location : "Not Available"}
					</SocialLabel>
				</Social>
				<Social>
					<SocialImage src="./assets/icon-website.svg" />
					<SocialLabel>{user.blog ? user.blog : "Not Available"}</SocialLabel>
				</Social>
				<Social>
					<SocialImage src="./assets/icon-twitter.svg" />
					<SocialLabel>
						{user.twitter_username ? user.twitter_username : "Not Available"}
					</SocialLabel>
				</Social>
				<Social>
					<SocialImage src="./assets/icon-company.svg" />
					<SocialLabel>
						{user.company ? user.company : "Not Available"}
					</SocialLabel>
				</Social>
			</ProfileSocials>
		</Card>
	);
};

export default ProfileCard;
