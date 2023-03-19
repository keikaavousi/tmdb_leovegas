import {
	useState,
	useImperativeHandle,
	forwardRef,
	useCallback,
	useEffect,
} from "react";
import { createPortal } from "react-dom";
import "../styles/modal.scss";

const modalElement = document.getElementById("modal-root");

const Modal = ({ children, defaultOpened = false }, ref) => {
	const [isOpen, setIsOpen] = useState(defaultOpened);

	const close = useCallback(() => setIsOpen(false), []);

	useImperativeHandle(
		ref,
		() => ({
			open: () => setIsOpen(true),
			close: () => setIsOpen(false),
		}),
		[close],
	);

	const handleEscape = useCallback((event) => {
		if (event.keyCode === 27) setIsOpen(false);
	}, []);

	useEffect(() => {
		if (isOpen) document.addEventListener("keydown", handleEscape, false);
		return () => {
			document.removeEventListener("keydown", handleEscape, false);
		};
	}, [handleEscape, isOpen]);

	return createPortal(
		isOpen ? (
			<div className={`modal`} data-testid='modal'>
				<div className='modal-overlay' onClick={close} />

				<div className='modal-body'>
					<span
						role='button'
						className='modal-close'
						aria-label='close'
						onClick={close}>
						&times;
					</span>
					{children}
				</div>
			</div>
		) : null,
		modalElement,
	);
};

export default forwardRef(Modal);
