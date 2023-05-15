import { DefaultTheme } from "styled-components";

enum COLORS {
	WHITE = "#FFF",
	BLACK = "#101010",
	LIGHT_GREY = "#ccc",
	GREY = "#999",
	DARK_GREY = "#606060",
	LIGHT_BLUE = "#007bff",
	RED = "#d32f2f",
}

export const theme: DefaultTheme = {
	palette: {
		common: {
			white: COLORS.WHITE,
			black: COLORS.BLACK,
		},
		primary: {
			main: COLORS.LIGHT_BLUE,
		},
		secondary: {
			main: COLORS.GREY,
		},
		error: {
			main: COLORS.RED,
		},
		background: {
			default: COLORS.WHITE,
		},
		text: {
			primary: COLORS.DARK_GREY,
		},
		action: {
			disabled: COLORS.LIGHT_GREY,
		},
	},
	breakpoints: {
		mobile: "720px"
	}
};
