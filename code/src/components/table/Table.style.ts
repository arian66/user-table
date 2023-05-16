import styled from "styled-components";

interface Cell {
	columnSpan: number;
}

export const StyledTable = styled.table`
	display: table;
	width: 100%;
	border-collapse: collapse;
`;

export const StyledTR = styled.tr`
	display: grid;
	grid-template-columns: 1fr 2fr 4fr 5fr;
	grid-auto-rows: auto;
`;

export const StyledTH = styled.th<Cell>`
	padding: 1rem;
	background-color: #f5f5f5;
	border: 1px solid #ddd;
	min-width: ${({ columnSpan }) => columnSpan * 100}px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	& button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 14px;
		padding: 0;
		margin-left: 4px;
		transition: transform 0.3s ease-in-out;
		&.ascending::before {
			content: "▲";
		}
		&.descending::before {
			content: "▼";
		}
		&:focus {
			outline: none;
		}
	}
`;

export const StyledTD = styled.td<Cell>`
	padding: 1rem;
	background-color: #fff;
	border: 1px solid #ddd;
	min-width: ${({ columnSpan }) => columnSpan * 100}px;
	text-align: center;
`;
