import React from "react";
import {
	ControlButton,
	PageButton,
	PaginationContainer,
} from "./Paginatoin.style";

interface PaginationProps {
	currentPage: number;
	handlePageChange: (page: number) => void;
	totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	handlePageChange,
	totalPages,
}) => {
	const startPage = Math.max(1, currentPage - 2);
	const endPage = Math.min(totalPages, startPage + 4);

	const pageNumbers = Array.from(
		{ length: endPage - startPage + 1 },
		(_, i) => i + startPage
	);
	return (
		<PaginationContainer>
			<ControlButton
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				transparent
			>
				Prev
			</ControlButton>

			{pageNumbers.map((pageNumber) => (
				<PageButton
					key={pageNumber}
					onClick={() => handlePageChange(pageNumber)}
					disabled={pageNumber === currentPage}
				>
					{pageNumber}
				</PageButton>
			))}

			<ControlButton
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				transparent
			>
				Next
			</ControlButton>
		</PaginationContainer>
	);
};

export default Pagination;
