import styled from "styled-components";
import Button from "components/UI/button/Button";

export const PaginationContainer = styled.div`
display: flex;
`

export const ControlButton = styled(Button)`
	width: 80px;
	margin: 0 1rem;
`;

export const PageButton = styled.button`
border: none;
background: transparent;
width: 30px;
font-weight: 700;
font-size: 20px;
padding: 0.5rem;
`
