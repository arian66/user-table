import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

const ModalOverlay = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 9999;
`;

const ModalContent = styled.div`
	background-color: white;
	padding: 2rem;
	border-radius: 4px;
	max-width: 80%;
	position: relative;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		max-width: 100%;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
`;

const Button = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	color: ${({ theme }) => theme.palette.text.primary}
	outline: none;
	border: none;
	display: none;
	font-weight: 700;
	padding: .5rem;
	background-color: transparent;
		@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
	display: block;
	}
`;

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
	const modalRoot = document.getElementById("modal-root");

	useEffect(() => {
		const handleKeyUp = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [onClose]);

	if (!isOpen) {
		return null;
	}

	const modalContent = (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<Button onClick={onClose}>close</Button>
				{children}
			</ModalContent>
		</ModalOverlay>
	);

	return ReactDOM.createPortal(modalContent, modalRoot!);
};

export default Modal;
