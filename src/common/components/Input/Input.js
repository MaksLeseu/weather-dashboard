import './Input.css';

export const Input = ({ value, style, placeholder, onChange }) => {
    return (
        <input
            className={'input'}
            style={{...style}}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};