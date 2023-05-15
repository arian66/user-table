import React, { useEffect, useState } from "react";
import Table from "components/table/Table";
import { User } from "./Users.interface";
import usePagination from "components/pagination/usePagination";
import Pagination from "components/pagination/Pagination";
import UserSearch from "./UserSearch";

const headers = [
	{ name: "id", label: "Id", columnSpan: 1 },
	{ name: "name", label: "Name", columnSpan: 1.5 },
	{ name: "contactNo", label: "ContactNo", columnSpan: 2 },
	{ name: "address", label: "Address", columnSpan: 2 },
];

const Users = () => {
	const [data, setData] = useState([]);
	const [filteredData, SetFilteredData] = useState([]);

	useEffect(() => {
		fetch("/sample-data.json")
			.then((res) => res.json())
			.then((res) =>
				res?.employees.map((user: User) => ({
					name: user.firstName + user.lastName,
					id: `${user.id.substring(0, 4)}...`,
					contactNo: user.contactNo,
					address: user.address,
				}))
			)
			.then((res) => {
				setData(res);
				SetFilteredData(data);
			});
	}, []);

	const itemsPerPage = 8;
	const totalPages = Math.ceil(data.length / itemsPerPage);

	const { currentPage, setCurrentPage } = usePagination({
		totalPages,
	});

	const filterData = (query: string) => {
		const filteredData = data.filter((row) =>
			Object.values(row).some((value: any) =>
				value.toString().toLowerCase().includes(query.toLowerCase())
			)
		);
		SetFilteredData(filteredData);
	};

	const paginatedData = filteredData.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleSearch = (search: string) => {
		filterData(search);
		setCurrentPage(1);
	};

	return (
		<div className="App">
			<UserSearch onSearch={handleSearch} />
			<Table headers={headers} data={paginatedData} />
			<Pagination
				currentPage={currentPage}
				handlePageChange={setCurrentPage}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default Users;
