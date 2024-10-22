import './styles.css';

export const ModalWindow = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={'modal_container'} onClick={handleOverlayClick}>
            <div className={'modal_content'}>
                <button className={'modal_close'} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};