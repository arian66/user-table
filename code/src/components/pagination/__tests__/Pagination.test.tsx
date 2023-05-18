import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "utils/test-helpers";
import Pagination from "../Pagination";

describe("Pagination Component", () => {
	const totalPages = 5;
	const handlePageChange = jest.fn();

	test("should have correct number of pages", () => {
		render(
			<Pagination
				currentPage={1}
				handlePageChange={handlePageChange}
				totalPages={totalPages}
			/>
		);
		const buttons = screen.getAllByRole("button");
		expect(buttons.length).toBe(totalPages + 2);
	});

	test("prev button is disabled on first page", () => {
		render(
			<Pagination
				currentPage={1}
				handlePageChange={handlePageChange}
				totalPages={totalPages}
			/>
		);
		const prevButton = screen.getByText("Prev");
		expect(prevButton).toBeDisabled();
	});

	test("next button is disabled on last page", () => {
		render(
			<Pagination
				currentPage={totalPages}
				handlePageChange={handlePageChange}
				totalPages={totalPages}
			/>
		);
		const nextButton = screen.getByText("Next");
		expect(nextButton).toBeDisabled();
	});

	test("calls handlePageChange correctly when next button is clicked", async () => {
		render(
			<Pagination
				currentPage={1}
				handlePageChange={handlePageChange}
				totalPages={totalPages}
			/>
		);
		const user = userEvent.setup();
		await user.click(screen.getByText("Next"));

		expect(handlePageChange).toHaveBeenCalledWith(2);
	});

	test("calls handlePageChange when prev button is clicked", async () => {
		render(
			<Pagination
				currentPage={2}
				handlePageChange={handlePageChange}
				totalPages={totalPages}
			/>
		);
		const user = userEvent.setup();
		await user.click(screen.getByText("Prev"));

		expect(handlePageChange).toHaveBeenCalledWith(1);
	});

	test("calls handlePageChange when page button is clicked", async () => {
		render(
			<Pagination
				currentPage={1}
				handlePageChange={handlePageChange}
				totalPages={totalPages}
			/>
		);
		const user = userEvent.setup();

		await user.click(screen.getByText("2"));
		expect(handlePageChange).toHaveBeenCalledWith(2);
	});
});