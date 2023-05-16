import React, { useEffect, useState } from "react";
import Modal from "./Modal";

interface IModalController {
	open: (content: any) => void;
	close: () => void;
}

export const modalController: IModalController = {
	open: () => {},
	close: () => {},
};

export const ModalGenerator = () => {
		const [modalContent, setModalContent] = useState<React.ReactNode | null>(
			null
		);

	useEffect(() => {
		modalController.open = (modalContent: React.ReactNode) => {
			setModalContent(modalContent);
		};
		modalController.close = onClose;
	}, []);

	const onClose = () => {
		setModalContent(null);
	};

	return (
		<Modal isOpen={modalContent !== null} onClose={onClose}>
			{modalContent}
		</Modal>
	);
};
