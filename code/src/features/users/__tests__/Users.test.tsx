import React from "react";
import {  fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "utils/test-helpers"
import { modalController } from "components/modal/ModalController";
import Users from "../Users";

export const MOCK_USEDATA = {
	data: {
		employees: [
			{
				id: "1",
				firstName: "Alex",
				lastName: "Clark",
				jobTitle: "Developer",
				bio: "bio 1",
				avatar: "image1.jpg",
				dateJoined: "2023-01-01",
				age: "35",
				contactNo: "1222222",
				address: "street 1",
			},
			{
				id: "2",
				firstName: "Ben",
				lastName: "Green",
				jobTitle: "Developer 2",
				bio: "bio 2",
				avatar: "image2.jpg",
				dateJoined: "2022-01-01",
				age: "30",
				contactNo: "33333",
				address: "street 2",
			},
		],
	},
	loading: false,
};

jest.mock("features/data-loader/DataContext", () => ({
	useData: () => MOCK_USEDATA,
}));

jest.mock("components/modal/ModalController");



describe("Users Component", () => {
	const setModalContent = jest.fn();

	beforeAll(() => {
		modalController.open = setModalContent;
	});

	test("renders with correct initial state", () => {
		render(<Users />);

		expect(screen.getByText(/alex clark/i)).toBeInTheDocument();
		expect(screen.getByText(/ben green/i)).toBeInTheDocument();
	});

	test("opens a modal when a user is clicked", async () => {
		render(<Users />);

		fireEvent.click(screen.getByTestId(/avatar-alex/i));

		await waitFor(() => {
			expect(setModalContent).toHaveBeenCalled();
		});
	});

	test("filters the users correctly", async () => {
    render(<Users />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText(/search/i), "alex");
		await user.click(screen.getByRole("button", { name: /search/i }));

		await screen.findByText(/alex/i);
		await waitFor(() => expect(screen.queryByText(/ben/i)).toBeNull());
	});
});
