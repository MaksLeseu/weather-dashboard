import './Pagination.css';

export const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
    return (
        <div className={'pagination_container'}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                {'<'}
            </button>
            <span>page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                {'>'}
            </button>
        </div>
    );
};
