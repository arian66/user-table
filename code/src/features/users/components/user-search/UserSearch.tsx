import React, { useState } from "react";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import { SearchContainer } from "./UserSearch.style";

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
		<SearchContainer>
			<form onSubmit={handleSearch}>
				<Input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search..."
				/>
				<Button type="submit" transparent width={'200px'}>
					Search
				</Button>
			</form>
		</SearchContainer>
	);
};

export default UserSearch;
