import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 600px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100%;
		align-items: start;
		height: 100%;
	}
`;

export const ImageContainer = styled.div`
	width: 20%;
`;

export const Image = styled.img`
	width: 100%;
`;

export const TextContainer = styled.div`
	width: 80%;
	padding: 2rem;
	& .name {
		border-bottom: 2px solid ${({ theme }) => theme.palette.secondary.main};
	}
	& .content {
		padding: 1rem 0;
	}
`;
