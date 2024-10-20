import './Input.css';

export const Input = ({ value, placeholder, onChange }) => {
    return (
        <input className={'input'} value={value} placeholder={placeholder} onChange={onChange} />
    );
};