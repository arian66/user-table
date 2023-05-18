import React from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { theme } from "../layouts/theme";

const customRender = (ui: React.ReactElement) => {
	return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

export { customRender as render };
