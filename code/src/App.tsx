import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./layouts/theme";
import Users from "features/users/Users";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Users />
		</ThemeProvider>
	);
}

export default App;
