import React, { useState } from "react";

interface UserSearchProps {
	onSearch: (search: string) => void;
}

const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
	const [search, setSearch] = useState("");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(search);
	};

	return (
		<form onSubmit={handleSearch}>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search..."
			/>
			<button type="submit">Search</button>
		</form>
	);
};

export default UserSearch;
