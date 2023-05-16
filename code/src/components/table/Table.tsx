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
			const aValue =
				typeof a[sortConfig.key] === "object" &&
				a[sortConfig.key].hasOwnProperty("value")
					? a[sortConfig.key].value
					: a[sortConfig.key];
			const bValue =
				typeof b[sortConfig.key] === "object" &&
				b[sortConfig.key].hasOwnProperty("value")
					? b[sortConfig.key].value
					: b[sortConfig.key];

			return sortConfig.direction === "ascending"
				? aValue.toString().localeCompare(bValue.toString())
				: bValue.toString().localeCompare(aValue.toString());
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
							<button
								onClick={() => handleSort(header)}
								className={
									sortConfig.key === header.name
										? (sortConfig.direction as string)
										: "ascending"
								}
							/>
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
								{typeof row[header.name] === "string"
									? row[header.name]
									: row[header.name].content()}
							</StyledTD>
						))}
					</StyledTR>
				))}
			</tbody>
		</StyledTable>
	);
};

export default Table;
