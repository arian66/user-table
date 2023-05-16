import React from "react";
import { IUser } from "../../Users.interface";
import {
	Container,
	ImageContainer,
	Image,
	TextContainer,
	Title,
	Text,
} from "./UserDetails.style";

interface UserDetailsProps extends Omit<IUser, "id" | "address" | "contactNo"> {}

const UserDetails: React.FC<UserDetailsProps> = ({
	firstName,
	lastName,
	jobTitle,
	bio,
	avatar,
  age,
  dateJoined
}) => {
	return (
		<Container>
			<ImageContainer>
				<Image src={avatar} alt={firstName} />
				<Text>{jobTitle}</Text>
				<Text>{age}</Text>
				<Text>{dateJoined}</Text>
			</ImageContainer>
			<TextContainer>
				<Title>{firstName + " " + lastName}</Title>
				<Text>{bio}</Text>
			</TextContainer>
		</Container>
	);
};

export default UserDetails;
