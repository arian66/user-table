import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./layouts/theme";
import Users from "features/users/Users";
import { ModalGenerator } from "components/modal/ModalController";
import { GlobalStyles } from "./layouts/GlobalStyles";
import Layout from "layouts/Layout";
import { DataProvider } from "features/data-loader/DataContext";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<DataProvider>
			<Layout>
				<Users />
			</Layout>
			</DataProvider>
			<ModalGenerator />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
