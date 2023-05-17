import React from "react";
import { IUser } from "../../Users.interface";
import Image from "components/UI/image/Image";
import Typography from "components/UI/typography/Typography";

import {
	Container,
	ImageContainer,
	TextContainer,
} from "./UserDetails.style";

import { getDate } from "utils/helper-functions";

interface UserDetailsProps
	extends Omit<IUser, "id" | "address" | "contactNo"> {}

const UserDetails: React.FC<UserDetailsProps> = ({
	firstName,
	lastName,
	jobTitle,
	bio,
	avatar,
	age,
	dateJoined,
}) => {
	return (
		<Container>
			<ImageContainer>
				<Image
					src={avatar}
					alt={firstName}
					defaultSrc="/assets/avatar.jpg"
					width="100px"
					height="100px"
				/>
				<Typography bold>{jobTitle}</Typography>
				<Typography>age: {age}</Typography>
				<Typography>date joined: {getDate(dateJoined)}</Typography>
			</ImageContainer>
			<TextContainer>
				<Typography variant="subheader" className="name">
					{firstName + " " + lastName}
				</Typography>
				<Typography className="content">{bio}</Typography>
			</TextContainer>
		</Container>
	);
};

export default UserDetails;
