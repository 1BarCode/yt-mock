import React, { ReactNode } from "react";
import styles from "./Modal.module.css";

export type Props = {
    isOpen: boolean;
    onClose: () => void;
    button: ReactNode;
    children: ReactNode;
    variant?: "default" | "static";
};

const Modal: React.FC<Props> = ({
    isOpen,
    onClose,
    button,
    children,
    variant = "default",
}) => {
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && variant !== "static") {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-black-300 bg-opacity-75 z-50 flex items-center justify-center ${styles.fadeOut}`}
                    onClick={handleBackdropClick}
                >
                    <div
                        className={`bg-white text-black-900 p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 ${
                            isOpen ? styles.slideInOpen : styles.hidden
                        }`}
                    >
                        <div className="flex justify-end">
                            <button className="text-gray-600" onClick={onClose}>
                                X
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
            {button}
        </>
    );
};

export default Modal;
