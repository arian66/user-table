import React from "react";
import styled from "styled-components";
import Typography from "components/UI/typography/Typography";

interface NavbarProps {
	title: string;
	content: string;
	motto: string;
}

const NavbarContainer = styled.nav`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	z-index: 100;
	background-color: ${({theme})=> theme.palette.background.default};
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 0.5rem 1rem 0.3rem;
	width : 100%;
	& header{
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: .5rem;
	}
	& .content {

	}
`;

const Navbar: React.FC<NavbarProps> = ({ title, content, motto }) => {
	return (
		<NavbarContainer>
			<header>
				<Typography variant="subheader">{title}</Typography>
				<Typography >{motto}</Typography>
			</header>
			<Typography className="content" >{content}</Typography>
		</NavbarContainer>
	);
};

export default Navbar;
