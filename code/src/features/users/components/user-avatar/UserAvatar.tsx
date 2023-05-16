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
		<div>
			<button onClick={handleClick}>
				<img src={image} alt={name} />
			</button>
			<span>{name}</span>
		</div>
	);
};

export default UserAvatar;
