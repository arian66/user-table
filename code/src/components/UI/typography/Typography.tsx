import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface StyledTypographyProps {
	variant: "header" | "subheader" | "body";
	textAlign?: "left" | "right" | "center";
	error?: boolean;
}

const StyledTypography = styled.div<StyledTypographyProps>`
	text-align: ${({ textAlign }) => textAlign && textAlign};
	color: ${({error, theme}) => error ? theme.palette.error.main : 'inherit'};
	${({ variant }) => {
		switch (variant) {
			case "header":
				return css`
					font-size: 2rem;
					font-weight: bold;
					line-height: 1.2;
					margin: 0;
				`;
			case "subheader":
				return css`
					font-size: 1.5rem;
					font-weight: 500;
					line-height: 1.3;
					margin: 0;
				`;
			case "body":
			default:
				return css`
					font-size: 1rem;
					font-weight: 400;
					line-height: 1.5;
					margin: 0;
				`;
		}
	}}
`;

interface TypographyProps {
	variant?: "header" | "subheader" | "body";
	textAlign?: "left" | "right" | "center";
	error?: boolean;
	children: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
	variant = "body",
	textAlign,
	children,
	error,
}) => {
	const renderContent = () => {
		switch (variant) {
			case "header":
				return <h1>{children}</h1>;
			case "subheader":
				return <h3>{children}</h3>;
			case "body":
			default:
				return <p>{children}</p>;
		}
	};

	return (
		<StyledTypography variant={variant} textAlign={textAlign} error={error}>
			{renderContent()}
		</StyledTypography>
	);
};

export default Typography;
