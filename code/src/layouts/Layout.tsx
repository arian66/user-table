import React from "react";
import styled from "styled-components";
import Navbar from "components/navbar/Navbar";

interface LayoutProps {
	children: React.ReactNode;
}

const ContentContainer = styled.div`
	padding: 1.5rem;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Navbar title="Company Name" content="since" motto="motto" />
			<ContentContainer>{children}</ContentContainer>
		</div>
	);
};

export default Layout;
