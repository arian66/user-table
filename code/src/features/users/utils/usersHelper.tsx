import { IUsers, IMappedUserForTable } from "../Users.interface";
import UserAvatar from "../components/user-avatar/UserAvatar";

export const mapDataToTable = (
	users: IUsers,
	handleUserClick: Function
): IMappedUserForTable[] => {
	return users.map((user) => ({
		name: () => (
			<UserAvatar
				name={user.firstName + " " + user.lastName}
				image={user.avatar}
				id={user.id}
				onClick={handleUserClick}
			/>
		),
		id: `${user.id.substring(0, 4)}...`,
		contactNo: user.contactNo,
		address: user.address,
	}));
};
