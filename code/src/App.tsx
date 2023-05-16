import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./layouts/theme";
import Users from "features/users/Users";
import { ModalGenerator } from "components/modal/ModalController";
import { GlobalStyles } from "./layouts/GlobalStyles";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Users />
			<ModalGenerator />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
