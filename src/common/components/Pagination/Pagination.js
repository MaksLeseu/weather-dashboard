import './Pagination.css';

export const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
    if (totalPages < currentPage) {
        return;
    }

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
