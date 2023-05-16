export interface IUser {
	id: string;
	avatar: string;
	firstName: string;
	lastName: string;
	jobTitle: string;
	contactNo: string;
	address: string;
	age: number;
	bio: string;
	dateJoined: string;
}

export type IUsers = IUser[];

export interface IMappedUserForTable {
	name: Function;
	id: string;
	contactNo: string;
	address: string;
}
