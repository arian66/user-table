import React, { useState } from "react";
import { Header, TableProps } from "./Table.interface";

const Table: React.FC<TableProps> = (props) => {
	const { headers, data } = props;

	const [sortConfig, setSortConfig] = useState<{
		key: string | null;
		direction: "ascending" | "descending" | null;
	}>({
		key: null,
		direction: null,
	});

	const handleSort = (header: Header) => {
		let direction: "ascending" | "descending" = "ascending";
		if (
			sortConfig.key === header.name &&
			sortConfig.direction === "ascending"
		) {
			direction = "descending";
		}
		setSortConfig({ key: header.name, direction: direction });
	};

	const sortedData = [...data].sort((a, b) => {
		if (sortConfig.key && sortConfig.direction) {
			return sortConfig.direction === "ascending"
				? a[sortConfig.key]
						.toString()
						.localeCompare(b[sortConfig.key].toString())
				: b[sortConfig.key]
						.toString()
						.localeCompare(a[sortConfig.key].toString());
		}
		return 0;
	});

	return (
		<table>
			<thead>
				<tr>
					{headers.map((header, index) => (
						<th key={index}>
							{header.label}
							<button onClick={() => handleSort(header)}>sort</button>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{sortedData.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{headers.map((header, columnIndex) => (
							<td key={`${rowIndex}-${columnIndex}`}>{row[header.name]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
