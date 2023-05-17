import React, { useEffect, useState, useMemo, useCallback } from "react";
import Table from "components/table/Table";
import { IUsers, IMappedUserForTable } from "./Users.interface";
import usePagination from "components/pagination/usePagination";
import Pagination from "components/pagination/Pagination";
import UserSearch from "./components/user-search/UserSearch";
import { modalController } from "components/modal/ModalController";
import { mapDataToTable } from "./utils/usersHelper";
import UserDetails from "./components/user-details/UserDetails";
import { PaginationContainer } from "./Users.style";
import { useData } from "features/data-loader/DataContext";
import Typography from "components/UI/typography/Typography";

const headers = [
	{ name: "id", label: "Id", columnSpan: 1 },
	{ name: "name", label: "Name", columnSpan: 1.5 },
	{ name: "contactNo", label: "ContactNo", columnSpan: 2 },
	{ name: "address", label: "Address", columnSpan: 2 },
];

const Users = () => {
	const [data, setData] = useState<IUsers>();
	const [filteredData, SetFilteredData] = useState<IMappedUserForTable[]>();

	const { data: apiData, loading } = useData();

	const handleUserClick = useCallback(
		(id: string) => {
			const user = data?.find((user) => user.id === id);
			if (user) {
				modalController.open(
					<UserDetails
						firstName={user?.firstName}
						lastName={user.lastName}
						jobTitle={user.jobTitle}
						bio={user.bio}
						avatar={user.avatar}
						dateJoined={user.dateJoined}
						age={user.age}
					/>
				);
			}
		},
		[data]
	);

	const mappedData = useMemo(() => {
		if (data) {
			return mapDataToTable(data, handleUserClick);
		}
		return [];
	}, [data, handleUserClick]);

	useEffect(() => {
		if (apiData) {
			setData(apiData.employees);
		}
	}, [apiData]);

	const itemsPerPage = 8;
	const totalPages = filteredData
		? Math.ceil(filteredData.length / itemsPerPage)
		: 0;

	const { currentPage, setCurrentPage } = usePagination({
		totalPages,
	});

	const filterData = (query: string) => {
		const filteredData = mappedData?.filter((row: any) =>
			Object.values(row).some((value: any) =>
				value.toString().toLowerCase().includes(query.toLowerCase())
			)
		);
		SetFilteredData(filteredData);
	};

	useEffect(() => {
		SetFilteredData(mappedData);
	}, [mappedData]);

	const paginatedData = filteredData?.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleSearch = (search: string) => {
		filterData(search);
		setCurrentPage(1);
	};

	return (
		<div>
			{loading ? (
				<Typography variant="subheader">Loading ...</Typography>
			) : (
				<>
					<UserSearch onSearch={handleSearch} />
					<Table headers={headers} data={paginatedData ?? []} />
					<PaginationContainer>
						<Pagination
							currentPage={currentPage}
							handlePageChange={setCurrentPage}
							totalPages={totalPages}
						/>
					</PaginationContainer>
				</>
			)}
		</div>
	);
};

export default Users;
