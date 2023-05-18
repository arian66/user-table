import Image from "components/UI/image/Image";
import { Container, Button } from "./UserAvatar.style";
import Typography from "components/UI/typography/Typography";
interface UserAvatarProps {
	id: string;
	name: string;
	image: string;
	onClick: Function;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
	image,
	name,
	id,
	onClick,
}) => {
	const handleClick = () => {
		onClick(id);
	};

	return (
		<Container>
			<Button onClick={handleClick} data-testid={`avatar-${name}`}>
				<Image
					src={image}
					alt={name}
					defaultSrc="assets/avatar.jpg"
					width={"30px"}
					height={"30px"}
				/>
			</Button>
			<Typography>{name}</Typography>
		</Container>
	);
};

export default UserAvatar;
