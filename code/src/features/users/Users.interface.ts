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

export interface INameTableField {
	value: string;
	content: Function;
}

export interface IMappedUserForTable {
	name: INameTableField;
	id: string;
	contactNo: string;
	address: string;
}
