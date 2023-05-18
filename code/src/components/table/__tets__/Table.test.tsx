import { render, screen, fireEvent } from "@testing-library/react";
import Table from "../Table";

const headers = [
	{ name: "id", label: "Id", columnSpan: 1 },
	{ name: "name", label: "Name", columnSpan: 1.5 },
	{ name: "contactNo", label: "ContactNo", columnSpan: 2 },
	{ name: "address", label: "Address", columnSpan: 2 },
];

const data = [
	{ id: "1", name: "user-2", contactNo: "123456789", address: "Street 1" },
	{ id: "2", name: "user-1", contactNo: "987654321", address: "Street 2" },
];

describe("Table Component", () => {
	test("renders table headers correctly", () => {
		render(<Table headers={headers} data={data} />);
		headers.forEach((header) => {
			const headerElement = screen.getByText(header.label);
			expect(headerElement).toBeInTheDocument();
		});
	});

	test("renders table data correctly", () => {
		render(<Table headers={headers} data={data} />);
		data.forEach((row) => {
			Object.values(row).forEach((value) => {
				const cell = screen.getByText(value);
				expect(cell).toBeInTheDocument();
			});
		});
	});

	test("sorts table data correctly", () => {
		render(<Table headers={headers} data={data} />);

		const nameHeader = screen.getByTestId("sort-button-name");
		fireEvent.click(nameHeader);

		const cells = screen.getAllByRole("cell");
		expect(cells[1].textContent).toBe("user-1");
		expect(cells[5].textContent).toBe("user-2");
	});
});
