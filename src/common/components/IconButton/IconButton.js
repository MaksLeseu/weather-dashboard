import './styles.css'


export const IconButton = ({ styles , icon, onClick }) => {
    if (!icon) {
        return null;
    }

    return (
        <button className={`icon-button`} style={{...styles}} onClick={onClick}>
            { icon }
        </button>
    );
};
