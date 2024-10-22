import './styles.css';

export const Button = ({ children, type, disabled, onClick }) => {
    return (
        <button
            className={'button'}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            { children }
        </button>
    );
};
