import styled from "styled-components";

interface ButtonProps {
	transparent?: boolean;
	disabled?: boolean;
	width?: string;
}

const StyledButton = styled.button<ButtonProps>`
	display: block;
	width: ${({width}) => width ?? "100%"};
	padding: 10px;
	border-radius: 4px;
	border: ${({ transparent, theme }) =>
		transparent
			? ` 2px solid ${theme.palette.secondary.main}`
			: `2px solid ${theme.palette.primary.main}`};
	background-color: ${({ transparent, theme }) =>
		transparent ? "transparent" : theme.palette.primary.main};
	color: ${({ theme, transparent }) =>
		transparent ? theme.palette.text.primary : theme.palette.common.white};
	font-size: 16px;
	cursor: pointer;
	transition: border-color 0.3s, background-color 0.3s, color 0.3s;

	&:disabled {
		border-color: ${({ transparent, theme }) =>
			transparent && theme.palette.action.disabled};
		border-style: ${({ transparent }) => !transparent && "none"};
		background-color: ${({ transparent, theme }) =>
			transparent ? "transparent" : theme.palette.secondary.main};
		color: ${({ theme }) => theme.palette.action.disabled};
		cursor: not-allowed;
	}
`;

export default StyledButton;
