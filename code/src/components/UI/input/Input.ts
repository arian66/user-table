import styled from "styled-components";

interface InputProps {
	error?: boolean;
}

const Input = styled.input<InputProps>`
	width: 100%;
	padding: 10px 20px;
	font-size: 16px;
	border: 2px solid
		${({ error, theme }) =>
			error ? theme.palette.error.main : theme.palette.secondary.main};
	border-radius: 4px;
	outline: none;
	transition: border-color 0.2s;
	&:focus {
		border-color: ${({ error, theme }) =>
			error ? theme.palette.error.main : theme.palette.primary.main};
	}
`;

export default Input;
