import React from "react";

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
		<div>
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Prev
			</button>

			{pageNumbers.map((pageNumber) => (
				<button
					key={pageNumber}
					onClick={() => handlePageChange(pageNumber)}
					disabled={pageNumber === currentPage}
				>
					{pageNumber}
				</button>
			))}

			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
