import React, { useEffect, useState } from "react";
import Table from "components/table/Table";

function App() {
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
			.then((res) => setData(res?.employees));
	}, []);

	return (
		<div className="App">
			<Table headers={headers} data={data} />
		</div>
	);
}

export default App;
