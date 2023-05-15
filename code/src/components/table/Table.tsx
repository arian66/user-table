import React, { useState } from "react";
import { Header, TableProps } from "./Table.interface";
import { StyledTable, StyledTH, StyledTD, StyledTR } from "./Table.style";

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
		<StyledTable>
			<thead>
				<StyledTR>
					{headers.map((header, index) => (
						<StyledTH key={index} columnSpan={header.columnSpan}>
							{header.label}
							<button onClick={() => handleSort(header)}>sort</button>
						</StyledTH>
					))}
				</StyledTR>
			</thead>
			<tbody>
				{sortedData.map((row, rowIndex) => (
					<StyledTR key={rowIndex}>
						{headers.map((header, columnIndex) => (
							<StyledTD
								key={`${rowIndex}-${columnIndex}`}
								columnSpan={header.columnSpan}
							>
								{row[header.name]}
							</StyledTD>
						))}
					</StyledTR>
				))}
			</tbody>
		</StyledTable>
	);
};

export default Table;
