
export const IconButton = ({ src, styles, onClick }) => {
    if (!src) {
        return;
    }

    return (
        <button style={{...styles}} onClick={onClick}>
            <img style={{ width: '100%', height: '100%' }} src={src} />
        </button>
    );
};
