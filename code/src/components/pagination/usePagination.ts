import { useState } from "react";

interface UsePaginationProps {
	totalPages: number;
	initialPage?: number;
}

interface UsePaginationResult {
	currentPage: number;
	setCurrentPage: (page: number) => void;
}

const usePagination = (props: UsePaginationProps): UsePaginationResult => {
	const { totalPages, initialPage = 1 } = props;

	const [currentPage, setCurrentPage] = useState(initialPage);

	const handlePageChange = (newPage: number) => {
		if (newPage > 0 && newPage <= totalPages) {
			setCurrentPage(newPage);
		}
	};

	return {
		currentPage,
		setCurrentPage: handlePageChange,
	};
};

export default usePagination;
