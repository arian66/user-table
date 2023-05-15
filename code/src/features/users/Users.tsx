import React, { useEffect, useState } from "react";
import Table from "components/table/Table";
import { User} from "./Users.interface"

const Users = () => {
	const [data, setData] = useState([]);
	const headers = [
		{ name: "id", label: "Id", columnSpan: 1 },
		{ name: "name", label: "Name", columnSpan: 1.5 },
		{ name: "contactNo", label: "ContactNo", columnSpan: 2 },
		{ name: "address", label: "Address", columnSpan: 2 },
	];

	useEffect(() => {
		fetch("/sample-data.json")
			.then((res) => res.json())
			.then(res => res?.employees.map(( user: User) => ({
				name: user.firstName + user.lastName,
				id: `${user.id.substring(0,4)}...`,
				contactNo: user.contactNo,
				address: user.address
			})))
			.then((res) => setData(res));
	}, []);

	return (
		<div className="App">
			<Table headers={headers} data={data} />
		</div>
	);
};

export default Users;
