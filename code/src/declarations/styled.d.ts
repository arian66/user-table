import "styled-components";

interface ICommonPalette {
	white: string;
	black: string;
}
interface IMainPalette {
	main: string;
}

interface IBackgroundPalette {
	default: string;
}

interface ITextPalette {
	primary: string;
}

interface IActionPalette {
	disabled: string;
}

interface IBreakpoints {
	mobile: string;
}

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			common: ICommonPalette;
			primary: IMainPalette;
			secondary: IMainPalette;
			error: IMainPalette;
			background: IBackgroundPalette;
			text: ITextPalette;
			action: IActionPalette;
		};
		breakpoints: IBreakpoints;
	}
}
