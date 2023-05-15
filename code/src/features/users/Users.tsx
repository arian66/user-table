import React, { useEffect, useState } from "react";
import Table from "components/table/Table";
import { User} from "./Users.interface"

const Users = () => {
	const [data, setData] = useState([]);
	const headers = [
		{ name: "id", label: "Id" },
		{ name: "name", label: "Name" },
		{ name: "contactNo", label: "ContactNo" },
		{ name: "address", label: "Address" },
	];

	useEffect(() => {
		fetch("/sample-data.json")
			.then((res) => res.json())
			.then(res => res?.employees.map(( user: User) => ({
				name: user.firstName + user.lastName,
				id: user.id,
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
