import React from "react";
import styled from "styled-components";
import Navbar from "components/navbar/Navbar";
import { useData } from "features/data-loader/DataContext";
import { getDate } from "utils/helper-functions";

interface LayoutProps {
	children: React.ReactNode;
}

const ContentContainer = styled.div`
	padding: 1.5rem;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { data } = useData();
	let title = "";
	let content = "";
	let motto = "";
	if (data) {
		title = data?.companyInfo?.companyName ?? "";
		const date = data?.companyInfo?.companyEst;
		motto = data?.companyInfo?.companyMotto;
		content = `since ${getDate(date)}`;
	}

	return (
		<div>
			<Navbar title={title} content={content} motto={motto} />
			<ContentContainer>{children}</ContentContainer>
		</div>
	);
};

export default Layout;
